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
  slug: "quickbill-enterprise",
  tier: "other",
  order: 1,
  companyId: "quickbill",
  title: { en: "Quickbill Enterprise Platform", id: "Quickbill Enterprise Platform" },
  summary: {
    en: "An enterprise-focused variant of the Quickbill platform.",
    id: "Varian Quickbill yang difokuskan untuk kebutuhan enterprise.",
  },
  role: { en: "Software Engineer, Full Stack", id: "Software Engineer, Full Stack" },
  year: "2025",
  skills: ["Next.js", "TypeScript"],
  stack: ["Next.js", "TypeScript"],
  media: {
    type: "image",
    src: "/media/projects/quickbill-enterprise/01.webp",
    alt: {
      en: "Quickbill Enterprise Platform screen",
      id: "Tampilan Quickbill Enterprise Platform",
    },
  },
  overview: {
    en: ["Quickbill Enterprise Platform is an enterprise-focused variant of the Quickbill platform. Further details are not yet available."],
    id: ["Quickbill Enterprise Platform adalah varian Quickbill yang difokuskan untuk kebutuhan enterprise. Detail lebih lanjut belum tersedia."],
  },
  features,
  placeholder: true,
};

export default project;
