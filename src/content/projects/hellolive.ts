import type { Project } from "@/content/schema";

// Source: docs/rachmad-id-copy-en-v2.md section 5.13.
export const project: Project = {
  slug: "hellolive",
  tier: "other",
  order: 9,
  companyId: "voffice",
  companyLabel: "vOffice",
  title: "Hellolive",
  year: "2020",
  card: {
    description: "Website for vOffice's podcast studio and event space in Jakarta.",
    tags: ["PHP", "Bootstrap"],
  },
  media: {
    type: "scroll",
    mp4: "/projects/hellolive/scroll-detail-desktop.mp4",
    poster: "/projects/hellolive/scroll-poster-desktop.webp",
    alt: "Hellolive walkthrough",
  },
  link: "hellolive.id",
  brandColor: "#163053",
  about: [
    "Hellolive rents podcast studios and event space in South Jakarta. The site shows the rooms, equipment and packages, and sends visitors to WhatsApp to book.",
  ],
  myPart: ["Built and maintained the website"],
  features: ["Studio & facilities", "Packages", "Locations", "Booking via WhatsApp"],
  stack: "PHP, jQuery, Bootstrap, Sass",
};

export default project;
