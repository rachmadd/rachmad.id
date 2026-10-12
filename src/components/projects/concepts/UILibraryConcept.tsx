"use client";

import { motion } from "motion/react";
import { useConceptPlayback } from "./useConceptPlayback";

const DUR = 6;
const f = (s: number) => s / DUR;

const BORDER_OFF = 0.1;
const BORDER_ON = 0.55;
const BORDER_SETTLE = 0.17;
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

const PILLS = [
  { y: 83, label: "Input" },
  { y: 127, label: "Button" },
  { y: 171, label: "Autocomplete" },
  { y: 215, label: "Select" },
  { y: 259, label: "Dialog" },
  { y: 303, label: "Toast" },
];

const STATIC = {
  inputPill: { fillOpacity: BG_OFF, strokeOpacity: BORDER_OFF },
  on: { opacity: 1 },
  off: { opacity: 0 },
  custBorder: { strokeOpacity: BORDER_SETTLE },
  itemBorder: { strokeOpacity: BORDER_SETTLE },
  btnBorder: { strokeOpacity: BORDER_SETTLE },
  dialogBorder: { strokeOpacity: 0.3 },
  ddHighlight: { fillOpacity: 0.08 },
  dot: { cx: 186, cy: 96 },
  dotOpacity: { opacity: 0 },
};

export function UILibraryConcept({ className }: { className?: string }) {
  const { ref, playing, reduced } = useConceptPlayback();
  const run = playing && !reduced;

  const pillTrack = (onStart: number, onFull: number, offStart: number, offFull: number) =>
    track(
      { fillOpacity: [BG_OFF, BG_OFF, BG_ON, BG_ON, BG_OFF, BG_OFF], strokeOpacity: [BORDER_OFF, BORDER_OFF, BORDER_ON, BORDER_ON, BORDER_OFF, BORDER_OFF] },
      [0, f(onStart), f(onFull), f(offStart), f(offFull), 1],
      STATIC.inputPill,
      run,
    );

  const inputPill = pillTrack(0.05, 0.2, 0.9, 0.95);
  const acPill = pillTrack(1.1, 1.25, 1.95, 2.0);
  const btPill = pillTrack(2.9, 3.05, 3.75, 3.8);
  const dlPill = pillTrack(3.9, 4.05, 4.75, 4.8);

  const custGhost = track({ opacity: [1, 1, 0, 0, 1, 1] }, [0, f(0.75), f(0.9), f(5.4), f(5.85), 1], STATIC.off, run);
  const custOn = track({ opacity: [0, 0, 1, 1, 0, 0] }, [0, f(0.75), f(0.9), f(5.4), f(5.85), 1], STATIC.on, run);
  const custBorder = track(
    { strokeOpacity: [BORDER_OFF, BORDER_OFF, BORDER_ON, BORDER_ON, BORDER_SETTLE, BORDER_SETTLE] },
    [0, f(0.7), f(0.8), f(1.05), f(1.2), 1],
    STATIC.custBorder,
    run,
  );
  const custText = track({ opacity: [0, 0, 1, 1] }, [0, f(1.05), f(1.25), 1], STATIC.on, run);

  const itemGhost = track({ opacity: [1, 1, 0, 0, 1, 1] }, [0, f(1.75), f(1.9), f(5.4), f(5.85), 1], STATIC.off, run);
  const itemOn = track({ opacity: [0, 0, 1, 1, 0, 0] }, [0, f(1.75), f(1.9), f(5.4), f(5.85), 1], STATIC.on, run);
  const itemBorder = track(
    { strokeOpacity: [BORDER_OFF, BORDER_OFF, BORDER_ON, BORDER_ON, BORDER_SETTLE, BORDER_SETTLE] },
    [0, f(1.7), f(1.8), f(2.9), f(3.05), 1],
    STATIC.itemBorder,
    run,
  );
  const itemQuery = track({ opacity: [0, 0, 1, 1, 0, 0] }, [0, f(1.95), f(2.1), f(2.7), f(2.85), 1], STATIC.off, run);
  const itemPicked = track({ opacity: [0, 0, 1, 1] }, [0, f(2.7), f(2.85), 1], STATIC.on, run);

  const ddOpacity = track({ opacity: [0, 0, 1, 1, 0, 0] }, [0, f(2.0), f(2.15), f(2.75), f(2.9), 1], STATIC.off, run);
  const ddHighlight = track({ fillOpacity: [0, 0, 0.08, 0.08] }, [0, f(2.3), f(2.45), 1], STATIC.ddHighlight, run);

  const btnGhost = track({ opacity: [1, 1, 0, 0, 1, 1] }, [0, f(3.55), f(3.7), f(5.4), f(5.85), 1], STATIC.off, run);
  const btnOn = track({ opacity: [0, 0, 1, 1, 0, 0] }, [0, f(3.55), f(3.7), f(5.4), f(5.85), 1], STATIC.on, run);
  const btnBorder = track(
    { strokeOpacity: [BORDER_OFF, BORDER_OFF, BORDER_ON, BORDER_ON, BORDER_SETTLE, BORDER_SETTLE] },
    [0, f(3.5), f(3.6), f(3.85), f(4.0), 1],
    STATIC.btnBorder,
    run,
  );

  const scrim = track({ opacity: [0, 0, 1, 1, 0, 0] }, [0, f(4.5), f(4.65), f(5.3), f(5.5), 1], STATIC.off, run);
  const dialogOn = track({ opacity: [0, 0, 1, 1, 0, 0] }, [0, f(4.5), f(4.65), f(5.3), f(5.5), 1], STATIC.on, run);
  const dialogBorder = track(
    { strokeOpacity: [BORDER_OFF, BORDER_OFF, 0.6, 0.6, 0.3, 0.3] },
    [0, f(4.45), f(4.6), f(4.9), f(5.05), 1],
    STATIC.dialogBorder,
    run,
  );

  const dotPosition = track(
    {
      cx: [186, 186, 220, 220, 260, 260, 186, 220, 220, 260, 260, 186, 220, 220, 260, 260, 186, 220, 220, 320, 320, 186],
      cy: [96, 96, 96, 96, 96, 96, 184, 184, 156, 156, 156, 140, 140, 318, 318, 318, 272, 272, 210, 210, 210, 96],
    },
    [0, f(0.1), f(0.3), f(0.55), f(0.75), f(0.9), f(1.1), f(1.3), f(1.55), f(1.75), f(1.95), f(2.9), f(3.1), f(3.35), f(3.55), f(3.75), f(3.9), f(4.1), f(4.35), f(4.55), f(4.75), 1],
    STATIC.dot,
    run,
  );
  const dotOpacity = track(
    { opacity: [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0] },
    [0, f(0.08), f(0.18), f(0.82), f(0.92), f(1.18), f(1.28), f(1.87), f(1.97), f(2.98), f(3.08), f(3.67), f(3.77), f(3.98), f(4.08), f(4.67), f(4.77), 1],
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

      <rect x="30" y="40" width="172" height="320" rx="18" fill="var(--color-media-fill)" stroke="var(--color-border)" />
      <text x="46" y="58" fontSize="11" fill="var(--color-muted)" fontFamily="var(--font-mono)">
        @quickbill/ui
      </text>

      {PILLS.map((p) => (
        <line key={`tick-${p.y}`} x1="186" y1={p.y} x2="220" y2={p.y} stroke="var(--color-muted)" strokeOpacity="0.5" />
      ))}
      <line x1="220" y1="96" x2="220" y2="318" stroke="var(--color-muted)" strokeOpacity="0.5" />
      <line x1="220" y1="96" x2="260" y2="96" stroke="var(--color-muted)" strokeOpacity="0.5" />
      <line x1="220" y1="156" x2="260" y2="156" stroke="var(--color-muted)" strokeOpacity="0.5" />
      <line x1="220" y1="210" x2="240" y2="210" stroke="var(--color-muted)" strokeOpacity="0.5" />
      <line x1="220" y1="318" x2="260" y2="318" stroke="var(--color-muted)" strokeOpacity="0.5" />

      <motion.rect x="46" y="83" width="140" height="26" rx="13" fill="var(--color-fg)" stroke="var(--color-fg)" {...inputPill} />
      <motion.rect x="46" y="171" width="140" height="26" rx="13" fill="var(--color-fg)" stroke="var(--color-fg)" {...acPill} />
      <motion.rect x="46" y="127" width="140" height="26" rx="13" fill="var(--color-fg)" stroke="var(--color-fg)" {...btPill} />
      <rect x="46" y="215" width="140" height="26" rx="13" fill="var(--color-fg)" fillOpacity={BG_OFF} stroke="var(--color-fg)" strokeOpacity={BORDER_OFF} />
      <motion.rect x="46" y="259" width="140" height="26" rx="13" fill="var(--color-fg)" stroke="var(--color-fg)" {...dlPill} />
      <rect x="46" y="303" width="140" height="26" rx="13" fill="var(--color-fg)" fillOpacity={BG_OFF} stroke="var(--color-fg)" strokeOpacity={BORDER_OFF} />
      {PILLS.map((p) => (
        <text key={`label-${p.y}`} x="58" y={p.y + 17} fontSize="12.5" fill="var(--color-fg)" fontFamily="var(--font-mono)">
          {p.label}
        </text>
      ))}

      <rect x="240" y="40" width="370" height="320" rx="18" fill="var(--color-media-fill)" stroke="var(--color-border)" />
      <text x="260" y="58" fontSize="11" fill="var(--color-muted)" fontFamily="var(--font-mono)">
        app / new invoice
      </text>

      <text x="260" y="75" fontSize="10.5" fill="var(--color-muted)" fontFamily="var(--font-mono)">
        customer
      </text>
      <motion.rect x="260" y="80" width="330" height="32" rx="16" fill="none" stroke="var(--color-muted)" strokeOpacity="0.35" strokeDasharray="4 4" {...custGhost} />
      <motion.g {...custOn}>
        <motion.rect x="260" y="80" width="330" height="32" rx="16" fill="var(--color-surface)" stroke="var(--color-fg)" {...custBorder} />
        <motion.text x="274" y="100" fontSize="12.5" fill="var(--color-fg)" fontFamily="var(--font-mono)" {...custText}>
          PT Sinar Jaya
        </motion.text>
      </motion.g>

      <text x="260" y="135" fontSize="10.5" fill="var(--color-muted)" fontFamily="var(--font-mono)">
        item
      </text>
      <motion.rect x="260" y="140" width="330" height="32" rx="16" fill="none" stroke="var(--color-muted)" strokeOpacity="0.35" strokeDasharray="4 4" {...itemGhost} />
      <motion.g {...itemOn}>
        <motion.rect x="260" y="140" width="330" height="32" rx="16" fill="var(--color-surface)" stroke="var(--color-fg)" {...itemBorder} />
        <motion.text x="274" y="160" fontSize="12.5" fill="var(--color-fg)" fontFamily="var(--font-mono)" {...itemQuery}>
          host
        </motion.text>
        <motion.text x="274" y="160" fontSize="12.5" fill="var(--color-fg)" fontFamily="var(--font-mono)" {...itemPicked}>
          Hosting plan · Rp 1.200.000
        </motion.text>
      </motion.g>

      <motion.g {...ddOpacity}>
        <rect x="260" y="178" width="330" height="92" rx="16" fill="var(--color-surface)" stroke="var(--color-border-strong)" />
        <motion.rect x="265" y="183" width="320" height="26" rx="13" fill="var(--color-fg)" {...ddHighlight} />
        <text x="275" y="200" fontSize="12" fill="var(--color-fg)" fontFamily="var(--font-mono)">
          Hosting plan
        </text>
        <text x="275" y="226" fontSize="12" fill="var(--color-muted)" fontFamily="var(--font-mono)">
          Hosting setup
        </text>
        <text x="275" y="252" fontSize="12" fill="var(--color-muted)" fontFamily="var(--font-mono)">
          Hosting renewal
        </text>
      </motion.g>

      <motion.rect x="260" y="300" width="150" height="36" rx="18" fill="none" stroke="var(--color-muted)" strokeOpacity="0.35" strokeDasharray="4 4" {...btnGhost} />
      <motion.g {...btnOn}>
        <motion.rect x="260" y="300" width="150" height="36" rx="18" fill="var(--color-fg)" stroke="var(--color-fg)" {...btnBorder} />
        <text x="335" y="323" fontSize="12.5" fill="var(--color-bg)" fontFamily="var(--font-mono)" textAnchor="middle">
          Create invoice
        </text>
      </motion.g>

      <motion.rect x="241" y="41" width="368" height="318" rx="17" fill="var(--color-bg)" fillOpacity="0.62" {...scrim} />
      <motion.g {...dialogOn}>
        <motion.rect x="320" y="146" width="230" height="128" rx="18" fill="var(--color-surface)" stroke="var(--color-fg)" {...dialogBorder} />
        <text x="338" y="166" fontSize="13.5" fill="var(--color-fg)" fontFamily="var(--font-mono)">
          Invoice created
        </text>
        <text x="338" y="188" fontSize="11" fill="var(--color-muted)" fontFamily="var(--font-mono)">
          INV-0242 · Rp 1.200.000
        </text>
        <rect x="470" y="228" width="64" height="30" rx="15" fill="none" stroke="var(--color-border-strong)" />
        <text x="502" y="247" fontSize="12" fill="var(--color-fg)" fontFamily="var(--font-mono)" textAnchor="middle">
          Done
        </text>
      </motion.g>

      <motion.g {...dotOpacity}>
        <motion.circle r="6" fill="var(--color-accent)" {...dotPosition} />
      </motion.g>
    </svg>
  );
}
