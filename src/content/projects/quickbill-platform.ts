import type { Project } from "@/content/schema";

const featurePlaceholder = (n: number) => ({
  title: { en: `Feature ${n}`, id: `Fitur ${n}` },
  body: {
    en: "Real details for this feature are coming. This block shows how the layout handles the content once it's ready.",
    id: "Detail asli untuk fitur ini akan menyusul. Blok ini menunjukkan tata letaknya begitu kontennya siap.",
  },
});

export const project: Project = {
  slug: "quickbill-platform",
  tier: "featured",
  order: 1,
  companyId: "quickbill",
  title: { en: "Quickbill Platform", id: "Quickbill Platform" },
  summary: {
    en: "An invoicing platform built from scratch, with a monorepo and an internal UI library behind it.",
    id: "Platform invoice yang dibangun dari awal, dengan monorepo dan UI library internal di baliknya.",
  },
  role: {
    en: "Founding Engineer, Full Stack",
    id: "Founding Engineer, Full Stack",
  },
  year: "2025",
  skills: ["Next.js", "TypeScript", "Tailwind CSS"],
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
  media: {
    type: "carousel",
    images: [
      { src: "/media/projects/quickbill-platform/01.webp", alt: { en: "Quickbill Platform dashboard", id: "Dasbor Quickbill Platform" } },
      { src: "/media/projects/quickbill-platform/02.webp", alt: { en: "Quickbill Platform invoice list", id: "Daftar invoice Quickbill Platform" } },
      { src: "/media/projects/quickbill-platform/03.webp", alt: { en: "Quickbill Platform backoffice", id: "Backoffice Quickbill Platform" } },
    ],
  },
  overview: {
    en: [
      "Quickbill Platform is an invoicing platform built with Next.js. Rachmad joined as a founding engineer and helped build it from scratch.",
      "The codebase is a monorepo with an internal UI library shared across the platform and its backoffice.",
    ],
    id: [
      "Quickbill Platform adalah platform invoice yang dibangun dengan Next.js. Rachmad bergabung sebagai founding engineer dan ikut membangunnya dari awal.",
      "Basis kodenya berupa monorepo dengan UI library internal yang dipakai bersama di platform dan backoffice-nya.",
    ],
  },
  features: Array.from({ length: 8 }, (_, i) => featurePlaceholder(i + 1)),
  outcome: {
    en: ["Outcome details are not yet available and will be added once Rachmad provides them."],
    id: ["Detail hasil belum tersedia dan akan ditambahkan setelah Rachmad memberikannya."],
  },
  placeholder: true,
};

export default project;
