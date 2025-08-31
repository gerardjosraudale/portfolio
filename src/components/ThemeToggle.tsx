"use client";
import { useEffect, useState } from "react";

function apply(isDark: boolean) {
  const root = document.documentElement;
  root.classList.toggle("dark", isDark);
  root.style.backgroundColor = isDark ? "#0a0a0a" : "#fafafa";
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefers = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const initial = stored ? stored === "dark" : prefers;
    setIsDark(initial);
    apply(initial);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    apply(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button onClick={toggle} className="rounded-2xl border px-3 py-1 text-sm shadow-sm hover:shadow transition">
      {isDark ? "Light" : "Dark"}
    </button>
  );
}
