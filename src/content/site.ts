import { existsSync } from "node:fs";
import path from "node:path";
import type { Locale, Localized } from "./schema";

// TODO: Indonesian translation pending for description/descriptionOptionB/
// statusChip — id mirrors en until translated.
export const site = {
  domain: "rachmad.id",
  name: "Rachmad",
  primaryTitle: {
    en: "Software Engineer",
    id: "Software Engineer",
  } satisfies Localized,
  roleTags: [
    "Mobile",
    "Web Frontend",
    "UI Engineer",
    "Full Stack",
  ],
  location: {
    en: "Jakarta, Indonesia",
    id: "Jakarta, Indonesia",
  } satisfies Localized,
  experienceYears: 7,
  // Deck section 2, Option A — the active hero description.
  description: {
    en: "Hi, I'm Rachmad. I build products end to end, from the API and database to the screen someone taps on. For 7+ years working across banking systems, fintech platforms and developer tools at a game backend company. Most recently I helped take Quickbill from an empty repo to 3,000+ active users and trillions of rupiah moved every month.",
    id: "Hi, I'm Rachmad. I build products end to end, from the API and database to the screen someone taps on. For 7+ years working across banking systems, fintech platforms and developer tools at a game backend company. Most recently I helped take Quickbill from an empty repo to 3,000+ active users and trillions of rupiah moved every month.",
  } satisfies Localized,
  // Deck section 2, Option B — unused alternate, kept for reference only.
  descriptionOptionB: {
    en: "Software engineer from Jakarta. Seven years in, I still enjoy the same thing: taking a messy product problem and turning it into an interface that feels obvious.",
    id: "Software engineer from Jakarta. Seven years in, I still enjoy the same thing: taking a messy product problem and turning it into an interface that feels obvious.",
  } satisfies Localized,
  showStatusChip: false,
  statusChip: {
    en: "Open to full-time and contract roles",
    id: "Open to full-time and contract roles",
  } satisfies Localized,
  // Deck section 0.
  seo: {
    title: {
      en: "Rachmad · Software Engineer",
      id: "Rachmad · Software Engineer",
    } satisfies Localized,
    description: {
      en: "Software engineer in Jakarta. Seven years building web apps for fintech and banking, plus a stretch building tools for game studios. Mostly frontend, often full stack.",
      id: "Software engineer in Jakarta. Seven years building web apps for fintech and banking, plus a stretch building tools for game studios. Mostly frontend, often full stack.",
    } satisfies Localized,
    ogTitle: {
      en: "Rachmad · Software Engineer",
      id: "Rachmad · Software Engineer",
    } satisfies Localized,
    ogDescription: {
      en: "I build the parts of software people actually touch, and enough of the backend to ship them end to end.",
      id: "I build the parts of software people actually touch, and enough of the backend to ship them end to end.",
    } satisfies Localized,
  },
  email: "rachmadsyaefullah13@gmail.com" as string | null,
  linkedin: "rachmad-syaefullah" as string | null,
  instagram: "rachmad.sf" as string | null,
  github: "rach-mad" as string | null,
  leetcode: "rach_md" as string | null,
};

export function getCvHref(locale: Locale): string {
  const requested = `/cv/Rachmad-CV-${locale}.pdf`;

  if (locale === "en") {
    return requested;
  }

  const absolute = path.join(process.cwd(), "public", requested);
  return existsSync(absolute) ? requested : "/cv/Rachmad-CV-en.pdf";
}
