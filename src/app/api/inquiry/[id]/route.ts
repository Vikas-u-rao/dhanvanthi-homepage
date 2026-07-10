import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { cookies } from "next/headers";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  // Simple Admin authorization check
  const cookieStore = await cookies();
  const adminPasswordCookie = cookieStore.get("admin_password")?.value;
  const expectedPassword = process.env.ADMIN_PASSWORD || "admin123";

  if (!adminPasswordCookie || adminPasswordCookie !== expectedPassword) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { status } = body;

    if (!["NEW", "CONTACTED", "CLOSED"].includes(status)) {
      return NextResponse.json(
        { message: "Invalid status. Must be NEW, CONTACTED, or CLOSED." },
        { status: 400 }
      );
    }

    const updatedInquiry = await db.inquiry.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json(updatedInquiry, { status: 200 });
  } catch (error) {
    console.error("Failed to update inquiry status:", error);
    return NextResponse.json(
      { message: "An error occurred while updating the inquiry status." },
      { status: 500 }
    );
  }
}
