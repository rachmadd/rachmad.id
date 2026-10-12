// TODO: Indonesian translation pending — id mirrors en.
import type { Project } from "@/content/schema";

// Source: docs/rachmad-id-copy-en-v1.md section 5.10.
export const project: Project = {
  slug: "voffice-website",
  tier: "other",
  order: 6,
  companyId: "voffice",
  title: { en: "vOffice", id: "vOffice" },
  year: "2020",
  card: {
    description: {
      en: "The main website for vOffice Indonesia, built so marketing could update it without waiting on me.",
      id: "The main website for vOffice Indonesia, built so marketing could update it without waiting on me.",
    },
    tags: ["Laravel", "PHP", "Mapbox"],
  },
  media: {
    type: "carousel",
    images: [
      { src: "/media/projects/voffice-website/01.webp", alt: { en: "vOffice screenshot", id: "vOffice screenshot" } },
      { src: "/media/projects/voffice-website/02.webp", alt: { en: "vOffice screenshot", id: "vOffice screenshot" } },
      { src: "/media/projects/voffice-website/03.webp", alt: { en: "vOffice screenshot", id: "vOffice screenshot" } },
    ],
  },
  link: "voffice.co.id",
  tagline: {
    en: "Virtual offices across Indonesia, one search away.",
    id: "Virtual offices across Indonesia, one search away.",
  },
  product: {
    en: [
      "vOffice rents virtual offices and workspaces across Indonesia, and its website is where most customers start. It lists every service and every centre on a map, runs a blog, and hands visitors over to a chatbot when they have questions.",
      "I built and maintained it, along with a Laravel CMS that let the marketing team publish blogs, promos and landing pages on their own. Most visitors came from search, so a lot of the work was the invisible kind: AMP pages, clean markup, fast loads and tidy analytics.",
    ],
    id: [
      "vOffice rents virtual offices and workspaces across Indonesia, and its website is where most customers start. It lists every service and every centre on a map, runs a blog, and hands visitors over to a chatbot when they have questions.",
      "I built and maintained it, along with a Laravel CMS that let the marketing team publish blogs, promos and landing pages on their own. Most visitors came from search, so a lot of the work was the invisible kind: AMP pages, clean markup, fast loads and tidy analytics.",
    ],
  },
  inside: {
    en: [
      "Service pages",
      "Centre locator on Mapbox",
      "Blog & CMS",
      "Chatbot integration",
      "Contact forms",
      "AMP pages",
      "SEO & analytics",
    ],
    id: [
      "Service pages",
      "Centre locator on Mapbox",
      "Blog & CMS",
      "Chatbot integration",
      "Contact forms",
      "AMP pages",
      "SEO & analytics",
    ],
  },
  stack: "PHP, Laravel, jQuery, Bootstrap, Sass, Mapbox",
};

export default project;
