import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; frame-ancestors 'none'; base-uri 'self'",
  },
];

const nextConfig: NextConfig = {
  agentRules: false,
  async headers() {
    const isProduction = process.env.VERCEL_ENV === "production";
    const headers = isProduction
      ? securityHeaders
      : [...securityHeaders, { key: "X-Robots-Tag", value: "noindex, nofollow" }];

    return [
      {
        source: "/:path*",
        headers,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
