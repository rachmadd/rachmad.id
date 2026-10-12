import { getLocale, getTranslations } from "next-intl/server";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { skillGroups } from "@/content/skills";
import type { Locale } from "@/content/schema";

export async function Skills() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("Skills");

  return (
    <section
      id="skills"
      className="px-[24px] pt-[96px] md:px-[40px] md:pt-[160px]"
    >
      <Reveal>
        <SectionTitle id="skills-heading">{t("title")}</SectionTitle>
        <p className="mx-auto mb-10 max-w-[520px] text-center text-muted md:mb-14">
          {t("subtitle")}
        </p>
      </Reveal>
      <div className="mx-auto flex max-w-content flex-col border-b border-border">
        {skillGroups.map((group) => (
          <Reveal key={group.key}>
            <div className="grid grid-cols-1 gap-3 border-t border-border py-6 md:grid-cols-[200px_minmax(0,1fr)] md:gap-6">
              <p className="m-0 pt-[5px] font-mono text-[13px] text-muted">
                {group.label[locale]}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex h-8 items-center rounded-pill border border-[rgb(var(--overlay-rgb)_/_0.1)] px-[14px] text-sm text-fg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
