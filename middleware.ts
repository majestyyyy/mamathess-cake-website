import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Block known probing and malicious vulnerability scanners immediately at the edge
const BLOCKED_PATHS = [
  /\/\.env/i,
  /\/\.git/i,
  /\/\.aws/i,
  /\/\.config/i,
  /\/wp-admin/i,
  /\/wp-login\.php/i,
  /\/xmlrpc\.php/i,
  /\/phpinfo\.php/i,
  /\/actuator/i,
  /\/\.DS_Store/i,
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 1. Proactive Edge Path Firewall
  if (BLOCKED_PATHS.some((pattern) => pattern.test(pathname))) {
    return new NextResponse('Access Denied', { status: 403 })
  }

  // 2. CSRF & Origin Defense for mutating HTTP methods
  if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(request.method)) {
    const origin = request.headers.get('origin')
    const host = request.headers.get('host')
    const secFetchSite = request.headers.get('sec-fetch-site')

    // Block cross-origin untrusted state-changing submissions
    if (secFetchSite === 'cross-site') {
      return new NextResponse('Cross-Origin Request Blocked', { status: 403 })
    }

    if (origin && host) {
      const originHost = new URL(origin).host
      if (originHost !== host) {
        return new NextResponse('Invalid Origin Header', { status: 403 })
      }
    }
  }

  const response = NextResponse.next()

  // 3. Defense-in-depth security response headers
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin')
  response.headers.set('Cross-Origin-Resource-Policy', 'same-origin')
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('X-Permitted-Cross-Domain-Policies', 'none')

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, icon.png, apple-icon.png (icons)
     * - images/ (public cake photos)
     */
    '/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|images/).*)',
  ],
}
