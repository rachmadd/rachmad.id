export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://rachmad.id";
}

export function isProductionDeployment(): boolean {
  return process.env.VERCEL_ENV === "production";
}
