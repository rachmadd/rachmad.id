import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import type { Locale } from "@/content/schema";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type ImageProps = {
  params: Promise<{ locale: string }>;
};

// No explicit font fetch (see docs/DECISIONS.md) — @vercel/og's default
// sans renders legibly at this size; it just doesn't pixel-match Geist.
export default async function Image({ params }: ImageProps) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0b0b0d",
          padding: "80px",
        }}
      >
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            backgroundColor: "#ef233c",
            marginBottom: 36,
            display: "flex",
          }}
        />
        <div style={{ fontSize: 64, color: "#edf2f4", fontWeight: 600, display: "flex" }}>
          {site.name}
        </div>
        <div style={{ fontSize: 32, color: "#8d99ae", marginTop: 18, display: "flex" }}>
          {site.primaryTitle[locale]}
        </div>
        <div style={{ fontSize: 24, color: "#8d99ae", marginTop: 48, display: "flex" }}>
          {site.domain}
        </div>
      </div>
    ),
    { ...size },
  );
}
