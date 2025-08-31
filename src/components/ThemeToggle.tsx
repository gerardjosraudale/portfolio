"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

function apply(isDark: boolean) {
  document.documentElement.classList.toggle("dark", isDark);
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefers = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const domHasDark = document.documentElement.classList.contains("dark");
    const initial = stored ? stored === "dark" : (typeof prefers === "boolean" ? prefers : domHasDark);
    setIsDark(initial);
    apply(initial);
  }, []);

  const toggle = () => {
    if (isDark === null) return;
    const next = !isDark;
    setIsDark(next);
    apply(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const variants = reduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.15 } },
        exit:    { opacity: 0, transition: { duration: 0.12 } },
      }
    : {
        initial: { opacity: 0, rotate: -90, scale: 0.8 },
        animate: { opacity: 1, rotate: 0,    scale: 1,   transition: { duration: 0.25, ease: "easeOut" } },
        exit:    { opacity: 0, rotate: 90,    scale: 0.8, transition: { duration: 0.2,  ease: "easeIn"  } },
      };

  const tooltip = isDark ? "Switch to light" : "Switch to dark";

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      aria-pressed={isDark ?? false}
      title={tooltip}
      className="rounded-2xl border p-2 shadow-sm hover:shadow transition focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
    >
      <AnimatePresence initial={false} mode="wait">
        {isDark === null ? (
          <motion.div key="loading" {...variants}>
            <span className="inline-block w-5 h-5">…</span>
          </motion.div>
        ) : isDark ? (
          <motion.div key="sun" {...variants}>
            <Sun className="h-5 w-5 text-yellow-500" aria-hidden />
          </motion.div>
        ) : (
          <motion.div key="moon" {...variants}>
            <Moon className="h-5 w-5 text-indigo-500" aria-hidden />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
