"use client";

import { motion } from "motion/react";
import { useConceptPlayback } from "./useConceptPlayback";

const DUR = 6;
const f = (s: number) => s / DUR;

const BORDER_OFF = 0.1;
const BORDER_ON = 0.55;
const BG_OFF = 0.02;
const BG_ON = 0.09;

type Track = {
  animate: Record<string, number | number[]>;
  transition: { duration: number; times?: number[]; repeat: number; ease: "easeInOut" };
};

function track(
  values: Record<string, number[]>,
  times: number[],
  staticValues: Record<string, number>,
  playing: boolean,
): Track {
  if (!playing) {
    return { animate: staticValues, transition: { duration: 0, repeat: 0, ease: "easeInOut" } };
  }
  return { animate: values, transition: { duration: DUR, times, repeat: Infinity, ease: "easeInOut" } };
}

const MODULES = [
  { x: 44, label: "teller" },
  { x: 156, label: "acct-open" },
  { x: 268, label: "deposit" },
  { x: 380, label: "intl-xfer" },
  { x: 492, label: "mgr-auth" },
];
const SERVICES = ["teller-svc", "acct-svc", "dep-svc", "xfer-svc", "auth-svc"];

const STATIC = {
  teller: { fillOpacity: BG_OFF, strokeOpacity: BORDER_OFF },
  tellerStatus: { ready: 1, pending: 0, ok: 0 },
  mgrAuth: { fillOpacity: BG_ON, strokeOpacity: BORDER_ON },
  mgrAuthStatus: { idle: 0, reviewing: 1, ok: 0 },
  authSvc: { fillOpacity: BG_ON, strokeOpacity: BORDER_ON },
  dot: { cx: 542, cy: 271 },
  dotOpacity: { opacity: 1 },
};

export function MicroFrontendConcept({ className }: { className?: string }) {
  const { ref, playing, reduced } = useConceptPlayback();
  const run = playing && !reduced;

  const teller = track(
    { fillOpacity: [BG_ON, BG_ON, BG_OFF, BG_OFF, BG_ON, BG_ON], strokeOpacity: [BORDER_ON, BORDER_ON, BORDER_OFF, BORDER_OFF, BORDER_ON, BORDER_ON] },
    [0, f(0.6), f(1.0), f(5.1), f(5.3), 1],
    STATIC.teller,
    run,
  );
  const tellerStatusTimes = [0, f(0.1), f(0.3), f(5.1), f(5.3), f(5.7), 1];
  const tellerReady = track({ opacity: [1, 1, 0, 0, 0, 0, 1] }, tellerStatusTimes, { opacity: STATIC.tellerStatus.ready }, run);
  const tellerPending = track({ opacity: [0, 0, 1, 1, 0, 0, 0] }, tellerStatusTimes, { opacity: STATIC.tellerStatus.pending }, run);
  const tellerOk = track({ opacity: [0, 0, 0, 0, 1, 1, 0] }, tellerStatusTimes, { opacity: STATIC.tellerStatus.ok }, run);

  const mgrAuth = track(
    { fillOpacity: [BG_OFF, BG_OFF, BG_ON, BG_ON, BG_OFF, BG_OFF], strokeOpacity: [BORDER_OFF, BORDER_OFF, BORDER_ON, BORDER_ON, BORDER_OFF, BORDER_OFF] },
    [0, f(2.45), f(2.6), f(3.85), f(4.0), 1],
    STATIC.mgrAuth,
    run,
  );
  const mgrTimes = [0, f(2.5), f(2.7), f(3.4), f(3.6), f(5.0), f(5.4), 1];
  const mgrIdle = track({ opacity: [1, 1, 0, 0, 0, 0, 1, 1] }, mgrTimes, { opacity: STATIC.mgrAuthStatus.idle }, run);
  const mgrReviewing = track({ opacity: [0, 0, 1, 1, 0, 0, 0, 0] }, mgrTimes, { opacity: STATIC.mgrAuthStatus.reviewing }, run);
  const mgrOk = track({ opacity: [0, 0, 0, 0, 1, 1, 0, 0] }, mgrTimes, { opacity: STATIC.mgrAuthStatus.ok }, run);

  const authSvc = track(
    { fillOpacity: [BG_OFF, BG_OFF, BG_ON, BG_ON, BG_OFF, BG_OFF], strokeOpacity: [BORDER_OFF, BORDER_OFF, BORDER_ON, BORDER_ON, BORDER_OFF, BORDER_OFF] },
    [0, f(3.0), f(3.15), f(3.45), f(3.6), 1],
    STATIC.authSvc,
    run,
  );

  const dotPosition = track(
    {
      cx: [94, 94, 94, 542, 542, 542, 542, 542, 542, 542, 94, 94, 94],
      cy: [136, 136, 110, 110, 136, 236, 306, 236, 136, 110, 110, 136, 136],
    },
    [0, f(0.5), f(1.0), f(2.2), f(2.5), f(2.8), f(3.1), f(3.5), f(3.8), f(4.0), f(5.0), f(5.2), 1],
    STATIC.dot,
    run,
  );
  const dotOpacity = track(
    { opacity: [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0] },
    [0, f(0.4), f(0.55), f(2.45), f(2.55), f(2.75), f(2.85), f(3.45), f(3.55), f(3.75), f(3.85), f(5.15), f(5.25), 1],
    STATIC.dotOpacity,
    run,
  );

  return (
    <svg
      ref={ref}
      viewBox="0 0 640 400"
      aria-hidden="true"
      className={className}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
    >
      <rect width="640" height="400" fill="var(--color-surface)" />

      <rect x="24" y="64" width="592" height="196" rx="20" fill="var(--color-media-fill)" stroke="var(--color-border)" />
      <text x="44" y="82" fontSize="11" fill="var(--color-muted)" fontFamily="var(--font-mono)">
        app shell · router
      </text>
      <line x1="94" y1="110" x2="542" y2="110" stroke="var(--color-muted)" strokeOpacity="0.55" />
      {MODULES.map((m) => (
        <line key={m.x} x1={m.x + 50} y1="110" x2={m.x + 50} y2="136" stroke="var(--color-muted)" strokeOpacity="0.55" />
      ))}
      {MODULES.map((m) => (
        <line key={`svc-${m.x}`} x1={m.x + 50} y1="236" x2={m.x + 50} y2="306" stroke="var(--color-muted)" strokeOpacity="0.4" />
      ))}

      {MODULES.map((m) => {
        if (m.label === "teller") {
          return (
            <motion.rect key={m.x} x={m.x} y="136" width="100" height="100" rx="14" fill="var(--color-fg)" stroke="var(--color-fg)" {...teller} />
          );
        }
        if (m.label === "mgr-auth") {
          return (
            <motion.rect key={m.x} x={m.x} y="136" width="100" height="100" rx="14" fill="var(--color-fg)" stroke="var(--color-fg)" {...mgrAuth} />
          );
        }
        return (
          <rect key={m.x} x={m.x} y="136" width="100" height="100" rx="14" fill="var(--color-fg)" fillOpacity={BG_OFF} stroke="var(--color-fg)" strokeOpacity={BORDER_OFF} />
        );
      })}
      {MODULES.map((m) => (
        <text key={`label-${m.x}`} x={m.x + 12} y="150" fontSize="14" fill="var(--color-fg)" fontFamily="var(--font-mono)">
          {m.label}
        </text>
      ))}

      <motion.text x="56" y="212" fontSize="10.5" fill="var(--color-muted)" fontFamily="var(--font-mono)" {...tellerReady}>
        ready
      </motion.text>
      <motion.text x="56" y="212" fontSize="10.5" fill="var(--color-muted)" fontFamily="var(--font-mono)" {...tellerPending}>
        txn · pending
      </motion.text>
      <motion.text x="56" y="212" fontSize="10.5" fill="var(--color-fg)" fontFamily="var(--font-mono)" {...tellerOk}>
        approved
      </motion.text>

      <motion.text x="504" y="212" fontSize="10.5" fill="var(--color-muted)" fontFamily="var(--font-mono)" {...mgrIdle}>
        idle
      </motion.text>
      <motion.text x="504" y="212" fontSize="10.5" fill="var(--color-muted)" fontFamily="var(--font-mono)" {...mgrReviewing}>
        reviewing
      </motion.text>
      <motion.text x="504" y="212" fontSize="10.5" fill="var(--color-fg)" fontFamily="var(--font-mono)" {...mgrOk}>
        approved
      </motion.text>

      {SERVICES.map((label, i) => {
        const x = MODULES[i].x;
        if (label === "auth-svc") {
          return (
            <motion.rect key={label} x={x} y="306" width="100" height="44" rx="22" fill="var(--color-fg)" stroke="var(--color-fg)" {...authSvc} />
          );
        }
        return (
          <rect key={label} x={x} y="306" width="100" height="44" rx="22" fill="none" stroke="var(--color-fg)" strokeOpacity={BORDER_OFF} />
        );
      })}
      {SERVICES.map((label, i) => (
        <text key={`svc-label-${label}`} x={MODULES[i].x + 50} y="332" fontSize="12.5" fill="var(--color-fg)" fontFamily="var(--font-mono)" textAnchor="middle">
          {label}
        </text>
      ))}

      <motion.g {...dotOpacity}>
        <motion.circle r="6" fill="var(--color-accent)" {...dotPosition} />
      </motion.g>
    </svg>
  );
}
