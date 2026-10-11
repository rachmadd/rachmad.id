import type { ReactNode } from "react";

type PillProps = {
  children: ReactNode;
  className?: string;
};

export function Pill({ children, className = "" }: PillProps) {
  return (
    <span
      className={`inline-flex h-[34px] items-center justify-center gap-2 rounded-pill border border-border bg-surface px-[15px] text-[13.5px] text-fg ${className}`}
    >
      {children}
    </span>
  );
}
