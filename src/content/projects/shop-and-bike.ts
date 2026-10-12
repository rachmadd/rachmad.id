// TODO: Indonesian translation pending — id mirrors en.
import type { Project } from "@/content/schema";

// Source: docs/rachmad-id-copy-en-v1.md section 5.13. Open question #6 in
// the deck asks Rachmad which features were his and the live site may have
// been rebuilt since — kept as the deck wrote it per the "(to confirm)" rule.
export const project: Project = {
  slug: "shop-and-bike",
  tier: "other",
  order: 9,
  companyId: null,
  companyLabel: { en: "Freelance", id: "Freelance" },
  title: { en: "Shop&Bike", id: "Shop&Bike" },
  year: "2020",
  card: {
    description: {
      en: "A freelance build for Astra Otoparts' motorcycle workshop chain: products, promos and the nearest outlet.",
      id: "A freelance build for Astra Otoparts' motorcycle workshop chain: products, promos and the nearest outlet.",
    },
    tags: ["PHP", "Bootstrap"],
  },
  media: {
    type: "image",
    src: "/media/projects/shop-and-bike/01.webp",
    alt: { en: "Shop&Bike screenshot", id: "Shop&Bike screenshot" },
  },
  link: "shopandbike.co.id",
  tagline: {
    en: "Find the part, find the workshop.",
    id: "Find the part, find the workshop.",
  },
  product: {
    en: [
      "Shop&Bike is Astra Otoparts' network of motorcycle service shops. I built the website as a freelance project: a catalog of tires, batteries, oil and shock absorbers, running promos, maintenance articles, and an outlet finder so riders can locate the nearest workshop.",
    ],
    id: [
      "Shop&Bike is Astra Otoparts' network of motorcycle service shops. I built the website as a freelance project: a catalog of tires, batteries, oil and shock absorbers, running promos, maintenance articles, and an outlet finder so riders can locate the nearest workshop.",
    ],
  },
  // TODO: confirm — deck marks this list "(to confirm)"; Rachmad to confirm which features were his and roughly when.
  inside: {
    en: ["Product catalog", "Product comparison", "Promos", "Articles", "Outlet finder", "Customer testimonials"],
    id: ["Product catalog", "Product comparison", "Promos", "Articles", "Outlet finder", "Customer testimonials"],
  },
  stack: "PHP, jQuery, Bootstrap",
};

export default project;
