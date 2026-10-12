"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

const INTERVAL_MS = 3400;

type ImageCarouselSlide = {
  src: string;
  alt: string;
};

type ImageCarouselProps = {
  slides: ImageCarouselSlide[];
  paused: boolean;
};

export function ImageCarousel({ slides, paused }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (shouldReduceMotion || paused || slides.length <= 1) return;

    timerRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, INTERVAL_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [shouldReduceMotion, paused, slides.length]);

  const activeIndex = shouldReduceMotion ? 0 : index;

  return (
    <div className="absolute inset-0">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[900ms] ease-in-out"
          style={{ opacity: i === activeIndex ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain"
          />
        </div>
      ))}
      {slides.length > 1 ? (
        <div className="absolute right-0 bottom-3 left-0 flex justify-center gap-[6px]">
          {slides.map((slide, i) => (
            <span
              key={slide.src}
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
