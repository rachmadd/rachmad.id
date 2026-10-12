import type { ComponentType } from "react";
import { getLocale, getTranslations } from "next-intl/server";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import {
  GitHubIcon,
  InstagramIcon,
  LeetCodeIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/ui/icons";
import { getCvHref, site } from "@/content/site";
import type { Locale } from "@/content/schema";

const rowBase =
  "flex min-h-[56px] items-center justify-between gap-3 rounded-pill px-[22px]";

export async function Contact() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("Contact");
  const common = await getTranslations("Common");

  const rows: {
    label: string;
    value: string | null;
    href: string | null;
    Icon: ComponentType<{ className?: string }>;
    wide?: boolean;
  }[] = [
    {
      label: t("email"),
      value: site.email,
      href: site.email ? `mailto:${site.email}` : null,
      Icon: MailIcon,
      wide: true,
    },
    {
      label: t("linkedin"),
      value: site.linkedin,
      href: site.linkedin ? `https://linkedin.com/in/${site.linkedin}` : null,
      Icon: LinkedInIcon,
    },
    {
      label: t("github"),
      value: site.github,
      href: site.github ? `https://github.com/${site.github}` : null,
      Icon: GitHubIcon,
    },
    {
      label: t("instagram"),
      value: site.instagram,
      href: site.instagram ? `https://instagram.com/${site.instagram}` : null,
      Icon: InstagramIcon,
    },
    {
      label: t("leetcode"),
      value: site.leetcode,
      href: site.leetcode ? `https://leetcode.com/u/${site.leetcode}/` : null,
      Icon: LeetCodeIcon,
    },
  ];

  return (
    <section
      id="contact"
      className="px-[24px] pt-[96px] md:px-[40px] md:pt-[160px]"
    >
      <Reveal>
        <SectionTitle id="contact-heading">{t("title")}</SectionTitle>
      </Reveal>
      <Reveal className="mx-auto flex max-w-[620px] flex-col gap-8">
        <p className="m-0 text-center text-wrap-pretty">{t("line")}</p>
        <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2">
          {rows.map((row) =>
            row.href ? (
              <a
                key={row.label}
                href={row.href}
                className={`${rowBase} border border-[rgb(var(--overlay-rgb)_/_0.09)] bg-surface text-fg no-underline hover:border-[rgb(var(--overlay-rgb)_/_0.24)] ${row.wide ? "md:col-span-2" : ""}`}
              >
                <span className="flex shrink-0 items-center gap-[10px] font-mono text-[12.5px] text-muted">
                  <row.Icon className="h-4 w-4 text-fg" />
                  {row.label}
                </span>
                <span className="min-w-0 truncate text-[15px] underline decoration-accent decoration-[1.5px] underline-offset-[5px]">
                  {row.value}
                </span>
              </a>
            ) : (
              <div
                key={row.label}
                aria-hidden
                className={`${rowBase} border border-[rgb(var(--overlay-rgb)_/_0.09)] opacity-50 ${row.wide ? "md:col-span-2" : ""}`}
              >
                <span className="flex shrink-0 items-center gap-[10px] font-mono text-[12.5px] text-muted">
                  <row.Icon className="h-4 w-4 text-fg" />
                  {row.label}
                </span>
                <span className="text-[15px] text-muted">{t("tbd")}</span>
              </div>
            ),
          )}
        </div>
        <div className="flex justify-center">
          <Button href={getCvHref(locale)}>{common("downloadCv")}</Button>
        </div>
      </Reveal>
    </section>
  );
}
