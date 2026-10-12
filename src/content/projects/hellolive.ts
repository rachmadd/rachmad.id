// TODO: Indonesian translation pending — id mirrors en.
import type { Project } from "@/content/schema";

// Source: docs/rachmad-id-copy-en-v1.md section 5.12. The deck's own
// suggestion #8 (merge with Shop&Bike into one "Smaller sites" card) was
// not applied — the user's instructions keep both as separate cards.
export const project: Project = {
  slug: "hellolive",
  tier: "other",
  order: 9,
  companyId: "voffice",
  companyLabel: { en: "vOffice", id: "vOffice" },
  title: { en: "Hellolive", id: "Hellolive" },
  year: "2020",
  card: {
    description: {
      en: "A podcast studio and event space in Jakarta. The site had one job: get people to book.",
      id: "A podcast studio and event space in Jakarta. The site had one job: get people to book.",
    },
    tags: ["PHP", "Bootstrap"],
  },
  media: {
    type: "scroll",
    mp4: "/media/projects/hellolive/scroll.mp4",
    alt: { en: "Hellolive walkthrough", id: "Hellolive walkthrough" },
  },
  link: "hellolive.id",
  tagline: {
    en: "Show the studio, then get out of the way.",
    id: "Show the studio, then get out of the way.",
  },
  product: {
    en: [
      "Hellolive is vOffice's podcast studio and event space in South Jakarta. The website shows the rooms, the gear and the packages, then sends visitors straight to WhatsApp to lock in a slot. It's a small site, but the people booking are creators deciding how their show will look, so it had to look the part.",
    ],
    id: [
      "Hellolive is vOffice's podcast studio and event space in South Jakarta. The website shows the rooms, the gear and the packages, then sends visitors straight to WhatsApp to lock in a slot. It's a small site, but the people booking are creators deciding how their show will look, so it had to look the part.",
    ],
  },
  inside: {
    en: ["Studio & facilities", "Packages", "Locations", "Booking via WhatsApp"],
    id: ["Studio & facilities", "Packages", "Locations", "Booking via WhatsApp"],
  },
  stack: "PHP, jQuery, Bootstrap, Sass",
};

export default project;
