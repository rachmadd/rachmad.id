import type { Project } from "@/content/schema";

// Source: docs/rachmad-id-copy-en-v2.md section 5.14. Year corrected from
// 2020 to 2022 to match the deck's Card/Role lines ("Freelance, 2022" /
// "Freelance Web Developer · 2022").
export const project: Project = {
  slug: "shop-and-bike",
  tier: "other",
  order: 10,
  companyId: null,
  companyLabel: "Freelance",
  roleTitle: "Freelance Web Developer",
  title: "Shop&Bike",
  year: "2022",
  card: {
    description: "Company site with a small online shop for Astra Otoparts' motorcycle workshop chain. Freelance, 2022.",
    tags: ["PHP", "Bootstrap"],
  },
  media: {
    type: "image",
    src: "/media/projects/shop-and-bike/01.webp",
    alt: "Shop&Bike screenshot",
  },
  link: "shopandbike.co.id",
  about: [
    "Shop&Bike is Astra Otoparts' network of motorcycle service shops. Besides company information, promos, articles and an outlet finder, the site has a small shop where customers create an account and order the products listed.",
  ],
  myPart: ["Built the website as a freelance project in 2022, including customer accounts and online ordering"],
  features: ["Company profile", "Product catalog", "Customer accounts", "Online ordering", "Promos", "Articles", "Outlet finder"],
  stack: "PHP, jQuery, Bootstrap",
};

export default project;
