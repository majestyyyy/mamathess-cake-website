const isDev = process.env.NODE_ENV !== 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
  async headers() {
    const cspDirectives = [
      "default-src 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "object-src 'none'",
      isDev
        ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com https://vitals.vercel-insights.com"
        : "script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com https://vitals.vercel-insights.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data:",
      isDev
        ? "connect-src 'self' https://challenges.cloudflare.com https://vitals.vercel-insights.com ws: http://localhost:* ws://localhost:*"
        : "connect-src 'self' https://challenges.cloudflare.com https://vitals.vercel-insights.com",
      "frame-src 'self' https://challenges.cloudflare.com https://www.google.com https://maps.google.com",
    ]

    if (!isDev) {
      cspDirectives.push('upgrade-insecure-requests')
    }

    const securityHeaders = [
      {
        key: 'Content-Security-Policy',
        value: cspDirectives.join('; '),
      },
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      {
        key: 'Permissions-Policy',
        value:
          'camera=(), microphone=(), geolocation=(), payment=(), usb=(), display-capture=(), interest-cohort=(), screen-wake-lock=(), midi=(), magnetometer=(), gyroscope=(), accelerometer=()',
      },
      { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
      { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
      { key: 'X-DNS-Prefetch-Control', value: 'on' },
      { key: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
    ]

    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig

