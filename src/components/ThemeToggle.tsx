"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme") === "dark";
    setIsDark(stored);
    document.documentElement.classList.toggle("dark", stored);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button onClick={toggle} className="rounded-2xl border px-3 py-1 text-sm shadow-sm hover:shadow transition">
      {isDark ? "Light" : "Dark"}
    </button>
  );
}
