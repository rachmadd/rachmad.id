import type { Project } from "@/content/schema";

type ProjectContentProps = {
  project: Project;
};

export function ProjectContent({ project }: ProjectContentProps) {
  const stackTags = project.stack
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

  return (
    <>
      <section className="px-[24px] md:px-[40px]">
        <h2 className="m-0 mb-12 text-center text-[24px] leading-[1.15] font-medium tracking-[-0.025em] md:mb-16 md:text-[30px]">
          About
        </h2>
        <div className="mx-auto flex max-w-content flex-col gap-4">
          {project.about.map((paragraph, i) => (
            <p key={i} className="m-0 text-left text-wrap-pretty">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {project.myPart ? (
        <section className="px-[24px] md:px-[40px]">
          <h2 className="m-0 mb-12 text-center text-[24px] leading-[1.15] font-medium tracking-[-0.025em] md:mb-16 md:text-[30px]">
            My part
          </h2>
          <ul className="mx-auto flex max-w-content list-disc flex-col gap-3 pl-5 marker:text-muted">
            {project.myPart.map((item, i) => (
              <li key={i} className="text-left text-wrap-pretty">
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {project.features ? (
        <section className="px-[24px] md:px-[40px]">
          <h2 className="m-0 mb-12 text-center text-[24px] leading-[1.15] font-medium tracking-[-0.025em] md:mb-16 md:text-[30px]">
            Features
          </h2>
          <div className="mx-auto flex max-w-content flex-wrap gap-2">
            {project.features.map((item) => (
              <span
                key={item}
                className="inline-flex h-9 items-center rounded-pill border border-[rgb(var(--overlay-rgb)_/_0.1)] px-[14px] text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      ) : null}

      <section className="px-[24px] md:px-[40px]">
        <h2 className="m-0 mb-12 text-center text-[24px] leading-[1.15] font-medium tracking-[-0.025em] md:mb-16 md:text-[30px]">
          Stack
        </h2>
        <div className="mx-auto flex max-w-content flex-wrap gap-2">
          {stackTags.map((tag) => (
            <span
              key={tag}
              className="inline-flex h-[34px] items-center rounded-pill border border-[rgb(var(--overlay-rgb)_/_0.1)] px-[15px] text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
