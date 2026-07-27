import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, message } = body;

    // 1. Full Name Validation (at least 2 characters, letters/spaces/dots/hyphens)
    const trimmedName = typeof fullName === "string" ? fullName.trim() : "";
    const nameRegex = /^[a-zA-Z\s.-]{2,60}$/;
    if (!trimmedName || !nameRegex.test(trimmedName)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid full name." },
        { status: 400 }
      );
    }

    // 2. Email Address Validation
    const trimmedEmail = typeof email === "string" ? email.trim() : "";
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address (e.g. name@domain.com)." },
        { status: 400 }
      );
    }

    // 3. Indian Phone Number Validation (10-digit Indian mobile starting with 6-9)
    let digitsOnly = typeof phone === "string" ? phone.replace(/\D/g, "") : "";
    if (digitsOnly.length === 12 && digitsOnly.startsWith("91")) {
      digitsOnly = digitsOnly.slice(2);
    } else if (digitsOnly.length === 11 && digitsOnly.startsWith("0")) {
      digitsOnly = digitsOnly.slice(1);
    }

    const indianMobileRegex = /^[6-9]\d{9}$/;
    if (!digitsOnly || !indianMobileRegex.test(digitsOnly)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 10-digit Indian mobile number." },
        { status: 400 }
      );
    }
    const formattedPhone = `+91 ${digitsOnly.slice(0, 5)} ${digitsOnly.slice(5)}`;

    // 4. Message Length Validation (Minimum 50 characters)
    const trimmedMessage = typeof message === "string" ? message.trim() : "";
    if (!trimmedMessage || trimmedMessage.length < 50) {
      return NextResponse.json(
        {
          success: false,
          error: `Message must be at least 50 characters long (currently ${trimmedMessage.length} characters).`,
        },
        { status: 400 }
      );
    }

    // 2. Send Email via Nodemailer Transporter
    await sendContactEmail({
      fullName: trimmedName,
      email: trimmedEmail,
      phone: formattedPhone,
      message: trimmedMessage,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been sent successfully!",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          error?.message ||
          "Failed to send email inquiry. Please try again later.",
      },
      { status: 500 }
    );
  }
}
