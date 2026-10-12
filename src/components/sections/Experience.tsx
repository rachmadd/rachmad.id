import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TimelineCurve } from "@/components/timeline/TimelineCurve";
import { companies } from "@/content/companies";

export function Experience() {
  return (
    <section
      id="experience"
      className="px-[24px] pt-[96px] md:px-[40px] md:pt-[160px]"
    >
      <Reveal>
        <SectionTitle id="experience-heading">Experience</SectionTitle>
        <p className="mx-auto mb-10 max-w-[520px] text-center text-muted md:mb-14">
          Started as a web developer in 2019. Six companies later, I work across the whole stack.
        </p>
      </Reveal>
      <TimelineCurve companies={companies} />
    </section>
  );
}
