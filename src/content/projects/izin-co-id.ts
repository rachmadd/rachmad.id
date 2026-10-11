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
  slug: "izin-co-id",
  tier: "other",
  order: 6,
  // CONTENT.md marks this company attribution "(to confirm)" — see docs/DECISIONS.md.
  companyId: "voffice",
  title: { en: "izin.co.id", id: "izin.co.id" },
  summary: {
    en: "A website built with PHP and Laravel, assumed to belong to vOffice.",
    id: "Situs web yang dibangun dengan PHP dan Laravel, diasumsikan milik vOffice.",
  },
  role: { en: "Web Developer", id: "Web Developer" },
  year: "2020",
  skills: ["PHP", "Laravel"],
  stack: ["PHP", "Laravel 7"],
  media: {
    type: "carousel",
    images: [
      { src: "/media/projects/izin-co-id/01.webp", alt: { en: "izin.co.id homepage", id: "Beranda izin.co.id" } },
      { src: "/media/projects/izin-co-id/02.webp", alt: { en: "izin.co.id service page", id: "Halaman layanan izin.co.id" } },
      { src: "/media/projects/izin-co-id/03.webp", alt: { en: "izin.co.id contact page", id: "Halaman kontak izin.co.id" } },
    ],
  },
  overview: {
    en: ["izin.co.id is a website built with PHP and Laravel 7. Its company attribution to vOffice is not yet confirmed."],
    id: ["izin.co.id adalah situs web yang dibangun dengan PHP dan Laravel 7. Keterkaitannya dengan vOffice belum dikonfirmasi."],
  },
  features,
  placeholder: true,
};

export default project;
