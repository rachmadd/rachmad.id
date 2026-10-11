"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

type VideoLoopProps = {
  webm: string;
  mp4: string;
  poster: string;
  alt: string;
};

export function VideoLoop({ webm, mp4, poster, alt }: VideoLoopProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || shouldReduceMotion) return;

    if (inView) {
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [inView, shouldReduceMotion]);

  if (shouldReduceMotion) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={poster} alt={alt} className="absolute inset-0 h-full w-full object-cover" />;
  }

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-label={alt}
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source src={webm} type="video/webm" />
      <source src={mp4} type="video/mp4" />
    </video>
  );
}
