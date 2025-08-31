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
    const initial = stored
      ? stored === "dark"
      : typeof prefers === "boolean"
      ? prefers
      : domHasDark;

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

  // Animations for icon swap
  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.15 } },
    exit: { opacity: 0, transition: { duration: 0.12 } },
  };

  const rotateVariants = {
    initial: { opacity: 0, rotate: -90, scale: 0.8 },
    animate: { opacity: 1, rotate: 0, scale: 1, transition: { duration: 0.25, ease: "easeOut" } },
    exit: { opacity: 0, rotate: 90, scale: 0.8, transition: { duration: 0.2, ease: "easeIn" } },
  };

  const v = reduceMotion ? fadeVariants : rotateVariants;
  const tooltip = isDark ? "Switch to light" : "Switch to dark";

  return (
    <motion.button
      onClick={toggle}
      aria-label="Toggle dark mode"
      aria-pressed={isDark ?? false}
      title={tooltip}
      // Micro animations
      whileTap={reduceMotion ? undefined : { scale: 0.94 }}
      whileHover={reduceMotion ? undefined : { scale: 1.08 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`rounded-full p-2 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-indigo-500/50
        ${
          isDark
            ? "bg-indigo-600 hover:bg-indigo-500 text-white hover:shadow-lg hover:shadow-indigo-400/40"
            : "bg-zinc-200 hover:bg-zinc-300 text-zinc-800 hover:shadow-lg hover:shadow-zinc-400/40"
        }
      `}
    >
      <AnimatePresence initial={false} mode="wait">
        {isDark === null ? (
          <motion.div key="loading" initial={v.initial} animate={v.animate} exit={v.exit}>
            <span className="inline-block w-5 h-5">…</span>
          </motion.div>
        ) : isDark ? (
          <motion.div key="sun" initial={v.initial} animate={v.animate} exit={v.exit}>
            <Sun className="h-5 w-5" aria-hidden />
          </motion.div>
        ) : (
          <motion.div key="moon" initial={v.initial} animate={v.animate} exit={v.exit}>
            <Moon className="h-5 w-5" aria-hidden />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
