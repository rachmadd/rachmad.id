import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { routing } from "@/i18n/routing";
import { getSiteUrl } from "@/lib/site-url";

function languageAlternates(path: string, siteUrl: string) {
  return Object.fromEntries(
    routing.locales.map((locale) => [locale, `${siteUrl}/${locale}${path}`]),
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  const homeEntries = routing.locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified,
    alternates: { languages: languageAlternates("", siteUrl) },
  }));

  const projectEntries = projects.flatMap((project) => {
    const path = `/projects/${project.slug}`;
    return routing.locales.map((locale) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified,
      alternates: { languages: languageAlternates(path, siteUrl) },
    }));
  });

  return [...homeEntries, ...projectEntries];
}
