import type { ReactNode } from "react";

type MediaFrameProps = {
  children: ReactNode;
  className?: string;
};

export function MediaFrame({ children, className = "" }: MediaFrameProps) {
  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden rounded-media bg-media-fill ${className}`}
    >
      {children}
    </div>
  );
}
