import { existsSync } from "node:fs";
import path from "node:path";
import type { ConceptComponentKey, Media } from "@/content/schema";

export const SCREENSHOT_LABEL = "attached soon";
export const INTERNAL_TOOL_LABEL = "Internal tool · media attached soon";

export type MediaDescriptor =
  | { kind: "carousel"; labels: string[] }
  | { kind: "imageCarousel"; slides: { src: string; alt: string }[] }
  | { kind: "video"; webm?: string; mp4: string; poster?: string; alt: string }
  | { kind: "concept"; component: ConceptComponentKey; alt: string }
  | { kind: "placeholder"; label: string };

function publicFileExists(relativePath: string): boolean {
  return existsSync(path.join(process.cwd(), "public", relativePath));
}

function hasVideoFiles(
  media: Extract<Media, { type: "scroll" | "concept" }>,
): media is Extract<Media, { type: "scroll" | "concept" }> & { mp4: string } {
  return (
    !!media.mp4 &&
    publicFileExists(media.mp4) &&
    (!media.webm || publicFileExists(media.webm)) &&
    (!media.poster || publicFileExists(media.poster))
  );
}

export function resolveProjectMedia(media: Media, label: string): MediaDescriptor {
  if (media.type === "carousel") {
    const hasAllImages = media.images.every((image) =>
      publicFileExists(image.src),
    );

    if (hasAllImages) {
      return {
        kind: "imageCarousel",
        slides: media.images.map((image, i) => ({
          src: image.src,
          alt: image.alt || `${label} ${i + 1}`,
        })),
      };
    }

    return {
      kind: "carousel",
      labels: media.images.map((image, i) => image.alt || `${label} ${i + 1}`),
    };
  }

  if (media.type === "concept") {
    if (hasVideoFiles(media)) {
      return {
        kind: "video",
        webm: media.webm,
        mp4: media.mp4,
        poster: media.poster,
        alt: media.alt,
      };
    }
    return { kind: "concept", component: media.component, alt: media.alt };
  }

  if (media.type === "scroll" && hasVideoFiles(media)) {
    return {
      kind: "video",
      webm: media.webm,
      mp4: media.mp4,
      poster: media.poster,
      alt: media.alt,
    };
  }

  return { kind: "placeholder", label };
}
