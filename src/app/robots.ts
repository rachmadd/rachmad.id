import type { MetadataRoute } from "next";
import { getSiteUrl, isProductionDeployment } from "@/lib/site-url";

const AI_USER_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();
  const production = isProductionDeployment();

  const rules: MetadataRoute.Robots["rules"] = [
    {
      userAgent: "*",
      allow: production ? "/" : undefined,
      disallow: production ? undefined : "/",
    },
    ...AI_USER_AGENTS.map((userAgent) => ({
      userAgent,
      allow: production ? "/" : undefined,
      disallow: production ? undefined : "/",
    })),
  ];

  return {
    rules,
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
