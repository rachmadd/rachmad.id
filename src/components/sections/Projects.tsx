import { getLocale, getTranslations } from "next-intl/server";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getProjectsByTier } from "@/content/projects";
import type { Locale } from "@/content/schema";

export async function Projects() {
  const locale = (await getLocale()) as Locale;
  const tiersT = await getTranslations("Projects");

  const tiers = [
    { key: "featured" as const, label: tiersT("featured") },
    { key: "other" as const, label: tiersT("more") },
  ];

  return (
    <section
      id="projects"
      className="px-[24px] pt-[96px] md:px-[40px] md:pt-[160px]"
    >
      <Reveal>
        <SectionTitle id="projects-heading">{tiersT("title")}</SectionTitle>
        <p className="mx-auto mb-10 max-w-[520px] text-center text-muted md:mb-14">
          {tiersT("subtitle")}
        </p>
      </Reveal>
      <div className="mx-auto flex max-w-[1040px] flex-col gap-[72px] md:gap-[72px]">
        {tiers.map((tier) => {
          const tierProjects = getProjectsByTier(tier.key);
          return (
            <div key={tier.key} className="flex flex-col gap-5">
              <p className="m-0 font-mono text-[12.5px] tracking-[0.04em] text-muted">
                {tier.label}
              </p>
              <div
                className={
                  tier.key === "featured"
                    ? "grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6"
                    : "grid grid-cols-1 gap-5 sm:grid-cols-2 min-[1000px]:grid-cols-3"
                }
              >
                {tierProjects.map((project) => (
                  <Reveal key={project.slug}>
                    <ProjectCard project={project} locale={locale} />
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
