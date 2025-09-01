"use client";

import { Github, ExternalLink } from "lucide-react";


export default function ProjectCard({ p }: { p: any }) {
  return (
    <div
      className="rounded-2xl border p-6 shadow-sm transition 
                 hover:-translate-y-1 hover:shadow-lg 
                 bg-white dark:bg-zinc-900 dark:border-zinc-700"
    >
      <h3 className="text-lg font-semibold">{p.title}</h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{p.desc}</p>

      {/* Tags */}
      <ul className="mt-4 flex flex-wrap gap-2 text-xs">
        {p.tags.map((tag: string) => (
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

      {/* Links */}
      <div className="mt-4 flex gap-3 text-sm">
        {p.repo && (
          <a
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            <Github className="h-4 w-4" />
            Repo
          </a>
        )}
        {p.demo && (
          <a
            href={p.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
