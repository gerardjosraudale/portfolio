"use client";
import { useEffect, useState } from "react";

function apply(isDark: boolean) {
  const root = document.documentElement;
  root.classList.toggle("dark", isDark);
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null); // null until detected

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

  return (
    <button
      onClick={toggle}
      className="rounded-2xl border px-3 py-1 text-sm shadow-sm hover:shadow transition"
      aria-label="Toggle dark mode"
    >
      {isDark === null ? "…" : isDark ? "Light" : "Dark"}
    </button>
  );
}
