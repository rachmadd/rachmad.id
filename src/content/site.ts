import { existsSync } from "node:fs";
import path from "node:path";
import type { Locale, Localized } from "./schema";

export const site = {
  domain: "rachmad.id",
  name: "Rachmad",
  primaryTitle: {
    en: "Senior Software Engineer",
    id: "Senior Software Engineer",
  } satisfies Localized,
  roleTags: [
    "Frontend Engineer",
    "UI Engineer",
    "AI Engineer",
    "Full Stack Engineer",
  ],
  location: {
    en: "Jakarta, Indonesia",
    id: "Jakarta, Indonesia",
  } satisfies Localized,
  experienceYears: 7,
  // TODO: Rachmad to provide (docs/CONTENT.md section 2). Left null rather
  // than invented so the Contact section renders a clearly marked
  // placeholder instead of a fake or broken link.
  email: null as string | null,
  linkedin: null as string | null,
  instagram: null as string | null,
  github: null as string | null,
};

export function getCvHref(locale: Locale): string {
  const requested = `/cv/Rachmad-CV-${locale}.pdf`;

  if (locale === "en") {
    return requested;
  }

  const absolute = path.join(process.cwd(), "public", requested);
  return existsSync(absolute) ? requested : "/cv/Rachmad-CV-en.pdf";
}
