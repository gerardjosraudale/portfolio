"use client";

import { useState } from "react";

// ---- Replace these with your real links ----
const SOCIALS = [
  { label: "GitHub", href: "https://github.com/gerardjosraudale" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/josue-raudales-6a3080173" },
  { label: "Email", href: "mailto:you@example.com" },
];

const PROJECTS = [
  {
    title: "Smart Budget Cooking Assistant",
    desc: "Full‑stack app with Node.js, React, and Firebase that recommends budget‑friendly meals and builds shopping lists.",
    tags: ["React", "Node", "Firebase", "Tailwind"],
    repo: "https://github.com/gerardjosraudale/smart-budget-cooking",
    demo: "https://your-demo-url.com",
  },
  {
    title: "Resume ↔ JD Matcher (AI)",
    desc: "NLP + embeddings to compute match score, highlight gaps, and generate tailored bullets.",
    tags: ["FastAPI", "NLP", "Embeddings"],
    repo: "https://github.com/gerardjosraudale/resume-jd-matcher",
    demo: "",
  },
  {
    title: "Realtime Trivia",
    desc: "WebSockets game with rooms, leaderboards, and mobile‑first UI.",
    tags: ["Socket.io", "Postgres", "Vite"],
    repo: "https://github.com/gerardjosraudale/realtime-trivia",
    demo: "",
  },
];

const CERTS = [
  { name: "WGU Cert Title #1", org: "WGU", year: "2025", link: "#" },
  { name: "AWS Cloud Practitioner", org: "AWS", year: "2024", link: "#" },
  { name: "Google Data Analytics", org: "Google", year: "2023", link: "#" },
];

export default function PortfolioHome() {
  const [dark, setDark] = useState(true);

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <div className="min-h-screen bg-zinc-50 text-zinc-900 transition-colors dark:bg-zinc-950 dark:text-zinc-50">
        {/* Navbar */}
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-zinc-900/40">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <a href="#home" className="text-xl font-bold tracking-tight">JR • Software Engineer</a>
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

        {/* Hero */}
        <section id="home" className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Hi, I’m <span className="text-indigo-600 dark:text-indigo-400">Josue Raudales</span>.
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
              Software Engineering student focused on full‑stack web, AI‑assisted dev, and delightful UX. I love cooking, fitness, and building tools that save people time and money.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow hover:-translate-y-0.5 hover:shadow-md transition">
                View Projects
              </a>
              <a href="/resume.pdf" className="rounded-2xl border px-5 py-3 text-sm font-semibold shadow-sm hover:shadow transition" target="_blank">
                Download Resume
              </a>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2 text-xs text-zinc-500 dark:text-zinc-400">
              <li className="rounded-full border px-3 py-1">React</li>
              <li className="rounded-full border px-3 py-1">Node.js</li>
              <li className="rounded-full border px-3 py-1">Firebase</li>
              <li className="rounded-full border px-3 py-1">PostgreSQL</li>
              <li className="rounded-full border px-3 py-1">CI/CD</li>
              <li className="rounded-full border px-3 py-1">Testing</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl border bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 p-1 shadow-inner">
              <div className="h-full w-full rounded-2xl bg-white p-6 dark:bg-zinc-900">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Featured Project</p>
                <h3 className="mt-2 text-2xl font-semibold">Smart Budget Cooking Assistant</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                  Personalized, budget‑aware meal planning with shopping lists and pantry integration.
                </p>
                <div className="mt-4 flex gap-3 text-sm">
                  <a href="https://github.com/gerardjosraudale/smart-budget-cooking" className="underline">Repo</a>
                  <a href="https://your-demo-url.com" className="underline">Live Demo</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-6xl px-4 py-12">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Projects</h2>
            <a href="https://github.com/gerardjosraudale" className="text-sm underline" target="_blank">See all on GitHub →</a>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <article key={p.title} className="group rounded-3xl border p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{p.desc}</p>
                <ul className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-500">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-full border px-3 py-1">{t}</li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-4 text-sm">
                  <a className="underline" href={p.repo} target="_blank">Repo</a>
                  {p.demo && (
                    <a className="underline" href={p.demo} target="_blank">Live Demo</a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Certificates */}
        <section id="certs" className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Certificates</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {CERTS.map((c) => (
              <a key={c.name} href={c.link} target="_blank" className="rounded-2xl border p-4 text-sm shadow-sm hover:shadow transition">
                <div className="font-medium">{c.name}</div>
                <div className="text-zinc-500">{c.org} • {c.year}</div>
              </a>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">About</h2>
          <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-300">
            I’m a software engineer who enjoys shipping clean, tested code and crafting smooth user experiences. Recently I’ve been building
            full‑stack apps with React/Node, adding automated tests and CI/CD, and experimenting with practical AI features.
            Outside of coding, I’m into camping, cooking, reading, and family time.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
          <div className="rounded-3xl border p-6 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Let’s talk</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">Open to internships and junior SWE roles. Prefer full‑stack and testing‑heavy teams.</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" className="rounded-2xl border px-4 py-2 shadow-sm hover:shadow transition">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mx-auto max-w-6xl px-4 pb-10 text-xs text-zinc-500">
          © {new Date().getFullYear()} Josue Raudales. Built with React & Tailwind.
        </footer>
      </div>
    </div>
  );
}
