import type { Project } from "@/content/schema";

// Source: docs/rachmad-id-copy-en-v2.md section 5.11.
export const project: Project = {
  slug: "voffice-website",
  tier: "other",
  order: 7,
  companyId: "voffice",
  title: "vOffice",
  year: "2020",
  card: {
    description: "vOffice Indonesia's main website and the Laravel CMS behind it.",
    tags: ["Laravel", "PHP", "Mapbox"],
  },
  media: {
    type: "scroll",
    mp4: "/media/projects/voffice-website/scroll.mp4",
    alt: "vOffice walkthrough",
  },
  link: "voffice.co.id",
  about: [
    "vOffice rents virtual offices and workspaces across Indonesia. The site covers its services, an interactive map of every centre in Indonesia and abroad, a blog and chatbot support. Most of its traffic comes from search.",
  ],
  myPart: [
    "Built and maintained the website",
    "Built an interactive Mapbox map of every vOffice location in Indonesia and worldwide",
    "Built a custom Laravel CMS so the marketing team could publish blogs, promos, services and landing pages themselves",
    "Handled SEO, AMP pages, performance and analytics",
  ],
  features: [
    "Service pages",
    "Interactive location map (Indonesia & worldwide)",
    "Blog & CMS",
    "Chatbot integration",
    "Contact forms",
    "AMP pages",
    "SEO & analytics",
  ],
  stack: "PHP, Laravel, MySQL, jQuery, Bootstrap, Sass, Mapbox",
};

export default project;
