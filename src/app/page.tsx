import { Intro } from "@/components/sections/Intro";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/content/site";
import { skillGroups } from "@/content/skills";
import { getSiteUrl } from "@/lib/site-url";

export default function Home() {
  const siteUrl = getSiteUrl();
  const personId = `${siteUrl}/#person`;
  const sameAs = [
    site.linkedin ? `https://linkedin.com/in/${site.linkedin}` : null,
    site.github ? `https://github.com/${site.github}` : null,
    site.devto ? `https://dev.to/${site.devto}` : null,
    site.medium ? `https://medium.com/@${site.medium}` : null,
    site.instagram ? `https://instagram.com/${site.instagram}` : null,
  ].filter((value): value is string => Boolean(value));

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": personId,
      name: site.fullName,
      jobTitle: site.primaryTitle,
      url: siteUrl,
      image: `${siteUrl}/avatar.webp`,
      description: site.seo.description,
      ...(sameAs.length > 0 ? { sameAs } : {}),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jakarta",
        addressCountry: "ID",
      },
      knowsAbout: skillGroups.flatMap((group) => group.items),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: site.domain,
      url: siteUrl,
      inLanguage: "en",
      publisher: { "@id": personId },
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Intro />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
