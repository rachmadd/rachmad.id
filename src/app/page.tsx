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
  const sameAs = [
    site.linkedin ? `https://linkedin.com/in/${site.linkedin}` : null,
    site.github ? `https://github.com/${site.github}` : null,
    site.instagram ? `https://instagram.com/${site.instagram}` : null,
  ].filter((value): value is string => Boolean(value));

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: site.name,
      jobTitle: site.primaryTitle,
      url: siteUrl,
      image: `${siteUrl}/avatar.webp`,
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
      name: site.domain,
      url: siteUrl,
      inLanguage: "en",
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
