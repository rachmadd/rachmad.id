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
  slug: "voffice-website",
  tier: "other",
  order: 5,
  companyId: "voffice",
  title: { en: "vOffice Website", id: "vOffice Website" },
  summary: {
    en: "The vOffice Indonesia website, built with PHP and Laravel.",
    id: "Situs web vOffice Indonesia, dibangun dengan PHP dan Laravel.",
  },
  role: { en: "Web Developer", id: "Web Developer" },
  year: "2020",
  skills: ["PHP", "Laravel"],
  stack: ["PHP", "Laravel 7"],
  media: {
    type: "carousel",
    images: [
      { src: "/media/projects/voffice-website/01.webp", alt: { en: "vOffice website homepage", id: "Beranda situs vOffice" } },
      { src: "/media/projects/voffice-website/02.webp", alt: { en: "vOffice website listing page", id: "Halaman listing situs vOffice" } },
      { src: "/media/projects/voffice-website/03.webp", alt: { en: "vOffice website contact page", id: "Halaman kontak situs vOffice" } },
    ],
  },
  overview: {
    en: ["vOffice Website is the company website for vOffice Indonesia, built with PHP and Laravel 7 between 2019 and 2021."],
    id: ["vOffice Website adalah situs web perusahaan untuk vOffice Indonesia, dibangun dengan PHP dan Laravel 7 antara 2019 dan 2021."],
  },
  features,
  placeholder: true,
};

export default project;
