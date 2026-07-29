import nodemailer from "nodemailer";
import { env } from "./env";

export const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: env.SMTP_PORT,
  secure: env.SMTP_PORT === 465, // true for 465, false for 587/25
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: env.SMTP_REJECT_UNAUTHORIZED,
  },
});

interface ContactFormPayload {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactEmail(payload: ContactFormPayload) {
  const { fullName, email, phone, message } = payload;

  if (!env.SMTP_USER || !env.SMTP_PASS) {
    throw new Error("SMTP credentials are missing in environment variables.");
  }

  const safeName = escapeHtml(fullName);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeMessage = escapeHtml(message);

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Lead Inquiry - GNX Power Solution</title>
    </head>
    <body style="margin:0; padding:0; background-color:#f4f6f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#1e293b;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#f4f6f8; padding: 24px 12px;">
        <tr>
          <td align="center">
            <table width="100%" max-width="600" border="0" cellspacing="0" cellpadding="0" style="max-width:600px; background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 10px 25px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
              
              <!-- Header -->
              <tr>
                <td style="background: linear-gradient(135deg, #007b99 0%, #015C8F 100%); padding: 30px 24px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">
                    GNX Power Solution
                  </h1>
                  <p style="color: #e0f2fe; margin: 6px 0 0 0; font-size: 13px; font-weight: 500;">
                    New Lead Inquiry Notification
                  </p>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding: 28px 24px;">
                  <p style="margin: 0 0 20px 0; font-size: 14px; color: #475569; line-height: 1.5;">
                    You have received a new customer inquiry from the <strong>GNX Power Solution</strong> website contact form.
                  </p>

                  <!-- User Info Card -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; border-radius: 12px; padding: 16px; border: 1px solid #e2e8f0; margin-bottom: 24px;">
                    <tr>
                      <td style="padding: 6px 0; font-size: 13px; color: #64748b; font-weight: 600; width: 110px;">Full Name:</td>
                      <td style="padding: 6px 0; font-size: 14px; color: #0f172a; font-weight: 700;">${safeName}</td>
                    </tr>
                    <tr>
                      <td style="padding: 6px 0; font-size: 13px; color: #64748b; font-weight: 600;">Email:</td>
                      <td style="padding: 6px 0; font-size: 14px; color: #007b99; font-weight: 700;">
                        <a href="mailto:${safeEmail}" style="color: #007b99; text-decoration: none;">${safeEmail}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 6px 0; font-size: 13px; color: #64748b; font-weight: 600;">Phone:</td>
                      <td style="padding: 6px 0; font-size: 14px; color: #0f172a; font-weight: 700;">
                        <a href="tel:${safePhone}" style="color: #0f172a; text-decoration: none;">${safePhone}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 6px 0; font-size: 13px; color: #64748b; font-weight: 600;">Date/Time:</td>
                      <td style="padding: 6px 0; font-size: 12px; color: #64748b; font-weight: 500;">
                        ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
                      </td>
                    </tr>
                  </table>

                  <!-- Message Content -->
                  <div style="margin-bottom: 24px;">
                    <label style="display: block; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                      Message / Requirement:
                    </label>
                    <div style="background-color: #ffffff; border: 1px solid #cbd5e1; border-left: 4px solid #f26522; border-radius: 8px; padding: 16px; font-size: 14px; color: #1e293b; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</div>
                  </div>

                  <!-- Quick Action Button -->
                  <div style="text-align: center; margin-top: 28px;">
                    <a href="mailto:${safeEmail}?subject=Re:%20Inquiry%20regarding%20GNX%20Power%20Solution" style="display: inline-block; background-color: #007b99; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-size: 14px; font-weight: 700; box-shadow: 0 4px 10px rgba(0,123,153,0.3);">
                      Reply to ${safeName}
                    </a>
                  </div>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color: #f1f5f9; padding: 16px 24px; text-align: center; border-top: 1px solid #e2e8f0;">
                  <p style="margin: 0; font-size: 11px; color: #94a3b8; font-weight: 500;">
                    This automated email was generated by GNX Power Solution website lead system.
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  try {
    return await transporter.sendMail({
      from: `"GNX Power Solution Web" <${env.SMTP_USER}>`,
      to: env.CONTACT_RECEIVER_EMAIL,
      replyTo: `"${fullName}" <${email}>`,
      subject: `⚡ New Inquiry from ${fullName} - GNX Power Solution`,
      html: htmlContent,
      text: `New Lead Inquiry\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });
  } catch (error) {
    console.error("Failed to send contact email via SMTP:", error);
    throw error;
  }
}
