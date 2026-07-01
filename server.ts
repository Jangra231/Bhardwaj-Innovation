/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import dotenv from "dotenv";
import { z } from "zod";
import { createServer as createViteServer } from "vite";
import {
  connectToDatabase,
  addMemoryEnquiry,
  getMemoryEnquiries,
} from "./src/db/connection";
import { EnquiryModel } from "./src/db/models/Enquiry";

// Load environment variables
dotenv.config();

// Validation Schema using Zod
const EnquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  contactNo: z.string().min(8, "Contact number must be at least 8 digits"),
  email: z.string().email("Invalid email address"),
  organization: z.string().default(""),
  designation: z.string().default(""),
  serviceNeeded: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON
  app.use(express.json());

  // Connect to MongoDB Database
  const dbStatus = await connectToDatabase();

  // API Route: POST /api/enquiries
  app.post("/api/enquiries", async (req, res) => {
    try {
      // Validate request payload using Zod
      const parsedData = EnquirySchema.parse(req.body);

      // Re-evaluate database connection status
      const { mode } = await connectToDatabase();

      let savedData;
      if (mode === "mongodb") {
        const newEnquiry = new EnquiryModel(parsedData);
        savedData = await newEnquiry.save();
        console.log(`✅ Enquiry saved to MongoDB Atlas: ${savedData._id}`);
      } else {
        savedData = addMemoryEnquiry(parsedData);
        console.log(`ℹ️ Enquiry saved in-memory (fallback): ${savedData._id}`);
      }

      return res.status(201).json({
        success: true,
        message: "Enquiry submitted successfully!",
        data: savedData,
        dbMode: mode,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          error: "Validation failed",
          details: error.issues.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        });
      }

      console.error("Error processing enquiry submission:", error);
      return res.status(500).json({
        success: false,
        error: "Internal server error while saving enquiry",
      });
    }
  });

  // API Route: GET /api/enquiries (Handy admin/utility endpoint to inspect submissions)
  app.get("/api/enquiries", async (req, res) => {
    try {
      const { mode } = await connectToDatabase();
      let enquiries = [];

      if (mode === "mongodb") {
        enquiries = await EnquiryModel.find()
          .sort({ createdAt: -1 })
          .limit(100);
      } else {
        enquiries = [...getMemoryEnquiries()].reverse();
      }

      return res.json({
        success: true,
        dbMode: mode,
        count: enquiries.length,
        data: enquiries,
      });
    } catch (error) {
      console.error("Error fetching enquiries:", error);
      return res.status(500).json({
        success: false,
        error: "Failed to retrieve enquiries",
      });
    }
  });

  // Serve static assets or mount Vite dev server
  if (process.env.NODE_ENV !== "production") {
    console.log("🚀 Initializing Vite Development Middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("📦 Serving compiled production assets...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(
      `🌐 Server running at http://0.0.0.0:${PORT} in ${process.env.NODE_ENV || "development"} mode`,
    );
  });
}

startServer().catch((err) => {
  console.error("💥 Server failed to start:", err);
});
