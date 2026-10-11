import { existsSync } from "node:fs";
import path from "node:path";
import type { ConceptComponentKey, Locale, Media } from "@/content/schema";

export type MediaDescriptor =
  | { kind: "carousel"; labels: string[] }
  | { kind: "video"; webm: string; mp4: string; poster: string; alt: string }
  | { kind: "concept"; component: ConceptComponentKey; alt: string }
  | { kind: "placeholder"; label: string };

function publicFileExists(relativePath: string): boolean {
  return existsSync(path.join(process.cwd(), "public", relativePath));
}

function hasVideoFiles(
  media: Extract<Media, { type: "scroll" | "concept" }>,
): media is Extract<Media, { type: "scroll" | "concept" }> & {
  webm: string;
  mp4: string;
  poster: string;
} {
  return (
    !!media.webm &&
    !!media.mp4 &&
    !!media.poster &&
    publicFileExists(media.webm) &&
    publicFileExists(media.mp4) &&
    publicFileExists(media.poster)
  );
}

export function resolveProjectMedia(
  media: Media,
  label: string,
  locale: Locale,
): MediaDescriptor {
  if (media.type === "carousel") {
    return {
      kind: "carousel",
      labels: media.images.map(
        (image, i) => image.alt[locale] || `${label} ${i + 1}`,
      ),
    };
  }

  if (media.type === "concept") {
    if (hasVideoFiles(media)) {
      return {
        kind: "video",
        webm: media.webm,
        mp4: media.mp4,
        poster: media.poster,
        alt: media.alt[locale],
      };
    }
    return { kind: "concept", component: media.component, alt: media.alt[locale] };
  }

  if (media.type === "scroll" && hasVideoFiles(media)) {
    return {
      kind: "video",
      webm: media.webm,
      mp4: media.mp4,
      poster: media.poster,
      alt: media.alt[locale],
    };
  }

  return { kind: "placeholder", label };
}
