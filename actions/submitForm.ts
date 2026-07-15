"use server";

import { z } from "zod";
import nodemailer from "nodemailer";
import dbConnect from "@/lib/mongodb";
import EnquiryModel, { EnquiryInput } from "@/models/Enquiry";

export type SubmitState = {
  success: boolean;
  message: string;
  data?: EnquiryInput & { id?: string; createdAt?: string };
  dbMode?: string;
  details?: { field: string; message: string }[];
};

const EnquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  contactNo: z.string().min(8, "Contact number must be at least 8 digits"),
  email: z.string().email("Invalid email address"),
  organization: z.string().default(""),
  designation: z.string().default(""),
  serviceNeeded: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

function createTransporter(): nodemailer.Transporter {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP environment variables are not fully configured.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

async function sendNotificationEmail(payload: EnquiryInput & { id?: string; createdAt?: string }) {
  const destinationEmail = process.env.DESTINATION_EMAIL;
  if (!destinationEmail) {
    console.warn("DESTINATION_EMAIL is not set; skipping notification email.");
    return;
  }

  const transporter = createTransporter();

  const html = `
    <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px;">
      <h2 style="color: #0f172a; margin-bottom: 4px;">New Enquiry Received</h2>
      <p style="color: #64748b; font-size: 13px; margin-bottom: 24px;">A new enquiry has been submitted via the Bhardwaj Innovations website.</p>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr><td style="padding: 8px 0; color: #64748b; width: 160px;"><strong>Name</strong></td><td style="padding: 8px 0; color: #0f172a;">${payload.name}</td></tr>
        <tr><td style="padding: 8px 0; color: #64748b;"><strong>Contact No</strong></td><td style="padding: 8px 0; color: #0f172a;">${payload.contactNo}</td></tr>
        <tr><td style="padding: 8px 0; color: #64748b;"><strong>Email</strong></td><td style="padding: 8px 0; color: #0f172a;">${payload.email}</td></tr>
        <tr><td style="padding: 8px 0; color: #64748b;"><strong>Organization</strong></td><td style="padding: 8px 0; color: #0f172a;">${payload.organization || "—"}</td></tr>
        <tr><td style="padding: 8px 0; color: #64748b;"><strong>Designation</strong></td><td style="padding: 8px 0; color: #0f172a;">${payload.designation || "—"}</td></tr>
        <tr><td style="padding: 8px 0; color: #64748b;"><strong>Service Needed</strong></td><td style="padding: 8px 0; color: #0f172a;">${payload.serviceNeeded}</td></tr>
      </table>
      <h3 style="color: #0f172a; margin-top: 24px; margin-bottom: 8px;">Message</h3>
      <p style="color: #475569; font-size: 14px; line-height: 1.6; background: #f8fafc; padding: 16px; border-radius: 8px;">${payload.message}</p>
    </div>
  `;

  await transporter.sendMail({
    from: `"Bhardwaj Innovations Website" <${process.env.SMTP_USER}>`,
    to: destinationEmail,
    subject: `New Enquiry: ${payload.serviceNeeded} — ${payload.name}`,
    text: `New enquiry from ${payload.name} (${payload.email}).\n\nService: ${payload.serviceNeeded}\nMessage: ${payload.message}`,
    html,
  });
}

export async function submitForm(
  _prevState: SubmitState | null,
  formData: FormData
): Promise<SubmitState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    contactNo: String(formData.get("contactNo") ?? ""),
    email: String(formData.get("email") ?? ""),
    organization: String(formData.get("organization") ?? ""),
    designation: String(formData.get("designation") ?? ""),
    serviceNeeded: String(formData.get("serviceNeeded") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const parsed = EnquirySchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      message: "Validation failed. Please check your fields.",
      details: parsed.error.issues.map((e) => ({
        field: e.path.join("."),
        message: e.message,
      })),
    };
  }

  const data = parsed.data;

  try {
    await dbConnect();
    const saved = await EnquiryModel.create(data);
    console.log(`✅ Enquiry saved to MongoDB Atlas: ${saved._id}`);

    try {
      await sendNotificationEmail({
        ...data,
        id: String(saved._id),
        createdAt: saved.createdAt?.toISOString(),
      });
      console.log("✅ Notification email dispatched.");
    } catch (emailErr) {
      console.error("⚠️ Nodemailer failed to send notification:", emailErr);
    }

    return {
      success: true,
      message: "Enquiry submitted successfully! Our team will reach out shortly.",
      data: {
        ...data,
        id: String(saved._id),
        createdAt: saved.createdAt?.toISOString(),
      },
      dbMode: "mongodb",
    };
  } catch (err) {
    console.error("Error processing enquiry submission:", err);
    return {
      success: false,
      message: "Internal server error while saving enquiry. Please try again later.",
    };
  }
}
