"use client";
import { useEffect, useState } from "react";

function apply(isDark: boolean) {
  const root = document.documentElement;
  root.classList.toggle("dark", isDark);
  root.style.backgroundColor = isDark ? "#0a0a0a" : "#fafafa";
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null); // null until we detect

  useEffect(() => {
    // 1) Prefer stored value, else media query, else current DOM class
    const stored = localStorage.getItem("theme");
    const prefers = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const domHasDark = document.documentElement.classList.contains("dark");
    const initial =
      stored ? stored === "dark" : (typeof prefers === "boolean" ? prefers : domHasDark);

    setIsDark(initial);
    apply(initial);
  }, []);

  const toggle = () => {
    if (isDark === null) return; // not ready yet
    const next = !isDark;
    setIsDark(next);
    apply(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  // While mounting, avoid showing the wrong label
  const label = isDark === null ? "…" : (isDark ? "Light" : "Dark");

  return (
    <button
      onClick={toggle}
      className="rounded-2xl border px-3 py-1 text-sm shadow-sm hover:shadow transition"
      aria-label="Toggle dark mode"
    >
      {label}
    </button>
  );
}
