"use client";

import { useLayoutEffect } from "react";

export function ThemeSync() {
  useLayoutEffect(() => {
    try {
      const stored = window.localStorage.getItem("theme");
      const theme =
        stored === "light" || stored === "dark"
          ? stored
          : window.matchMedia("(prefers-color-scheme: light)").matches
            ? "light"
            : "dark";
      document.documentElement.setAttribute("data-theme", theme);
    } catch {
      // localStorage may be unavailable (private mode, disabled storage)
    }
  }, []);

  return null;
}
