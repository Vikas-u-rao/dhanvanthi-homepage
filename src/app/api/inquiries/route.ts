import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const adminPasswordCookie = cookieStore.get("admin_password")?.value;
  const expectedPassword = process.env.ADMIN_PASSWORD || "admin123";

  // Enforce password verification on the backend
  if (!adminPasswordCookie || adminPasswordCookie !== expectedPassword) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const inquiries = await db.inquiry.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(inquiries, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch inquiries:", error);
    return NextResponse.json(
      { message: "An error occurred while loading inquiries." },
      { status: 500 }
    );
  }
}
