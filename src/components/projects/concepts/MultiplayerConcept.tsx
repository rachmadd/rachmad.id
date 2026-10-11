"use client";

import { motion } from "motion/react";
import { useConceptPlayback } from "./useConceptPlayback";

const DUR = 5;
const f = (s: number) => s / DUR;

const BORDER_OFF = 0.1;
const BORDER_ON = 0.55;
const BG_OFF = 0.02;
const BG_ON = 0.09;

type Track = {
  animate: Record<string, number | number[]>;
  transition: { duration: number; times?: number[]; repeat: number; ease: "easeInOut" | "linear" };
};

function track(
  values: Record<string, number[]>,
  times: number[],
  staticValues: Record<string, number>,
  playing: boolean,
  ease: "easeInOut" | "linear" = "easeInOut",
): Track {
  if (!playing) {
    return { animate: staticValues, transition: { duration: 0, repeat: 0, ease } };
  }
  return { animate: values, transition: { duration: DUR, times, repeat: Infinity, ease } };
}

const LOGS = [
  { time: "00:01.204", src: "mm", msg: "ticket queued  p-2391" },
  { time: "00:01.880", src: "mm", msg: "match found  4/4 players" },
  { time: "00:02.116", src: "ds", msg: "session ds-8f2a created" },
  { time: "00:02.430", src: "ds", msg: "players joined  4/4" },
  { time: "00:03.002", src: "ds", msg: "tick 60hz  rtt 38ms" },
  { time: "00:03.611", src: "mm", msg: "ticket queued  p-2392" },
];

const STATIC = {
  client: { fillOpacity: BG_OFF, strokeOpacity: BORDER_OFF },
  mm: { fillOpacity: BG_OFF, strokeOpacity: BORDER_OFF },
  ses: { fillOpacity: BG_OFF, strokeOpacity: BORDER_OFF },
  queue: { opacity: 0 },
  found: { opacity: 1 },
  wait: { opacity: 1 },
  live: { opacity: 0 },
  dot: { cx: 447.5, cy: 98 },
  dotOpacity: { opacity: 1 },
  pulse: { opacity: 0.6 },
  scroll: { y: 0 },
};

export function MultiplayerConcept({ className }: { className?: string }) {
  const { ref, playing, reduced } = useConceptPlayback();
  const run = playing && !reduced;

  const client = track(
    { fillOpacity: [BG_ON, BG_ON, BG_OFF, BG_OFF, BG_ON, BG_ON], strokeOpacity: [BORDER_ON, BORDER_ON, BORDER_OFF, BORDER_OFF, BORDER_ON, BORDER_ON] },
    [0, f(0.3), f(0.8), f(4.6), f(5.0), 1],
    STATIC.client,
    run,
  );
  const mm = track(
    { fillOpacity: [BG_OFF, BG_OFF, BG_ON, BG_ON, BG_OFF, BG_OFF], strokeOpacity: [BORDER_OFF, BORDER_OFF, BORDER_ON, BORDER_ON, BORDER_OFF, BORDER_OFF] },
    [0, f(1.0), f(1.15), f(1.85), f(2.0), 1],
    STATIC.mm,
    run,
  );
  const ses = track(
    { fillOpacity: [BG_OFF, BG_OFF, BG_ON, BG_ON, BG_OFF, BG_OFF], strokeOpacity: [BORDER_OFF, BORDER_OFF, BORDER_ON, BORDER_ON, BORDER_OFF, BORDER_OFF] },
    [0, f(2.6), f(2.75), f(3.65), f(3.8), 1],
    STATIC.ses,
    run,
  );

  const matchTimes = [0, f(1.4), f(1.6), f(4.5), f(4.9), 1];
  const queue = track({ opacity: [1, 1, 0, 0, 1, 1] }, matchTimes, STATIC.queue, run);
  const found = track({ opacity: [0, 0, 1, 1, 0, 0] }, matchTimes, STATIC.found, run);

  const sessionTimes = [0, f(2.6), f(2.8), f(4.5), f(4.9), 1];
  const wait = track({ opacity: [1, 1, 0, 0, 1, 1] }, sessionTimes, STATIC.wait, run);
  const live = track({ opacity: [0, 0, 1, 1, 0, 0] }, sessionTimes, STATIC.live, run);

  const dotPosition = track(
    { cx: [170, 170, 250, 390, 470, 470], cy: [98, 98, 98, 98, 98, 98] },
    [0, f(0.2), f(1.0), f(1.8), f(2.6), 1],
    STATIC.dot,
    run,
  );
  const dotOpacity = track(
    { opacity: [0, 0, 1, 1, 0, 0, 1, 1, 0, 0] },
    [0, f(0.1), f(0.2), f(0.95), f(1.05), f(1.75), f(1.85), f(2.55), f(2.65), 1],
    STATIC.dotOpacity,
    run,
  );

  const pulse = run
    ? { animate: { opacity: [0.45, 1, 0.45] }, transition: { duration: 1, repeat: Infinity, ease: "easeInOut" as const } }
    : { animate: STATIC.pulse, transition: { duration: 0, repeat: 0, ease: "easeInOut" as const } };

  const scroll = track({ y: [0, -132] }, [0, 1], STATIC.scroll, run, "linear");

  return (
    <svg
      ref={ref}
      viewBox="0 0 640 400"
      aria-hidden="true"
      className={className}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
    >
      <rect width="640" height="400" fill="var(--color-surface)" />

      <line x1="170" y1="98" x2="250" y2="98" stroke="var(--color-muted)" strokeOpacity="0.55" />
      <line x1="390" y1="98" x2="470" y2="98" stroke="var(--color-muted)" strokeOpacity="0.55" />
      <line x1="320" y1="126" x2="320" y2="200" stroke="var(--color-muted)" strokeOpacity="0.5" strokeDasharray="3 3" />
      <line x1="540" y1="126" x2="540" y2="200" stroke="var(--color-muted)" strokeOpacity="0.5" strokeDasharray="3 3" />
      <text x="330" y="158" fontSize="11" fill="var(--color-muted)" fontFamily="var(--font-mono)">
        log stream
      </text>

      <motion.rect x="30" y="70" width="140" height="56" rx="16" fill="var(--color-fg)" stroke="var(--color-fg)" {...client} />
      <text x="46" y="88" fontSize="14" fill="var(--color-fg)" fontFamily="var(--font-mono)">
        game client
      </text>
      <text x="46" y="105" fontSize="11.5" fill="var(--color-muted)" fontFamily="var(--font-mono)">
        player p-2391
      </text>

      <motion.rect x="250" y="70" width="140" height="56" rx="16" fill="var(--color-fg)" stroke="var(--color-fg)" {...mm} />
      <text x="266" y="88" fontSize="14" fill="var(--color-fg)" fontFamily="var(--font-mono)">
        matchmaking
      </text>
      <motion.text x="266" y="105" fontSize="11.5" fill="var(--color-muted)" fontFamily="var(--font-mono)" {...queue}>
        queue · 3/4
      </motion.text>
      <motion.text x="266" y="105" fontSize="11.5" fill="var(--color-fg)" fontFamily="var(--font-mono)" {...found}>
        match · 4/4
      </motion.text>

      <motion.rect x="470" y="70" width="140" height="56" rx="16" fill="var(--color-fg)" stroke="var(--color-fg)" {...ses} />
      <text x="486" y="88" fontSize="14" fill="var(--color-fg)" fontFamily="var(--font-mono)">
        game session
      </text>
      <motion.text x="486" y="105" fontSize="11.5" fill="var(--color-muted)" fontFamily="var(--font-mono)" {...wait}>
        waiting
      </motion.text>
      <motion.text x="486" y="105" fontSize="11.5" fill="var(--color-fg)" fontFamily="var(--font-mono)" {...live}>
        ds-8f2a · live
      </motion.text>

      <rect x="30" y="200" width="580" height="170" rx="16" fill="var(--color-bg)" stroke="var(--color-border)" />
      <text x="48" y="222" fontSize="11" fill="var(--color-muted)" fontFamily="var(--font-mono)">
        web console · live logs
      </text>
      <motion.circle cx="604" cy="221" r="3" fill="var(--color-accent)" {...pulse} />
      <line x1="30" y1="238" x2="610" y2="238" stroke="var(--color-border)" />

      <clipPath id="console-clip">
        <rect x="48" y="248" width="544" height="112" />
      </clipPath>
      <g clipPath="url(#console-clip)">
        <motion.g {...scroll}>
          {[...LOGS, ...LOGS].map((log, i) => (
            <g key={i} transform={`translate(48, ${270 + i * 22})`}>
              <text fontSize="13" fill="var(--color-muted)" fontFamily="var(--font-mono)">
                {log.time}
              </text>
              <text x="92" fontSize="13" fill="var(--color-muted)" fontFamily="var(--font-mono)">
                {log.src}
              </text>
              <text x="128" fontSize="13" fill="var(--color-fg)" fontFamily="var(--font-mono)">
                {log.msg}
              </text>
            </g>
          ))}
        </motion.g>
      </g>

      <motion.g {...dotOpacity}>
        <motion.circle r="6" fill="var(--color-accent)" {...dotPosition} />
      </motion.g>
    </svg>
  );
}
