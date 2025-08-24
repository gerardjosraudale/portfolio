"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
// ...
<ThemeToggle />


const SOCIALS = [
{ label: "GitHub", href: "https://github.com/gerardjosraudale" },
{ label: "LinkedIn", href: "https://www.linkedin.com/in/josue-raudales-6a3080173" },
{ label: "Email", href: "g.josue.raudales@gmail.com" },
];

export default function Navbar() {
const [dark, setDark] = useState(true);
return (
<header className={`${dark ? "dark" : ""} sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-zinc-900/40`}>
<nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
<Link href="#home" className="text-xl font-bold tracking-tight">JR • Software Engineer</Link>
<div className="flex items-center gap-4">
{SOCIALS.map((s) => (
<a key={s.label} href={s.href} target="_blank" className="text-sm hover:underline">
{s.label}
</a>
))}
<button
onClick={() => setDark((d) => !d)}
className="rounded-2xl border px-3 py-1 text-sm shadow-sm hover:shadow transition"
aria-label="Toggle dark mode"
>
{dark ? "Light" : "Dark"}
</button>
</div>
</nav>
</header>
);
}