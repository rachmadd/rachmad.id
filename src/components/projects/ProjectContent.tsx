import { getTranslations } from "next-intl/server";
import type { Locale, Project } from "@/content/schema";
import { MediaFrame } from "./MediaFrame";
import { PlaceholderSlide } from "./PlaceholderSlide";

type ProjectContentProps = {
  project: Project;
  locale: Locale;
  variant: "page" | "modal";
};

export async function ProjectContent({
  project,
  locale,
  variant,
}: ProjectContentProps) {
  const t = await getTranslations("Project");
  const features = project.features.map((feature, i) => ({
    ...feature,
    num: String(i + 1).padStart(2, "0"),
    id: `feature-${i + 1}`,
  }));

  if (variant === "modal") {
    const visible = features.slice(0, 4);
    const moreCount = features.length - visible.length;

    return (
      <>
        <div className="flex flex-col gap-[10px]">
          <p className="m-0 font-mono text-[12.5px] text-muted">{t("overview")}</p>
          {project.overview[locale].map((paragraph, i) => (
            <p key={i} className="m-0 text-wrap-pretty">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-[14px]">
          <p className="m-0 font-mono text-[12.5px] text-muted">
            {t("keyFeatures")}
          </p>
          <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2">
            {visible.map((feature) => (
              <div
                key={feature.id}
                className="flex gap-[14px] rounded-[20px] border border-border p-[18px_20px]"
              >
                <span className="pt-[3px] font-mono text-xs text-muted">
                  {feature.num}
                </span>
                <div className="flex flex-col gap-1">
                  <p className="m-0 text-[15px] font-medium">
                    {feature.title[locale]}
                  </p>
                  <p className="m-0 text-sm leading-[1.55] text-muted">
                    {feature.body[locale]}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {moreCount > 0 ? (
            <p className="m-0 text-sm text-muted">
              {t("moreFeatures", { count: moreCount })}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col gap-3">
          <p className="m-0 font-mono text-[12.5px] text-muted">
            {t("techStack")}
          </p>
          <div className="flex flex-wrap gap-[6px]">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className="inline-flex h-[30px] items-center rounded-pill border border-[rgba(255,255,255,0.1)] px-[13px] text-[13px]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </>
    );
  }

  const hasIndex = features.length > 4;
  const primary = features.slice(0, 3);
  const secondary = features.slice(3);

  return (
    <>
      <section className="px-[24px] md:px-[40px]">
        <h2 className="m-0 mb-12 text-center text-[24px] leading-[1.15] font-medium tracking-[-0.025em] md:mb-16 md:text-[30px]">
          {t("overview")}
        </h2>
        <div className="mx-auto flex max-w-content flex-col gap-4">
          {project.overview[locale].map((paragraph, i) => (
            <p key={i} className="m-0 text-left text-wrap-pretty">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="px-[24px] md:px-[40px]">
        <h2 className="m-0 mb-12 text-center text-[24px] leading-[1.15] font-medium tracking-[-0.025em] md:mb-16 md:text-[30px]">
          {t("keyFeatures")}
        </h2>
        {hasIndex ? (
          <div className="mx-auto mb-12 flex max-w-content flex-wrap gap-2 md:mb-16">
            {features.map((feature) => (
              <a
                key={feature.id}
                href={`#${feature.id}`}
                className="inline-flex min-h-9 items-center gap-2 rounded-pill border border-[rgba(255,255,255,0.1)] px-[14px] text-[13.5px] text-fg no-underline hover:border-[rgba(255,255,255,0.26)]"
              >
                <span className="font-mono text-[11.5px] text-muted">
                  {feature.num}
                </span>
                {feature.title[locale]}
              </a>
            ))}
          </div>
        ) : null}
        <div className="mx-auto flex max-w-[1040px] flex-col gap-16 md:gap-24">
          {primary.map((feature) => (
            <article key={feature.id} id={feature.id} className="flex flex-col gap-7">
              <MediaFrame className="border border-border">
                <PlaceholderSlide
                  label={`${project.title[locale]} · ${feature.title[locale]}`}
                />
              </MediaFrame>
              <div className="mx-auto grid w-full max-w-content grid-cols-1 gap-2 md:grid-cols-[64px_minmax(0,1fr)] md:gap-4">
                <span className="pt-1 font-mono text-[13px] text-muted">
                  {feature.num}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="m-0 text-[22px] leading-[1.3] font-medium">
                    {feature.title[locale]}
                  </h3>
                  <p className="m-0 text-wrap-pretty text-muted">
                    {feature.body[locale]}
                  </p>
                </div>
              </div>
            </article>
          ))}
          {secondary.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {secondary.map((feature) => (
                <article
                  key={feature.id}
                  id={feature.id}
                  className="flex flex-col rounded-card border border-border bg-surface p-[10px]"
                >
                  <MediaFrame>
                    <PlaceholderSlide
                      label={`${project.title[locale]} · ${feature.title[locale]}`}
                    />
                  </MediaFrame>
                  <div className="flex gap-[14px] p-[20px_12px_14px]">
                    <span className="pt-[3px] font-mono text-xs text-muted">
                      {feature.num}
                    </span>
                    <div className="flex flex-col gap-[6px]">
                      <h3 className="m-0 text-[17px] leading-[1.35] font-medium">
                        {feature.title[locale]}
                      </h3>
                      <p className="m-0 text-[15px] leading-[1.55] text-wrap-pretty text-muted">
                        {feature.body[locale]}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="px-[24px] md:px-[40px]">
        <h2 className="m-0 mb-12 text-center text-[24px] leading-[1.15] font-medium tracking-[-0.025em] md:mb-16 md:text-[30px]">
          {t("techStack")}
        </h2>
        <div className="mx-auto flex max-w-content flex-wrap gap-2">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="inline-flex h-[34px] items-center rounded-pill border border-[rgba(255,255,255,0.1)] px-[15px] text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
