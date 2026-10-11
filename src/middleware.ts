import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Block known path traversal and probe attempts
  if (
    pathname.includes('/..') ||
    pathname.includes('/.env') ||
    pathname.includes('/wp-admin') ||
    pathname.includes('/phpmyadmin') ||
    pathname.includes('/.git')
  ) {
    return new NextResponse('Access Denied', { status: 403 });
  }

  // 2. Initialize response
  const response = NextResponse.next();

  // 3. Configure Robust HTTP Security Headers
  // Enforce HSTS (Strict-Transport-Security) for 2 years with preloading
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  );

  // Prevent Clickjacking
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');

  // Prevent MIME-sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff');

  // Strict Referrer Policy
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Restrict browser features and sensors
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), payment=(), usb=(), vr=(), interest-cohort=()'
  );

  // Disable DNS prefetching leaks
  response.headers.set('X-DNS-Prefetch-Control', 'on');

  // Content Security Policy (CSP)
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src 'self' https://fonts.gstatic.com data:;
    img-src 'self' data: blob: https://placehold.co https://moh-ai-tech.com https://www.google-analytics.com;
    media-src 'self' blob: data:;
    connect-src 'self' https://www.google-analytics.com https://api.callmebot.com;
    frame-src 'none';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim();

  response.headers.set('Content-Security-Policy', cspHeader);

  // 4. CORS configuration for API endpoints
  if (pathname.startsWith('/api/')) {
    const origin = request.headers.get('origin');
    const host = request.headers.get('host');

    // Only allow matching domain or local development
    const isAllowedOrigin =
      !origin ||
      (host && origin.includes(host)) ||
      origin.includes('moh-ai-tech.com') ||
      origin.includes('localhost');

    if (isAllowedOrigin && origin) {
      response.headers.set('Access-Origin-Allowed', 'true');
      response.headers.set('Access-Control-Allow-Origin', origin);
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      response.headers.set(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization, X-Requested-With'
      );
      response.headers.set('Access-Control-Allow-Credentials', 'true');
    }

    // Handle preflight OPTIONS request
    if (request.method === 'OPTIONS') {
      return new NextResponse(null, {
        status: 204,
        headers: response.headers,
      });
    }
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static assets:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, videos, fonts)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|webm|ico)$).*)',
  ],
};
