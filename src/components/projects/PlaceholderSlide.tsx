import type { CSSProperties } from "react";

type PlaceholderSlideProps = {
  label: string;
  className?: string;
  style?: CSSProperties;
};

export function PlaceholderSlide({
  label,
  className = "",
  style,
}: PlaceholderSlideProps) {
  return (
    <div
      style={style}
      className={`absolute inset-0 flex items-center justify-center bg-media-fill bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.045)_0px,rgba(255,255,255,0.045)_1px,transparent_1px,transparent_10px)] ${className}`}
    >
      <span className="rounded-pill border border-border bg-bg px-3 py-[6px] font-mono text-xs text-muted">
        {label}
      </span>
    </div>
  );
}
