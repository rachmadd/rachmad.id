import type { ReactNode } from "react";

type SectionTitleProps = {
  id: string;
  children: ReactNode;
};

export function SectionTitle({ id, children }: SectionTitleProps) {
  return (
    <div className="mb-10 flex flex-col items-center gap-[14px] md:mb-14">
      <h2
        id={id}
        className="m-0 text-center text-[24px] leading-[1.15] font-medium tracking-[-0.025em] md:text-[30px]"
      >
        {children}
      </h2>
    </div>
  );
}
