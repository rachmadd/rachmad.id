import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";
import type { Locale } from "@/content/schema";

export async function Intro() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("Intro");

  return (
    <section
      id="top"
      className="px-[24px] pt-[112px] md:px-[40px] md:pt-[168px]"
    >
      <div className="mx-auto flex max-w-content flex-col items-center">
        <Image
          src="/avatar.webp"
          alt=""
          width={104}
          height={104}
          priority
          className="h-[88px] w-[88px] rounded-full border border-[rgb(var(--overlay-rgb)_/_0.1)] bg-surface object-cover md:h-[104px] md:w-[104px]"
        />
        <h1 className="m-0 mt-8 text-center text-[40px] leading-[1.05] font-medium tracking-[-0.025em] md:text-[56px]">
          {site.name}
        </h1>
        <p className="m-0 mt-[14px] text-center text-[18px] leading-[1.3] md:text-[20px]">
          {site.primaryTitle[locale]}
        </p>
        <p className="m-0 mt-[10px] text-center font-mono text-[13px] text-muted">
          {t("meta", {
            location: site.location[locale],
            years: site.experienceYears,
          })}
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-2">
          {site.roleTags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>
        {site.showStatusChip ? (
          <Pill className="mt-6">{site.statusChip[locale]}</Pill>
        ) : null}
        <p className="mt-9 w-full max-w-[600px] text-left text-wrap-pretty md:mt-11">
          {site.description[locale]}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href="#projects">{t("ctaWork")}</Button>
          <Button href="#contact" variant="outline">
            {t("ctaContact")}
          </Button>
        </div>
      </div>
    </section>
  );
}
