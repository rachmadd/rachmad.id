import { existsSync } from "node:fs";
import path from "node:path";
import type { Locale, Localized } from "./schema";

// TODO: Indonesian translation pending for description/descriptionOptionB/
// statusChip — id mirrors en until translated.
export const site = {
  domain: "rachmad.id",
  name: "Rachmad Syaefullah",
  primaryTitle: {
    en: "Senior Software Engineer",
    id: "Senior Software Engineer",
  } satisfies Localized,
  roleTags: [
    "Software Engineer",
    "Frontend Engineer",
    "UI Engineer",
    "Full Stack Engineer",
    "AI Engineer",
  ],
  location: {
    en: "Jakarta, Indonesia",
    id: "Jakarta, Indonesia",
  } satisfies Localized,
  experienceYears: 7,
  // Deck section 2, Option A — the active hero description.
  description: {
    en: "Hi, I'm Rachmad. I build web apps, mostly the frontend and sometimes everything behind it. For seven years that has meant banking systems, fintech platforms and a desktop app for game studios. Most recently I helped take Quickbill from an empty repo to 3,000+ active users.",
    id: "Hi, I'm Rachmad. I build web apps, mostly the frontend and sometimes everything behind it. For seven years that has meant banking systems, fintech platforms and a desktop app for game studios. Most recently I helped take Quickbill from an empty repo to 3,000+ active users.",
  } satisfies Localized,
  // Deck section 2, Option B — unused alternate, kept for reference only.
  descriptionOptionB: {
    en: "Software engineer from Jakarta. Seven years in, I still enjoy the same thing: taking a messy product problem and turning it into an interface that feels obvious.",
    id: "Software engineer from Jakarta. Seven years in, I still enjoy the same thing: taking a messy product problem and turning it into an interface that feels obvious.",
  } satisfies Localized,
  showStatusChip: true,
  statusChip: {
    en: "Open to full-time and contract roles",
    id: "Open to full-time and contract roles",
  } satisfies Localized,
  // Deck section 0.
  seo: {
    title: {
      en: "Rachmad Syaefullah · Software Engineer",
      id: "Rachmad Syaefullah · Software Engineer",
    } satisfies Localized,
    description: {
      en: "Software engineer in Jakarta. Seven years building web apps for fintech and banking, plus a stretch building tools for game studios. Mostly frontend, often full stack.",
      id: "Software engineer in Jakarta. Seven years building web apps for fintech and banking, plus a stretch building tools for game studios. Mostly frontend, often full stack.",
    } satisfies Localized,
    ogTitle: {
      en: "Rachmad Syaefullah · Software Engineer",
      id: "Rachmad Syaefullah · Software Engineer",
    } satisfies Localized,
    ogDescription: {
      en: "I build the parts of software people actually touch, and enough of the backend to ship them end to end.",
      id: "I build the parts of software people actually touch, and enough of the backend to ship them end to end.",
    } satisfies Localized,
  },
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
