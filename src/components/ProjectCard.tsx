"use client";

import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  const titleId = `project-${p.title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <article
      aria-labelledby={titleId}
      className="rounded-2xl border p-6 shadow-sm transition bg-white
                 hover:-translate-y-1 hover:shadow-lg
                 dark:bg-zinc-900 dark:border-zinc-700"
    >
      {/* Optional thumbnail */}
      {p.image && (
        <div className="mb-4 overflow-hidden rounded-xl border bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-700">
          <Image
            src={p.image}
            alt={`${p.title} thumbnail`}
            width={800}
            height={450}
            className="h-auto w-full"
            priority={false}
          />
        </div>
      )}

      <h3 id={titleId} className="text-lg font-semibold">
        {p.title}
      </h3>

      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{p.desc}</p>

      {/* Tags */}
      {p.tags?.length ? (
        <ul className="mt-4 flex flex-wrap gap-2 text-xs">
          {p.tags.map((tag) => (
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
      ) : null}

      {/* Links */}
      {(p.repo || p.demo) && (
        <div className="mt-4 flex gap-3 text-sm">
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-indigo-600 hover:underline
                         dark:text-indigo-400"
            >
              <Github className="h-4 w-4" aria-hidden />
              Repo
            </a>
          )}
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-indigo-600 hover:underline
                         dark:text-indigo-400"
            >
              <ExternalLink className="h-4 w-4" aria-hidden />
              Live Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}
