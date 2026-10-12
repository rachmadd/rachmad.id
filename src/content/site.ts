export const site = {
  domain: "rachmad.id",
  name: "Rachmad",
  primaryTitle: "Software Engineer",
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
    title: "Rachmad Syaefullah · Full Stack Software Engineer",
    description:
      "Full stack software engineer in Jakarta with 7+ years in fintech, banking and game infrastructure. Go, Node.js, React and Next.js.",
    ogTitle: "Rachmad Syaefullah · Full Stack Software Engineer",
    ogDescription:
      "Full stack software engineer in Jakarta. I build products end to end, from the API and database to the interface.",
  },
  email: "rachmadsyaefullah13@gmail.com" as string | null,
  linkedin: "rachmad-syaefullah" as string | null,
  instagram: "rachmad.sf" as string | null,
  github: "rach-mad" as string | null,
  leetcode: "rach_md" as string | null,
};

export function getCvHref(): string {
  return "/cv/Rachmad-CV-en.pdf";
}
