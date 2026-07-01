/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import mongoose from "mongoose";

let isConnected = false;
let hasAttemptedConnection = false; // Tracks if we've already tried to connect once
let fallbackEnquiries: any[] = []; // In-memory fallback if Mongo is not connected

export async function connectToDatabase(): Promise<{
  success: boolean;
  mode: "mongodb" | "memory";
}> {
  const uri = process.env.MONGODB_URI;

  const isPlaceholder = false;

  if (isPlaceholder) {
    if (!hasAttemptedConnection) {
      hasAttemptedConnection = true;
      console.warn(
        "ℹ️ MongoDB Atlas database is not configured or uses a placeholder. Running in 'In-Memory Backup Mode'. All enquiries will be saved in-memory.",
      );
    }
    return { success: true, mode: "memory" };
  }

  if (isConnected) {
    return { success: true, mode: "mongodb" };
  }

  if (hasAttemptedConnection) {
    // Already attempted and failed earlier. Fall back immediately to prevent 5s timeout on every request.
    return { success: false, mode: "memory" };
  }

  try {
    hasAttemptedConnection = true;
    // Set standard options
    mongoose.set("strictQuery", true);
    await mongoose.connect(uri || "", {
      serverSelectionTimeoutMS: 2000, // Faster timeout for snappy responsiveness
    });

    isConnected = true;
    console.log("✅ Successfully connected to MongoDB Atlas via Mongoose.");
    return { success: true, mode: "mongodb" };
  } catch (error) {
    console.warn(
      "⚠️ Note: MongoDB Atlas connection attempt failed (" +
        (error instanceof Error ? error.message : String(error)) +
        "). Safely falling back to 'In-Memory Backup Mode' for this session.",
    );
    return { success: false, mode: "memory" };
  }
}

export function getMemoryEnquiries() {
  return fallbackEnquiries;
}

export function addMemoryEnquiry(enquiry: any) {
  const newEnquiry = {
    ...enquiry,
    _id: new mongoose.Types.ObjectId().toString(),
    createdAt: new Date(),
  };
  fallbackEnquiries.push(newEnquiry);
  return newEnquiry;
}
