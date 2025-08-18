import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add compression headers
  response.headers.set('Accept-Encoding', 'gzip, deflate, br');
  
  // Enable compression for text-based content types
  const contentType = response.headers.get('content-type') || '';
  if (
    contentType.includes('text/') ||
    contentType.includes('application/json') ||
    contentType.includes('application/javascript') ||
    contentType.includes('application/xml') ||
    contentType.includes('application/xml+rss') ||
    contentType.includes('application/atom+xml') ||
    contentType.includes('application/rdf+xml') ||
    contentType.includes('application/rss+xml') ||
    contentType.includes('application/xhtml+xml') ||
    contentType.includes('application/x-www-form-urlencoded') ||
    contentType.includes('application/x-font-ttf') ||
    contentType.includes('application/x-font-opentype') ||
    contentType.includes('application/vnd.ms-fontobject') ||
    contentType.includes('image/svg+xml') ||
    contentType.includes('image/x-icon')
  ) {
    response.headers.set('Vary', 'Accept-Encoding');
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
