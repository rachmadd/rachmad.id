import type { Project, Feature } from "@/content/schema";

const features: Feature[] = [
  {
    title: { en: "Feature 1", id: "Fitur 1" },
    body: {
      en: "Real details for this feature are coming. This block shows how the layout handles the content once it's ready.",
      id: "Detail asli untuk fitur ini akan menyusul. Blok ini menunjukkan tata letaknya begitu kontennya siap.",
    },
  },
  {
    title: { en: "Feature 2", id: "Fitur 2" },
    body: {
      en: "Real details for this feature are coming. This block shows how the layout handles the content once it's ready.",
      id: "Detail asli untuk fitur ini akan menyusul. Blok ini menunjukkan tata letaknya begitu kontennya siap.",
    },
  },
  {
    title: { en: "Feature 3", id: "Fitur 3" },
    body: {
      en: "Real details for this feature are coming. This block shows how the layout handles the content once it's ready.",
      id: "Detail asli untuk fitur ini akan menyusul. Blok ini menunjukkan tata letaknya begitu kontennya siap.",
    },
  },
];

export const project: Project = {
  slug: "1engage-platform",
  tier: "featured",
  order: 3,
  companyId: "1engage",
  title: {
    en: "1Engage Customer Engagement Platform",
    id: "1Engage Customer Engagement Platform",
  },
  summary: {
    en: "A customer engagement platform built as part of the 1Engage team.",
    id: "Platform customer engagement yang dibangun bersama tim 1Engage.",
  },
  role: { en: "Software Engineer, Full Stack", id: "Software Engineer, Full Stack" },
  year: "2024",
  skills: ["React", "Next.js", "TypeScript"],
  stack: ["React", "Next.js", "TypeScript", "Node.js"],
  media: {
    type: "carousel",
    images: [
      { src: "/media/projects/1engage-platform/01.webp", alt: { en: "1Engage platform dashboard", id: "Dasbor platform 1Engage" } },
      { src: "/media/projects/1engage-platform/02.webp", alt: { en: "1Engage platform campaign view", id: "Tampilan campaign platform 1Engage" } },
      { src: "/media/projects/1engage-platform/03.webp", alt: { en: "1Engage platform settings", id: "Pengaturan platform 1Engage" } },
    ],
  },
  overview: {
    en: ["1Engage Customer Engagement Platform is a customer engagement platform Rachmad worked on as a full stack engineer."],
    id: ["1Engage Customer Engagement Platform adalah platform customer engagement yang dikerjakan Rachmad sebagai full stack engineer."],
  },
  features,
  placeholder: true,
};

export default project;
