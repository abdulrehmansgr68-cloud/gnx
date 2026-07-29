import crypto from "crypto";

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitRecord>();

// Cleanup stale records periodically (every 10 minutes)
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of rateLimitStore.entries()) {
    if (now > record.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, 10 * 60 * 1000);

export function getClientFingerprint(req: Request): string {
  const headers = req.headers;
  const ip =
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headers.get("x-real-ip") ||
    "127.0.0.1";

  // Standardize IPv4 / IPv6 subnet to handle CGNAT gracefully
  let ipSubnet = ip;
  if (ip.includes(".")) {
    // IPv4 /24 subnet (e.g. 192.168.1.xxx -> 192.168.1)
    ipSubnet = ip.split(".").slice(0, 3).join(".");
  } else if (ip.includes(":")) {
    // IPv6 /48 subnet
    ipSubnet = ip.split(":").slice(0, 3).join(":");
  }

  const userAgent = headers.get("user-agent") || "";
  const acceptLang = headers.get("accept-language") || "";

  const rawFingerprint = `${ipSubnet}:${userAgent.slice(0, 50)}:${acceptLang.slice(0, 20)}`;
  return crypto.createHash("sha256").update(rawFingerprint).digest("hex").slice(0, 32);
}

export function checkRateLimit(
  fingerprint: string,
  limit: number = 5,
  windowMs: number = 15 * 60 * 1000
): { allowed: boolean; remaining: number; resetMs: number } {
  const now = Date.now();
  const record = rateLimitStore.get(fingerprint);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(fingerprint, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { allowed: true, remaining: limit - 1, resetMs: windowMs };
  }

  if (record.count >= limit) {
    return {
      allowed: false,
      remaining: 0,
      resetMs: Math.max(0, record.resetTime - now),
    };
  }

  record.count += 1;
  return {
    allowed: true,
    remaining: limit - record.count,
    resetMs: Math.max(0, record.resetTime - now),
  };
}
