import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import { routing } from "@/i18n/routing";
import { Nav } from "@/components/layout/Nav";
import { Vignette } from "@/components/layout/Vignette";
import { site } from "@/content/site";
import type { Locale } from "@/content/schema";
import { getSiteUrl, isProductionDeployment } from "@/lib/site-url";
import "../globals.css";

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: Pick<LocaleLayoutProps, "params">): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const siteUrl = getSiteUrl();
  const otherLocale: Locale = locale === "en" ? "id" : "en";

  return {
    metadataBase: new URL(siteUrl),
    title: site.seo.title[locale],
    description: site.seo.description[locale],
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        en: `${siteUrl}/en`,
        id: `${siteUrl}/id`,
        "x-default": `${siteUrl}/en`,
      },
    },
    openGraph: {
      type: "website",
      url: `${siteUrl}/${locale}`,
      siteName: site.domain,
      locale: locale === "en" ? "en_US" : "id_ID",
      alternateLocale: otherLocale === "en" ? "en_US" : "id_ID",
      title: site.seo.ogTitle[locale],
      description: site.seo.ogDescription[locale],
    },
    twitter: {
      card: "summary_large_image",
      title: site.seo.ogTitle[locale],
      description: site.seo.ogDescription[locale],
    },
    robots: isProductionDeployment()
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable}`}>
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
        <NextIntlClientProvider>
          <Nav />
          <main>{children}</main>
          <Vignette />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
