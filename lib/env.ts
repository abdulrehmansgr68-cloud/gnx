export const env = {
  NEXT_PUBLIC_APP_URL:
    process.env.NEXT_PUBLIC_APP_URL || "https://gnxpowersolution.com",
  SMTP_HOST: process.env.SMTP_HOST || "smtp.gmail.com",
  SMTP_PORT: parseInt(process.env.SMTP_PORT || "587", 10),
  SMTP_USER: process.env.SMTP_USER || "",
  SMTP_PASS: process.env.SMTP_PASS || "",
  CONTACT_RECEIVER_EMAIL:
    process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER || "",
  SMTP_REJECT_UNAUTHORIZED:
    process.env.SMTP_REJECT_UNAUTHORIZED !== "false", // default true for production security
};
