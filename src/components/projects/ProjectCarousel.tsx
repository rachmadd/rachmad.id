"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { PlaceholderSlide } from "./PlaceholderSlide";

const INTERVAL_MS = 3400;

type ProjectCarouselProps = {
  labels: string[];
  paused: boolean;
};

export function ProjectCarousel({ labels, paused }: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (shouldReduceMotion || paused || labels.length <= 1) return;

    timerRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % labels.length);
    }, INTERVAL_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [shouldReduceMotion, paused, labels.length]);

  const activeIndex = shouldReduceMotion ? 0 : index;

  return (
    <div className="absolute inset-0">
      {labels.map((label, i) => (
        <PlaceholderSlide
          key={label}
          label={label}
          className="transition-opacity duration-[900ms] ease-in-out"
          style={{ opacity: i === activeIndex ? 1 : 0 }}
        />
      ))}
      {labels.length > 1 ? (
        <div className="absolute right-0 bottom-3 left-0 flex justify-center gap-[6px]">
          {labels.map((label, i) => (
            <span
              key={label}
              className="h-[6px] rounded-pill transition-[width,background-color] duration-[400ms] ease-in-out"
              style={{
                width: i === activeIndex ? 18 : 6,
                backgroundColor:
                  i === activeIndex ? "#ef233c" : "rgba(237,242,244,0.35)",
              }}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
