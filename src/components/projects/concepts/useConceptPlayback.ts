"use client";

import { useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";

export function useConceptPlayback() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const reducedMotion = useReducedMotion();
  const playing = inView && !reducedMotion;

  return { ref, playing, reduced: !!reducedMotion };
}
