import type { Project } from "@/content/schema";

// Source: docs/rachmad-id-copy-en-v2.md section 5.12.
export const project: Project = {
  slug: "izin-co-id",
  tier: "other",
  order: 8,
  companyId: "voffice",
  title: "IZIN.co.id",
  year: "2020",
  card: {
    description: "Website for vOffice's legal and licensing service, with self-service tools for business owners.",
    tags: ["Laravel", "PHP", "SEO"],
  },
  media: {
    type: "scroll",
    mp4: "/projects/izin-co-id/scroll-detail-desktop.mp4",
    poster: "/projects/izin-co-id/scroll-poster-desktop.webp",
    alt: "IZIN.co.id walkthrough",
  },
  about: [
    "IZIN.co.id helps businesses set up a PT or CV, register trademarks and get business permits in Indonesia. The site explains each service, brings in leads through forms and WhatsApp, and offers free tools that help business owners check and plan before they apply.",
  ],
  myPart: [
    "Built and maintained the site on the same Laravel CMS as vOffice",
    "Built the site's self-service tools: company name check, trademark name check, KBLI finder, online tax calculator, property calculator and document tracking",
    "Focused on search ranking and page speed",
  ],
  features: [
    "Company name check",
    "Trademark name check",
    "KBLI business code finder",
    "Tax calculator",
    "Property calculator",
    "Document tracking",
    "Service pages",
    "Guides & blog",
    "Lead forms & WhatsApp consultation",
    "CMS",
    "SEO & AMP",
  ],
  stack: "PHP, Laravel, jQuery, Bootstrap, Sass",
  footnote: "The live site has been rebuilt since I worked on it.",
};

export default project;
