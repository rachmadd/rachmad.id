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
  slug: "company-profile-websites",
  tier: "other",
  order: 7,
  companyId: null,
  companyLabel: { en: "Freelance", id: "Freelance" },
  title: { en: "Company Profile Websites", id: "Company Profile Websites" },
  summary: {
    en: "Static company-profile websites built freelance.",
    id: "Situs web company profile statis yang dikerjakan secara freelance.",
  },
  role: { en: "Web Developer", id: "Web Developer" },
  year: "2020",
  skills: ["PHP"],
  stack: ["PHP"],
  media: {
    type: "carousel",
    images: [
      { src: "/media/projects/company-profile-websites/01.webp", alt: { en: "Company profile website homepage", id: "Beranda situs company profile" } },
      { src: "/media/projects/company-profile-websites/02.webp", alt: { en: "Company profile website about page", id: "Halaman tentang situs company profile" } },
      { src: "/media/projects/company-profile-websites/03.webp", alt: { en: "Company profile website contact page", id: "Halaman kontak situs company profile" } },
    ],
  },
  overview: {
    en: ["Company Profile Websites are static company-profile sites Rachmad developed freelance."],
    id: ["Company Profile Websites adalah situs company profile statis yang dikembangkan Rachmad secara freelance."],
  },
  features,
  placeholder: true,
};

export default project;
