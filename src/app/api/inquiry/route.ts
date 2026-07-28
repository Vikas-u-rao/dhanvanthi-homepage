import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/validation";
import { db } from "@/lib/db";
import { Resend } from "resend";

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5; // Max 5 requests per 10 minutes per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + LIMIT_WINDOW_MS });
    return false;
  }

  if (now > record.resetTime) {
    record.count = 1;
    record.resetTime = now + LIMIT_WINDOW_MS;
    return false;
  }

  if (record.count >= MAX_REQUESTS) {
    return true;
  }

  record.count += 1;
  return false;
}

// Verify Turnstile Token
async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  
  if (!secretKey) {
    console.warn("Warning: TURNSTILE_SECRET_KEY is missing. Bypassing Turnstile validation in development.");
    return true;
  }

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
        remoteip: ip,
      }),
    });

    const data = await response.json();
    return !!data.success;
  } catch (error) {
    console.error("Error verifying Turnstile token:", error);
    return false;
  }
}

// Send Notification Email
async function sendNotificationEmail(inquiry: any) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.NOTIFICATION_EMAIL_ADDRESS;

  if (!apiKey || !toEmail) {
    console.warn("Warning: RESEND_API_KEY or NOTIFICATION_EMAIL_ADDRESS is missing. Skipping email notification.");
    return;
  }

  const resend = new Resend(apiKey);

  try {
    const formattedDate = new Date(inquiry.createdAt).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    await resend.emails.send({
      from: "Dhanvanti Valley Inquiries <inquiries@resend.dev>",
      to: toEmail,
      subject: `New Inquiry: ${inquiry.firstName} ${inquiry.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #638038; border-radius: 8px;">
          <h2 style="color: #638038; border-bottom: 2px solid #638038; padding-bottom: 10px; margin-top: 0;">New Inquiry Received</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px; border-bottom: 1px solid #f2f2f2;">Name:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f2f2f2;">${inquiry.firstName} ${inquiry.lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f2f2f2;">Email:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f2f2f2;"><a href="mailto:${inquiry.email}" style="color: #638038; text-decoration: none;">${inquiry.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f2f2f2;">Phone:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f2f2f2;"><a href="tel:${inquiry.phone}" style="color: #638038; text-decoration: none;">${inquiry.phone}</a></td>
            </tr>

            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f2f2f2;">Submitted:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f2f2f2;">${formattedDate} (IST)</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #f2f6df; border-left: 4px solid #638038; border-radius: 4px;">
            <strong style="color: #394d23; display: block; margin-bottom: 5px;">Message:</strong>
            <p style="margin: 0; line-height: 1.6; color: #2c2c2c; white-space: pre-wrap;">${inquiry.message}</p>
          </div>
        </div>
      `,
    });
  } catch (error) {
    // Catch email failure so that it does not block the db save/response
    console.error("Resend email dispatch failure:", error);
  }
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";

  // 1. Rate Limiting Check
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { message: "Too many requests. Please try again after 10 minutes." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { firstName, lastName, phone, email, message, turnstileToken } = body;

    // 2. Validate Turnstile Spam Protection
    if (!turnstileToken) {
      return NextResponse.json(
        { message: "Security token is missing. Please refresh and try again." },
        { status: 400 }
      );
    }

    const isHuman = await verifyTurnstile(turnstileToken, ip);
    if (!isHuman) {
      return NextResponse.json(
        { message: "Failed spam verification check." },
        { status: 400 }
      );
    }

    // 3. Server-side validation using Zod
    const validation = inquirySchema.safeParse({ firstName, lastName, phone, email, message });
    if (!validation.success) {
      const errors = validation.error.flatten().fieldErrors;
      return NextResponse.json(
        { message: "Validation error", errors },
        { status: 400 }
      );
    }

    // 4. Save to Database via Prisma
    const fullName = `${firstName} ${lastName}`.trim();
    const newInquiry = await db.inquiry.create({
      data: {
        name: fullName,
        phone,
        email,
        message,
        status: "NEW",
      },
    });

    // 5. Send Notification Email (async, caught internal errors)
    // Runs in the background and does not block response delivery
    sendNotificationEmail(newInquiry);

    return NextResponse.json(
      { message: "Inquiry submitted successfully.", id: newInquiry.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating inquiry:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
