"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/data/projects";
import { CERTS } from "@/data/certs";

export default function PortfolioHome() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string | null>(null);

  const tags = useMemo(() => {
    const set = new Set<string>();
    PROJECTS.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const text = (p.title + " " + p.desc + " " + p.tags.join(" ")).toLowerCase();
      const matchesQuery = !query || text.includes(query.toLowerCase());
      const matchesTag = !tag || p.tags.includes(tag);
      return matchesQuery && matchesTag;
    });
  }, [query, tag]);

  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section id="home" className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Hi, I’m <span className="text-indigo-600 dark:text-indigo-400">Josue Raudales</span>.
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
            Aspiring software engineer with hands-on project experience in web apps, AI integrations, and real-time systems, seeking opportunities to contribute and grow.
          </p>
         <div className="mt-6 flex flex-wrap gap-2 md:gap-3">
  {/* View Projects */}
  <a
    href="#projects"
    className="inline-flex items-center gap-2 rounded-full h-10 px-5 border transition
               bg-indigo-600 hover:bg-indigo-500 text-white border-indigo-600
               hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
  >
    <span className="font-medium">View Projects</span>
  </a>

  {/* Download Resume */}
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-full h-10 px-5 border transition
               bg-zinc-200 hover:bg-zinc-300 text-zinc-800 border-zinc-300
               dark:bg-indigo-600 dark:hover:bg-indigo-500 dark:text-white dark:border-indigo-500/70
               hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
  >
    <span className="font-medium">Download Resume</span>
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
                Personalized, budget-aware meal planning with shopping lists and pantry integration.
              </p>
              <div className="mt-4 flex gap-3 text-sm">
                <a href="https://github.com/gerardjosraudale/smart-budget-cooking" className="underline" target="_blank">Repo</a>
                <a href="#projects" className="underline">See Projects</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Projects</h2>
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full rounded-xl border px-3 py-2 text-sm shadow-sm md:w-64"
            />
            <select
              value={tag ?? ""}
              onChange={(e) => setTag(e.target.value || null)}
              className="rounded-xl border px-3 py-2 text-sm shadow-sm"
            >
              <option value="">All tags</option>
              {tags.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <a href="https://github.com/gerardjosraudale" className="text-sm underline" target="_blank">See all on GitHub →</a>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
          {filtered.length === 0 && (
            <div className="rounded-2xl border p-6 text-sm text-zinc-500">No projects match your search.</div>
          )}
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
          Senior Software Engineering student focusing on full-stack web apps (Node.js, React, Firebase). I love building practical tools like my Smart Budget Cooking Assistant and clean, accessible UIs.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border p-6 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Let’s talk</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">Open to internships and junior SWE roles. Prefer full-stack and testing-heavy teams.</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a href="https://github.com/gerardjosraudale" target="_blank" className="rounded-2xl border px-4 py-2 shadow-sm hover:shadow transition">GitHub</a>
            <a href="https://www.linkedin.com/in/josue-raudales-6a3080173" target="_blank" className="rounded-2xl border px-4 py-2 shadow-sm hover:shadow transition">LinkedIn</a>
            <a href="mailto:you@example.com" className="rounded-2xl border px-4 py-2 shadow-sm hover:shadow transition">Email</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-4 pb-10 text-xs text-zinc-500">
        © {new Date().getFullYear()} Josue Raudales. Built with Next.js & Tailwind.
      </footer>
    </div>
  );
}
