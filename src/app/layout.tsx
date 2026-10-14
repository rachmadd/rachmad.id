import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/layout/Nav";
import { ThemeSync } from "@/components/layout/ThemeSync";
import { Vignette } from "@/components/layout/Vignette";
import { site } from "@/content/site";
import { getSiteUrl, isProductionDeployment } from "@/lib/site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export function generateMetadata(): Metadata {
  const siteUrl = getSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: site.seo.title,
    description: site.seo.description,
    alternates: {
      canonical: siteUrl,
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "32x32" },
        { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
    openGraph: {
      type: "website",
      url: siteUrl,
      siteName: site.domain,
      locale: "en_US",
      title: site.seo.ogTitle,
      description: site.seo.ogDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: site.seo.ogTitle,
      description: site.seo.ogDescription,
    },
    robots: isProductionDeployment()
      ? { index: true, follow: true }
      : { index: false, follow: false },
    verification: buildVerification(),
  };
}

function buildVerification(): Metadata["verification"] {
  const google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  const bing = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

  if (!google && !bing) return undefined;

  return {
    ...(google ? { google } : {}),
    ...(bing ? { other: { "msvalidate.01": bing } } : {}),
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("theme");var t=s==="light"||s==="dark"?s:(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`,
          }}
        />
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="relative min-h-screen bg-bg text-fg antialiased">
        <ThemeSync />
        <Nav />
        <main>{children}</main>
        <Vignette />
        <Analytics />
      </body>
    </html>
  );
}
