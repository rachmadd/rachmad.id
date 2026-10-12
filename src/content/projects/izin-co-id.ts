// TODO: Indonesian translation pending — id mirrors en.
import type { Project } from "@/content/schema";

// Source: docs/rachmad-id-copy-en-v1.md section 5.11. Per the live chat
// instruction (not literally in the deck body, which still lists a Link
// field): no live link shown and a concept thumbnail, since the deck's own
// open question #7 says the site has been rebuilt since Rachmad's time.
// The footnote text below is authored (not deck copy) to explain that —
// flagged for review.
export const project: Project = {
  slug: "izin-co-id",
  tier: "other",
  order: 7,
  companyId: "voffice",
  title: { en: "IZIN.co.id", id: "IZIN.co.id" },
  year: "2020",
  card: {
    description: {
      en: "vOffice's legal and licensing service. A site that explains company setup in plain words and turns readers into leads.",
      id: "vOffice's legal and licensing service. A site that explains company setup in plain words and turns readers into leads.",
    },
    tags: ["Laravel", "PHP", "SEO"],
  },
  media: {
    type: "image",
    src: "/media/projects/izin-co-id/01.webp",
    alt: { en: "IZIN.co.id screenshot", id: "IZIN.co.id screenshot" },
  },
  tagline: {
    en: "Making business paperwork a little less scary.",
    id: "Making business paperwork a little less scary.",
  },
  product: {
    en: [
      "IZIN.co.id helps people set up a PT or CV, register a trademark and sort out business permits in Indonesia. That process confuses most first-time founders, so the site does a lot of explaining: service pages, guides and articles written for the questions people actually search.",
      "I built and maintained it during my time at vOffice, on the same CMS setup, with search ranking and page speed as the main priorities.",
    ],
    id: [
      "IZIN.co.id helps people set up a PT or CV, register a trademark and sort out business permits in Indonesia. That process confuses most first-time founders, so the site does a lot of explaining: service pages, guides and articles written for the questions people actually search.",
      "I built and maintained it during my time at vOffice, on the same CMS setup, with search ranking and page speed as the main priorities.",
    ],
  },
  inside: {
    en: ["Service pages", "Guides & blog", "Lead forms & WhatsApp consultation", "CMS", "SEO & AMP"],
    id: ["Service pages", "Guides & blog", "Lead forms & WhatsApp consultation", "CMS", "SEO & AMP"],
  },
  stack: "PHP, Laravel, jQuery, Bootstrap, Sass",
  footnote: {
    en: "The live site has changed since. This reflects the version Rachmad built and maintained.",
    id: "The live site has changed since. This reflects the version Rachmad built and maintained.",
  },
};

export default project;
