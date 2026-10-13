export const site = {
  domain: "rachmad.id",
  name: "Rachmad",
  fullName: "Rachmad Syaefullah",
  // Resolves the open decision logged in docs/DECISIONS.md (2026-10-12):
  // Rachmad opted into "Senior Frontend Engineer" as the headline title.
  primaryTitle: "Senior Frontend Engineer",
  roleTags: [
    "Mobile",
    "Web Frontend",
    "UI Engineer",
    "Full Stack",
  ],
  location: "Jakarta, Indonesia",
  experienceYears: 7,
  // Deck v2 section 2 — the active hero description.
  description:
    "Hi, I'm Rachmad, a full stack software engineer in Jakarta. I've spent 7+ years building banking systems, payment platforms and developer tools. I like work that ends up in real people's hands, and I care about both how it feels to use and how it holds up in production.",
  // Deck v1 section 2, Option B — unused alternate, kept for reference only.
  descriptionOptionB:
    "Software engineer from Jakarta. Seven years in, I still enjoy the same thing: taking a messy product problem and turning it into an interface that feels obvious.",
  showStatusChip: false,
  statusChip: "Open to full-time and contract roles",
  // Deck v2 section 0.
  seo: {
    title: "Rachmad Syaefullah · Senior Frontend Engineer, Jakarta",
    description:
      "Rachmad Syaefullah is a senior frontend engineer in Jakarta, specializing in React and Next.js, with 7+ years in fintech, banking and game infrastructure.",
    ogTitle: "Rachmad Syaefullah · Senior Frontend Engineer, Jakarta",
    ogDescription:
      "Senior frontend engineer in Jakarta specializing in React and Next.js. I build products end to end, from the API and database to the interface.",
  },
  email: "rachmadsyaefullah13@gmail.com" as string | null,
  linkedin: "rachmad-syaefullah" as string | null,
  instagram: "rachmad.sf" as string | null,
  github: "rachmadd" as string | null,
  leetcode: "rach_md" as string | null,
  devto: "rachmadd" as string | null,
  medium: "rachmadd" as string | null,
};

export function getCvHref(): string {
  return "/cv/Rachmad-CV-en.pdf";
}
