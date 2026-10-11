import { getLocale, getTranslations } from "next-intl/server";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TimelineCurve } from "@/components/timeline/TimelineCurve";
import { companies } from "@/content/companies";
import type { Locale } from "@/content/schema";

export async function Experience() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("Nav");

  return (
    <section
      id="experience"
      className="px-[24px] pt-[96px] md:px-[40px] md:pt-[160px]"
    >
      <Reveal>
        <SectionTitle id="experience-heading">{t("experience")}</SectionTitle>
      </Reveal>
      <TimelineCurve companies={companies} locale={locale} />
    </section>
  );
}
