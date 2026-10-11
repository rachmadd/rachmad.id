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
  slug: "accelbyte-dev-toolkit",
  tier: "featured",
  order: 4,
  companyId: "accelbyte",
  title: { en: "Accelbyte Development Toolkit", id: "Accelbyte Development Toolkit" },
  summary: {
    en: "A desktop application for developers, built during Rachmad's time at Accelbyte.",
    id: "Aplikasi desktop untuk developer, dibangun selama Rachmad bekerja di Accelbyte.",
  },
  role: { en: "Software Engineer II, Frontend", id: "Software Engineer II, Frontend" },
  year: "2023",
  skills: ["React", "TypeScript", "Electron"],
  stack: ["React", "TypeScript", "Electron"],
  media: {
    type: "carousel",
    images: [
      { src: "/media/projects/accelbyte-dev-toolkit/01.webp", alt: { en: "Accelbyte Development Toolkit main window", id: "Jendela utama Accelbyte Development Toolkit" } },
      { src: "/media/projects/accelbyte-dev-toolkit/02.webp", alt: { en: "Accelbyte Development Toolkit settings panel", id: "Panel pengaturan Accelbyte Development Toolkit" } },
      { src: "/media/projects/accelbyte-dev-toolkit/03.webp", alt: { en: "Accelbyte Development Toolkit logs view", id: "Tampilan log Accelbyte Development Toolkit" } },
    ],
  },
  overview: {
    en: ["Accelbyte Development Toolkit is a desktop application built for developers at Accelbyte."],
    id: ["Accelbyte Development Toolkit adalah aplikasi desktop yang dibangun untuk developer di Accelbyte."],
  },
  features,
  placeholder: true,
};

export default project;
