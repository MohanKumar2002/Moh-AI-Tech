/**
 * In-Memory Sliding Window Rate Limiter
 * Provides DDoS, brute-force, and spam mitigation for API routes and server actions.
 */

interface RateLimitRecord {
  timestamps: number[];
}

const rateLimitMap = new Map<string, RateLimitRecord>();

// Periodic garbage collection every 5 minutes to prevent memory leak
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, record] of rateLimitMap.entries()) {
      // Remove records older than 15 minutes
      const valid = record.timestamps.filter((ts) => now - ts < 15 * 60 * 1000);
      if (valid.length === 0) {
        rateLimitMap.delete(key);
      } else {
        record.timestamps = valid;
      }
    }
  }, 5 * 60 * 1000);
}

export interface RateLimitOptions {
  limit: number;       // Maximum allowed requests
  windowMs: number;    // Window duration in milliseconds
  identifier?: string; // Prefix or namespace (e.g. 'contact-form', 'login')
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  resetTime: number;
}

/**
 * Checks and updates rate limit for a specific IP or identifier.
 */
export function checkRateLimit(ipOrKey: string, options: RateLimitOptions): RateLimitResult {
  const { limit, windowMs, identifier = 'global' } = options;
  const key = `${identifier}:${ipOrKey}`;
  const now = Date.now();
  const windowStart = now - windowMs;

  let record = rateLimitMap.get(key);
  if (!record) {
    record = { timestamps: [] };
    rateLimitMap.set(key, record);
  }

  // Filter timestamps within current window
  record.timestamps = record.timestamps.filter((ts) => ts > windowStart);

  if (record.timestamps.length >= limit) {
    const earliestTimestamp = record.timestamps[0] || now;
    const resetTime = earliestTimestamp + windowMs;
    return {
      success: false,
      limit,
      remaining: 0,
      resetTime,
    };
  }

  // Record current request
  record.timestamps.push(now);
  const remaining = Math.max(0, limit - record.timestamps.length);
  const resetTime = now + windowMs;

  return {
    success: true,
    limit,
    remaining,
    resetTime,
  };
}

/**
 * Helper to extract client IP address from Next.js Request or Headers.
 */
export function getClientIp(req: Request): string {
  const headers = req.headers;
  const cfConnectingIp = headers.get('cf-connecting-ip');
  if (cfConnectingIp) return cfConnectingIp.trim();

  const xForwardedFor = headers.get('x-forwarded-for');
  if (xForwardedFor) {
    const firstIp = xForwardedFor.split(',')[0];
    if (firstIp) return firstIp.trim();
  }

  const xRealIp = headers.get('x-real-ip');
  if (xRealIp) return xRealIp.trim();

  return '127.0.0.1';
}
