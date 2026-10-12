"use client";

import { useSyncExternalStore } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { MoonIcon, SunIcon } from "@/components/ui/icons";

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getSnapshot(): "light" | "dark" {
  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

function getServerSnapshot(): "light" | "dark" {
  return "dark";
}

type ThemeToggleProps = {
  size?: "desktop" | "mobile";
};

export function ThemeToggle({ size = "desktop" }: ThemeToggleProps) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const reducedMotion = useReducedMotion();

  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem("theme", next);
  }

  const sizing = size === "mobile" ? "h-10 w-10" : "h-7 w-7";
  const spin = reducedMotion ? 0 : 45;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className={`relative flex items-center justify-center overflow-hidden rounded-pill border border-[rgb(var(--overlay-rgb)_/_0.1)] bg-transparent text-fg transition-colors duration-300 hover:bg-[rgb(var(--overlay-rgb)_/_0.06)] ${sizing}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -spin, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: spin, scale: 0.6 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          {theme === "light" ? (
            <SunIcon className="h-4 w-4" />
          ) : (
            <MoonIcon className="h-4 w-4" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
