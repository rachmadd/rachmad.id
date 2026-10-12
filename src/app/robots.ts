import type { MetadataRoute } from "next";
import { getSiteUrl, isProductionDeployment } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();
  const production = isProductionDeployment();

  return {
    rules: {
      userAgent: "*",
      allow: production ? "/" : undefined,
      disallow: production ? undefined : "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
