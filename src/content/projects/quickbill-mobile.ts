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
  slug: "quickbill-mobile",
  tier: "featured",
  order: 2,
  companyId: "quickbill",
  title: { en: "Quickbill Mobile App", id: "Quickbill Mobile App" },
  summary: {
    en: "The Flutter mobile app for Quickbill, built alongside the main platform.",
    id: "Aplikasi mobile Flutter untuk Quickbill, dibangun berdampingan dengan platform utamanya.",
  },
  role: { en: "Full Stack Engineer", id: "Full Stack Engineer" },
  year: "2025",
  skills: ["Flutter", "Dart"],
  stack: ["Flutter", "Dart"],
  media: {
    type: "carousel",
    images: [
      { src: "/media/projects/quickbill-mobile/01.webp", alt: { en: "Quickbill mobile app home screen", id: "Layar beranda aplikasi mobile Quickbill" } },
      { src: "/media/projects/quickbill-mobile/02.webp", alt: { en: "Quickbill mobile app invoice detail", id: "Detail invoice di aplikasi mobile Quickbill" } },
      { src: "/media/projects/quickbill-mobile/03.webp", alt: { en: "Quickbill mobile app menu", id: "Menu aplikasi mobile Quickbill" } },
    ],
  },
  overview: {
    en: ["Quickbill Mobile App is a Flutter app built for the Quickbill platform."],
    id: ["Quickbill Mobile App adalah aplikasi Flutter yang dibangun untuk platform Quickbill."],
  },
  features,
  placeholder: true,
};

export default project;
