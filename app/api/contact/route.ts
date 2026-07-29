import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mail";
import { checkRateLimit, getClientFingerprint } from "@/lib/rate-limit";

export async function POST(req: Request) {
  try {
    // 1. Rate Limiting Check (Max 5 requests per 15 minutes per client fingerprint)
    const fingerprint = getClientFingerprint(req);
    const rateLimit = checkRateLimit(fingerprint, 5, 15 * 60 * 1000);

    if (!rateLimit.allowed) {
      const retrySeconds = Math.ceil(rateLimit.resetMs / 1000);
      return NextResponse.json(
        {
          success: false,
          error: `Too many contact submissions. Please try again in ${Math.ceil(retrySeconds / 60)} minute(s).`,
        },
        {
          status: 429,
          headers: {
            "Retry-After": retrySeconds.toString(),
          },
        }
      );
    }

    // 2. Parse & Validate Payload Size
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "Invalid request payload." },
        { status: 400 }
      );
    }

    const { fullName, email, phone, message, website_url, form_time } = body;

    // 3. Honeypot Bot Check: hidden field filled by automated scripts
    if (typeof website_url === "string" && website_url.trim().length > 0) {
      // Return silent success to trick spam bot without sending email
      return NextResponse.json(
        { success: true, message: "Your inquiry has been sent successfully!" },
        { status: 200 }
      );
    }

    // 4. Time-Delta Check: form submitted faster than human typing speed (< 2500ms)
    if (typeof form_time === "number" && Date.now() - form_time < 2500) {
      return NextResponse.json(
        { success: true, message: "Your inquiry has been sent successfully!" },
        { status: 200 }
      );
    }

    // 5. Full Name Validation (2-60 chars, letters/spaces/dots/hyphens)
    const trimmedName = typeof fullName === "string" ? fullName.trim() : "";
    const nameRegex = /^[a-zA-Z\s.-]{2,60}$/;
    if (!trimmedName || !nameRegex.test(trimmedName)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid full name." },
        { status: 400 }
      );
    }

    // 6. Email Address Validation
    const trimmedEmail = typeof email === "string" ? email.trim() : "";
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid email address (e.g. name@domain.com).",
        },
        { status: 400 }
      );
    }

    // 7. Indian Phone Number Validation (10-digit Indian mobile starting with 6-9)
    let digitsOnly = typeof phone === "string" ? phone.replace(/\D/g, "") : "";
    if (digitsOnly.length === 12 && digitsOnly.startsWith("91")) {
      digitsOnly = digitsOnly.slice(2);
    } else if (digitsOnly.length === 11 && digitsOnly.startsWith("0")) {
      digitsOnly = digitsOnly.slice(1);
    }

    const indianMobileRegex = /^[6-9]\d{9}$/;
    if (!digitsOnly || !indianMobileRegex.test(digitsOnly)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid 10-digit Indian mobile number.",
        },
        { status: 400 }
      );
    }
    const formattedPhone = `+91 ${digitsOnly.slice(0, 5)} ${digitsOnly.slice(5)}`;

    // 8. Message Length Validation (Minimum 50 characters)
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

    // 9. Send Email via Nodemailer Transporter
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
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error processing contact API submission:", errMessage);

    // Secure response: do not expose internal error details/stack traces to client
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email inquiry. Please try again later or call our support line.",
      },
      { status: 500 }
    );
  }
}
