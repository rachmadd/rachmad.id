import { getTranslations } from "next-intl/server";
import type { Locale, Project } from "@/content/schema";

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
  const stackTags = project.stack
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

  if (variant === "modal") {
    return (
      <>
        <div className="flex flex-col gap-[10px]">
          <p className="m-0 font-mono text-[12.5px] text-muted">{t("product")}</p>
          {project.product[locale].map((paragraph, i) => (
            <p key={i} className="m-0 text-wrap-pretty">
              {paragraph}
            </p>
          ))}
        </div>
        {project.myPart ? (
          <div className="flex flex-col gap-[10px]">
            <p className="m-0 font-mono text-[12.5px] text-muted">{t("myPart")}</p>
            <ul className="m-0 flex flex-col gap-[6px] pl-5">
              {project.myPart[locale].map((item, i) => (
                <li key={i} className="text-sm leading-[1.55] text-wrap-pretty">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {project.inside ? (
          <div className="flex flex-col gap-3">
            <p className="m-0 font-mono text-[12.5px] text-muted">{t("inside")}</p>
            <div className="flex flex-wrap gap-[6px]">
              {project.inside[locale].map((item) => (
                <span
                  key={item}
                  className="inline-flex h-[30px] items-center rounded-pill border border-[rgba(255,255,255,0.1)] px-[13px] text-[13px]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ) : null}
        <div className="flex flex-col gap-3">
          <p className="m-0 font-mono text-[12.5px] text-muted">{t("stack")}</p>
          <div className="flex flex-wrap gap-[6px]">
            {stackTags.map((tag) => (
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

  return (
    <>
      <section className="px-[24px] md:px-[40px]">
        <h2 className="m-0 mb-12 text-center text-[24px] leading-[1.15] font-medium tracking-[-0.025em] md:mb-16 md:text-[30px]">
          {t("product")}
        </h2>
        <div className="mx-auto flex max-w-content flex-col gap-4">
          {project.product[locale].map((paragraph, i) => (
            <p key={i} className="m-0 text-left text-wrap-pretty">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {project.myPart ? (
        <section className="px-[24px] md:px-[40px]">
          <h2 className="m-0 mb-12 text-center text-[24px] leading-[1.15] font-medium tracking-[-0.025em] md:mb-16 md:text-[30px]">
            {t("myPart")}
          </h2>
          <ul className="mx-auto flex max-w-content flex-col gap-3 pl-5">
            {project.myPart[locale].map((item, i) => (
              <li key={i} className="text-left text-wrap-pretty">
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {project.inside ? (
        <section className="px-[24px] md:px-[40px]">
          <h2 className="m-0 mb-12 text-center text-[24px] leading-[1.15] font-medium tracking-[-0.025em] md:mb-16 md:text-[30px]">
            {t("inside")}
          </h2>
          <div className="mx-auto flex max-w-content flex-wrap gap-2">
            {project.inside[locale].map((item) => (
              <span
                key={item}
                className="inline-flex h-9 items-center rounded-pill border border-[rgba(255,255,255,0.1)] px-[14px] text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      ) : null}

      <section className="px-[24px] md:px-[40px]">
        <h2 className="m-0 mb-12 text-center text-[24px] leading-[1.15] font-medium tracking-[-0.025em] md:mb-16 md:text-[30px]">
          {t("stack")}
        </h2>
        <div className="mx-auto flex max-w-content flex-wrap gap-2">
          {stackTags.map((tag) => (
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
