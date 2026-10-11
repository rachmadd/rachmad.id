import { getLocale, getTranslations } from "next-intl/server";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/layout/Footer";
import { getCvHref, site } from "@/content/site";
import type { Locale } from "@/content/schema";

const rowBase =
  "flex min-h-[56px] items-center justify-between gap-3 rounded-pill px-[22px]";

export async function Contact() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("Contact");
  const nav = await getTranslations("Nav");
  const common = await getTranslations("Common");

  const rows: { label: string; value: string | null; href: string | null }[] = [
    { label: t("email"), value: site.email, href: site.email ? `mailto:${site.email}` : null },
    {
      label: t("linkedin"),
      value: site.linkedin,
      href: site.linkedin ? `https://linkedin.com/in/${site.linkedin}` : null,
    },
    {
      label: t("github"),
      value: site.github,
      href: site.github ? `https://github.com/${site.github}` : null,
    },
    {
      label: t("instagram"),
      value: site.instagram,
      href: site.instagram ? `https://instagram.com/${site.instagram}` : null,
    },
  ];

  return (
    <section
      id="contact"
      className="px-[24px] pt-[96px] md:px-[40px] md:pt-[160px]"
    >
      <Reveal>
        <SectionTitle id="contact-heading">{nav("contact")}</SectionTitle>
      </Reveal>
      <Reveal className="mx-auto flex max-w-[620px] flex-col gap-8">
        <p className="m-0 text-left text-wrap-pretty">{t("line")}</p>
        <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2">
          {rows.map((row) =>
            row.href ? (
              <a
                key={row.label}
                href={row.href}
                className={`${rowBase} border border-[rgba(255,255,255,0.09)] bg-surface text-fg no-underline hover:border-[rgba(255,255,255,0.24)]`}
              >
                <span className="font-mono text-[12.5px] text-muted">
                  {row.label}
                </span>
                <span className="text-[15px] underline decoration-accent decoration-[1.5px] underline-offset-[5px]">
                  {row.value}
                </span>
              </a>
            ) : (
              <div
                key={row.label}
                aria-hidden
                className={`${rowBase} border border-[rgba(255,255,255,0.09)] opacity-50`}
              >
                <span className="font-mono text-[12.5px] text-muted">
                  {row.label}
                </span>
                <span className="text-[15px] text-muted">{t("tbd")}</span>
              </div>
            ),
          )}
        </div>
        <div className="flex">
          <Button href={getCvHref(locale)}>{common("downloadCv")}</Button>
        </div>
      </Reveal>
      <Footer />
    </section>
  );
}
