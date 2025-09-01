"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { Section, SectionTitle } from "@/components/Section";
import { PROJECTS } from "@/data/projects";
import { CERTS } from "@/data/certs";
import { Github, Linkedin, Mail, Award } from "lucide-react";

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

      <main className="mx-auto max-w-6xl px-4">
        {/* Hero */}
        <Section id="home">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                Hi, I’m <span className="text-indigo-600 dark:text-indigo-400">Josue Raudales</span>.
              </h1>
              <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
                Aspiring software engineer with hands-on project experience in web apps, AI integrations, and real-time systems, seeking opportunities to contribute and grow.
              </p>

              {/* Hero CTAs */}
              <div className="mt-6 flex flex-wrap gap-2 md:gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full h-10 px-5 border transition
                             bg-indigo-600 hover:bg-indigo-500 text-white border-indigo-600
                             hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                >
                  <span className="font-medium">View Projects</span>
                </a>

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

              {/* Tech pills */}
              <ul className="mt-6 flex flex-wrap gap-2 md:gap-3 text-xs">
                {["React", "Node.js", "Firebase", "PostgreSQL", "CI/CD", "Testing"].map((skill) => (
                  <li
                    key={skill}
                    className="inline-flex items-center rounded-full h-7 px-3 border 
                               bg-zinc-100 text-zinc-700 border-zinc-300
                               dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700
                               transition"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Featured panel */}
            {/* Featured panel — unified with ProjectCard styling */}
<div className="relative">
  <div className="rounded-3xl bg-gradient-to-br from-indigo-500/15 to-fuchsia-500/15 p-1">
    <div
      className="rounded-2xl border p-6 shadow-sm transition
                 hover:-translate-y-1 hover:shadow-lg
                 bg-white dark:bg-zinc-900 dark:border-zinc-700"
    >
      <p className="text-sm text-zinc-500 dark:text-zinc-400">Featured Project</p>

      <h3 className="mt-1 text-2xl font-semibold">
        Smart Budget Cooking Assistant
      </h3>

      <p className="mt-2 text-zinc-600 dark:text-zinc-300">
        Personalized, budget-aware meal planning with shopping lists and pantry integration.
      </p>

      {/* Optional: tech tags, same mini-pill style */}
      <ul className="mt-4 flex flex-wrap gap-2 text-xs">
        {["React", "Node.js", "Firebase"].map((tag) => (
          <li
            key={tag}
            className="inline-flex items-center rounded-full h-6 px-2 border
                       bg-zinc-100 text-zinc-700 border-zinc-300
                       dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700
                       transition"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex gap-3 text-sm">
        <a
          href="https://github.com/gerardjosraudale/smart-budget-cooking"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repo
        </a>
        <a href="#projects" className="underline">See Projects</a>
      </div>
    </div>
  </div>
</div>


        {/* Projects */}
        <Section id="projects">
          <div className="mb-6 md:mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <SectionTitle>Projects</SectionTitle>
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
              <a
                href="https://github.com/gerardjosraudale"
                className="text-sm underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                See all on GitHub →
              </a>
            </div>
          </div>

          <div className="grid gap-4 md:gap-6 md:grid-cols-2">
            {filtered.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
            {filtered.length === 0 && (
              <div className="rounded-2xl border p-6 text-sm text-zinc-500">
                No projects match your search.
              </div>
            )}
          </div>
        </Section>

        {/* Certificates */}
        <Section id="certs">
          <SectionTitle>Certificates</SectionTitle>
          <div className="mt-6 grid gap-3 md:gap-4 sm:grid-cols-2 md:grid-cols-3">
            {CERTS.map((c) => (
              <a
                key={c.name}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full h-12 px-4 border transition
                           bg-zinc-100 text-zinc-800 border-zinc-300 hover:bg-zinc-200 hover:shadow-md
                           dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-700
                           focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                title={`${c.name} — ${c.org}`}
              >
                <span
                  className="inline-flex items-center justify-center h-7 w-7 rounded-full
                             bg-white text-zinc-700 border border-zinc-300
                             dark:bg-zinc-900 dark:text-zinc-200 dark:border-zinc-700
                             group-hover:scale-105 transition"
                  aria-hidden
                >
                  <Award className="h-4 w-4" />
                </span>
                <span className="truncate">
                  <span className="font-medium">{c.name}</span>
                  <span className="text-zinc-500 dark:text-zinc-400"> • {c.org}</span>
                </span>
                <span className="ml-auto text-xs text-zinc-500 dark:text-zinc-400">{c.year}</span>
              </a>
            ))}
          </div>
        </Section>

        {/* About */}
        <Section id="about">
          <SectionTitle>About</SectionTitle>
          <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-300">
            Senior Software Engineering student focusing on full-stack web apps (Node.js, React, Firebase). I love building practical tools like my Smart Budget Cooking Assistant and clean, accessible UIs.
          </p>
        </Section>

        {/* Contact */}
        <Section id="contact">
          <div className="rounded-3xl border p-6 shadow-sm">
            <SectionTitle>Let’s talk</SectionTitle>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">
              Open to internships and junior SWE roles. Prefer full-stack and testing-heavy teams.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 md:gap-3">
              <a
                href="https://github.com/gerardjosraudale"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full h-10 px-4 border transition
                           bg-zinc-200 hover:bg-zinc-300 text-zinc-800 border-zinc-300
                           dark:bg-indigo-600 dark:hover:bg-indigo-500 dark:text-white dark:border-indigo-500/70
                           hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              >
                <Github className="h-4 w-4" />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/josue-raudales-6a3080173"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full h-10 px-4 border transition
                           bg-zinc-200 hover:bg-zinc-300 text-zinc-800 border-zinc-300
                           dark:bg-indigo-600 dark:hover:bg-indigo-500 dark:text-white dark:border-indigo-500/70
                           hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              >
                <Linkedin className="h-4 w-4" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href="mailto:g.josue.raudales@gmail.com"
                className="inline-flex items-center gap-1 rounded-full h-10 px-4 border transition
                           bg-zinc-200 hover:bg-zinc-300 text-zinc-800 border-zinc-300
                           dark:bg-indigo-600 dark:hover:bg-indigo-500 dark:text-white dark:border-indigo-500/70
                           hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              >
                <Mail className="h-4 w-4" />
                <span className="font-medium">Email</span>
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="mx-auto max-w-6xl px-4 pb-10 text-xs text-zinc-500">
        © {new Date().getFullYear()} Josue Raudales. Built with Next.js & Tailwind.
      </footer>
    </div>
  );
}
