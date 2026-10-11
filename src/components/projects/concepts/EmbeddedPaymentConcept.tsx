"use client";

import { motion } from "motion/react";
import { useConceptPlayback } from "./useConceptPlayback";

const DUR = 6;
const f = (s: number) => s / DUR;

const BORDER_OFF = 0.1;
const BORDER_ON = 0.55;
const BG_OFF = 0.02;
const BG_ON = 0.09;
const scaled = (peak: number, scale: number) => BORDER_OFF + (peak - BORDER_OFF) * scale;

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
  return {
    animate: values,
    transition: { duration: DUR, times, repeat: Infinity, ease: "easeInOut" },
  };
}

const STATIC = {
  homeOpacity: { opacity: 0 },
  invOpacity: { opacity: 1 },
  home: { fillOpacity: BG_OFF, strokeOpacity: BORDER_OFF },
  inv: { fillOpacity: BG_ON, strokeOpacity: BORDER_ON },
  row: { strokeOpacity: BORDER_OFF },
  pay: { fillOpacity: BG_OFF, strokeOpacity: BORDER_OFF, opacity: 1 },
  paid: { opacity: 0 },
  iframe: { opacity: 1 },
  form: { opacity: 1 },
  success: { opacity: 0 },
  field1: { opacity: 1, strokeOpacity: BORDER_OFF },
  field2: { opacity: 1, strokeOpacity: BORDER_OFF },
  confirm: { fillOpacity: BG_OFF, strokeOpacity: BORDER_OFF },
  dot: { cx: 390, cy: 264 },
};

export function EmbeddedPaymentConcept({ className }: { className?: string }) {
  const { ref, playing, reduced } = useConceptPlayback();
  const run = playing && !reduced;

  const home = track(
    { fillOpacity: [BG_ON, BG_ON, BG_OFF, BG_OFF, BG_ON, BG_ON], strokeOpacity: [BORDER_ON, BORDER_ON, BORDER_OFF, BORDER_OFF, BORDER_ON, BORDER_ON] },
    [0, 0, f(1.2), f(5.4), f(5.8), 1],
    STATIC.home,
    run,
  );
  const homeOpacity = track(
    { opacity: [1, 1, 0, 0, 1, 1] },
    [0, 0, f(1.2), f(5.4), f(5.8), 1],
    STATIC.homeOpacity,
    run,
  );
  const inv = track(
    { fillOpacity: [BG_OFF, BG_OFF, BG_ON, BG_ON, BG_OFF, BG_OFF], strokeOpacity: [BORDER_OFF, BORDER_OFF, BORDER_ON, BORDER_ON, BORDER_OFF, BORDER_OFF] },
    [0, f(1.0), f(1.2), f(5.4), f(5.8), 1],
    STATIC.inv,
    run,
  );
  const invOpacity = track(
    { opacity: [0, 0, 1, 1, 0, 0] },
    [0, f(1.0), f(1.2), f(5.4), f(5.8), 1],
    STATIC.invOpacity,
    run,
  );

  const row = track(
    { strokeOpacity: [BORDER_OFF, BORDER_OFF, scaled(BORDER_ON, 0.6), scaled(BORDER_ON, 0.6), BORDER_OFF, BORDER_OFF] },
    [0, f(2.1), f(2.25), f(2.55), f(2.7), 1],
    STATIC.row,
    run,
  );
  const payHeat = track(
    { fillOpacity: [BG_OFF, BG_OFF, BG_ON, BG_ON, BG_OFF, BG_OFF], strokeOpacity: [BORDER_OFF, BORDER_OFF, BORDER_ON, BORDER_ON, BORDER_OFF, BORDER_OFF] },
    [0, f(2.1), f(2.25), f(2.55), f(2.7), 1],
    { fillOpacity: STATIC.pay.fillOpacity, strokeOpacity: STATIC.pay.strokeOpacity },
    run,
  );
  const payOpacity = track(
    { opacity: [1, 1, 0, 0] },
    [0, f(4.95), f(5.15), 1],
    { opacity: STATIC.pay.opacity },
    run,
  );
  const paid = track({ opacity: [0, 0, 1, 1] }, [0, f(4.95), f(5.15), 1], STATIC.paid, run);

  const iframe = track(
    { opacity: [0, 0, 1, 1, 0, 0] },
    [0, f(2.5), f(2.85), f(5.2), f(5.6), 1],
    STATIC.iframe,
    run,
  );
  const form = track({ opacity: [1, 1, 0, 0] }, [0, f(4.85), f(5.05), 1], STATIC.form, run);
  const success = track({ opacity: [0, 0, 1, 1] }, [0, f(4.85), f(5.05), 1], STATIC.success, run);

  const field1Opacity = track(
    { opacity: [0, 0, 1, 1] },
    [0, f(3.05), f(3.3), 1],
    { opacity: STATIC.field1.opacity },
    run,
  );
  const field1Border = track(
    { strokeOpacity: [BORDER_OFF, BORDER_OFF, BORDER_ON, BORDER_ON, BORDER_OFF, BORDER_OFF] },
    [0, f(3.0), f(3.15), f(3.4), f(3.55), 1],
    { strokeOpacity: STATIC.field1.strokeOpacity },
    run,
  );
  const field2Opacity = track(
    { opacity: [0, 0, 1, 1] },
    [0, f(3.85), f(4.1), 1],
    { opacity: STATIC.field2.opacity },
    run,
  );
  const field2Border = track(
    { strokeOpacity: [BORDER_OFF, BORDER_OFF, BORDER_ON, BORDER_ON, BORDER_OFF, BORDER_OFF] },
    [0, f(3.8), f(3.95), f(4.1), f(4.25), 1],
    { strokeOpacity: STATIC.field2.strokeOpacity },
    run,
  );
  const confirm = track(
    { fillOpacity: [BG_OFF, BG_OFF, BG_ON, BG_ON, BG_OFF, BG_OFF], strokeOpacity: [BORDER_OFF, BORDER_OFF, BORDER_ON, BORDER_ON, BORDER_OFF, BORDER_OFF] },
    [0, f(4.5), f(4.65), f(4.75), f(4.9), 1],
    STATIC.confirm,
    run,
  );

  const dotTimes = [0, f(0.3), f(1.0), f(1.4), f(2.1), f(2.6), f(3.0), f(3.5), f(3.8), f(4.2), f(4.5), f(5.0), f(5.8), 1];
  const dot = track(
    {
      cx: [110, 110, 110, 110, 544, 544, 390, 390, 390, 390, 390, 390, 110, 110],
      cy: [98, 98, 132, 132, 134, 134, 196, 196, 252, 252, 308, 308, 98, 98],
    },
    dotTimes,
    STATIC.dot,
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

      <rect x="40" y="34" width="560" height="332" rx="18" fill="var(--color-media-fill)" stroke="var(--color-border)" />
      <text x="60" y="48" fontSize="12" fill="var(--color-muted)" fontFamily="var(--font-mono)">
        partner-app / billing
      </text>
      <line x1="41" y1="68" x2="599" y2="68" stroke="var(--color-border)" />
      <line x1="178" y1="69" x2="178" y2="365" stroke="var(--color-border)" />

      <motion.rect x="54" y="84" width="112" height="28" rx="14" fill="var(--color-fg)" stroke="var(--color-fg)" {...home} />
      <text x="66" y="102" fontSize="14" fill="var(--color-fg)" fontFamily="var(--font-mono)">
        Home
      </text>

      <motion.rect x="54" y="118" width="112" height="28" rx="14" fill="var(--color-fg)" stroke="var(--color-fg)" {...inv} />
      <text x="66" y="136" fontSize="14" fill="var(--color-fg)" fontFamily="var(--font-mono)">
        Invoice
      </text>

      <text x="66" y="170" fontSize="14" fill="var(--color-muted)" fontFamily="var(--font-mono)">
        Customers
      </text>
      <text x="66" y="204" fontSize="14" fill="var(--color-muted)" fontFamily="var(--font-mono)">
        Settings
      </text>

      <motion.g {...homeOpacity}>
        <text x="196" y="98" fontSize="14" fill="var(--color-fg)" fontFamily="var(--font-mono)">
          Overview
        </text>
        <rect x="196" y="116" width="187" height="72" rx="12" fill="none" stroke="var(--color-border)" />
        <text x="208" y="138" fontSize="11" fill="var(--color-muted)" fontFamily="var(--font-mono)">
          revenue
        </text>
        <rect x="399" y="116" width="187" height="72" rx="12" fill="none" stroke="var(--color-border)" />
        <text x="411" y="138" fontSize="11" fill="var(--color-muted)" fontFamily="var(--font-mono)">
          outstanding
        </text>
        <rect x="196" y="204" width="390" height="140" rx="12" fill="none" stroke="var(--color-border)" />
        <text x="208" y="226" fontSize="11" fill="var(--color-muted)" fontFamily="var(--font-mono)">
          activity
        </text>
      </motion.g>

      <motion.g {...invOpacity}>
        <text x="196" y="98" fontSize="14" fill="var(--color-fg)" fontFamily="var(--font-mono)">
          Invoices
        </text>

        <motion.rect x="196" y="116" width="390" height="36" rx="12" fill="none" stroke="var(--color-fg)" {...row} />
        <text x="210" y="138" fontSize="13" fill="var(--color-fg)" fontFamily="var(--font-mono)">
          INV-0241
        </text>
        <text x="316" y="138" fontSize="13" fill="var(--color-muted)" fontFamily="var(--font-mono)">
          Rp 4.200.000
        </text>
        <motion.g {...payOpacity}>
          <motion.rect x="514" y="121" width="60" height="24" rx="12" fill="var(--color-fg)" stroke="var(--color-fg)" {...payHeat} />
          <text x="524" y="138" fontSize="12" fill="var(--color-bg)" fontFamily="var(--font-mono)">
            Pay
          </text>
        </motion.g>
        <motion.text x="528" y="138" fontSize="12" fill="var(--color-muted)" fontFamily="var(--font-mono)" {...paid}>
          Paid
        </motion.text>

        <rect x="196" y="192" width="390" height="36" rx="12" fill="none" stroke="var(--color-border)" />
        <text x="210" y="214" fontSize="13" fill="var(--color-fg)" fontFamily="var(--font-mono)">
          INV-0240
        </text>
        <text x="316" y="214" fontSize="13" fill="var(--color-muted)" fontFamily="var(--font-mono)">
          Rp 1.750.000
        </text>
        <text x="528" y="214" fontSize="12" fill="var(--color-muted)" fontFamily="var(--font-mono)">
          Paid
        </text>

        <rect x="196" y="236" width="390" height="36" rx="12" fill="none" stroke="var(--color-border)" />
        <text x="210" y="258" fontSize="13" fill="var(--color-fg)" fontFamily="var(--font-mono)">
          INV-0239
        </text>
        <text x="316" y="258" fontSize="13" fill="var(--color-muted)" fontFamily="var(--font-mono)">
          Rp 980.000
        </text>
        <text x="528" y="258" fontSize="12" fill="var(--color-muted)" fontFamily="var(--font-mono)">
          Paid
        </text>
      </motion.g>

      <motion.g {...iframe}>
        <rect x="216" y="112" width="350" height="240" rx="16" fill="var(--color-bg)" stroke="var(--color-muted)" strokeDasharray="4 4" strokeOpacity={0.55} />
        <rect x="230" y="101" width="140" height="20" rx="10" fill="var(--color-bg)" />
        <text x="238" y="115" fontSize="11" fill="var(--color-muted)" fontFamily="var(--font-mono)">
          iframe · pay.quickbill
        </text>

        <motion.g {...form}>
          <text x="234" y="156" fontSize="14" fill="var(--color-fg)" fontFamily="var(--font-mono)">
            Pay INV-0241
          </text>
          <text x="234" y="186" fontSize="11" fill="var(--color-muted)" fontFamily="var(--font-mono)">
            amount
          </text>
          <motion.rect x="234" y="202" width="312" height="32" rx="16" fill="none" stroke="var(--color-fg)" {...field1Border} />
          <motion.text x="248" y="223" fontSize="13" fill="var(--color-fg)" fontFamily="var(--font-mono)" {...field1Opacity}>
            Rp 4.200.000
          </motion.text>

          <text x="234" y="242" fontSize="11" fill="var(--color-muted)" fontFamily="var(--font-mono)">
            method
          </text>
          <motion.rect x="234" y="258" width="312" height="32" rx="16" fill="none" stroke="var(--color-fg)" {...field2Border} />
          <motion.text x="248" y="279" fontSize="13" fill="var(--color-fg)" fontFamily="var(--font-mono)" {...field2Opacity}>
            BCA Virtual Account
          </motion.text>

          <motion.rect x="234" y="312" width="312" height="36" rx="18" fill="var(--color-fg)" stroke="var(--color-fg)" {...confirm} />
          <text x="390" y="334" fontSize="13" fill="var(--color-bg)" fontFamily="var(--font-mono)" textAnchor="middle">
            Confirm payment
          </text>
        </motion.g>

        <motion.g {...success}>
          <circle cx="391" cy="190" r="22" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" />
          <circle cx="391" cy="190" r="5.5" fill="var(--color-accent)" />
          <text x="391" y="282" fontSize="14" fill="var(--color-fg)" fontFamily="var(--font-mono)" textAnchor="middle">
            Payment success
          </text>
          <text x="391" y="306" fontSize="11" fill="var(--color-muted)" fontFamily="var(--font-mono)" textAnchor="middle">
            Rp 4.200.000 · INV-0241
          </text>
        </motion.g>
      </motion.g>

      <motion.circle r="6" fill="var(--color-accent)" {...dot} />
    </svg>
  );
}
