"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-zinc-900/40">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="#home" className="text-xl font-bold tracking-tight">
          JR • Software Engineer
        </Link>

        <div className="flex items-center gap-2 md:gap-3">
          {/* GitHub */}
          <a
            href="https://github.com/gerardjosraudale"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full h-9 px-3 border transition
                       bg-zinc-200 hover:bg-zinc-300 text-zinc-800 border-zinc-300
                       dark:bg-indigo-600 dark:hover:bg-indigo-500 dark:text-white dark:border-indigo-500/70
                       hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          >
            <Github className="h-4 w-4" />
            <span className="text-sm font-medium">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/josue-raudales-6a3080173"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full h-9 px-3 border transition
                       bg-zinc-200 hover:bg-zinc-300 text-zinc-800 border-zinc-300
                       dark:bg-indigo-600 dark:hover:bg-indigo-500 dark:text-white dark:border-indigo-500/70
                       hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          >
            <Linkedin className="h-4 w-4" />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>

          {/* Email */}
          <a
            href="mailto:g.josue.raudales@gmail.com"
            className="inline-flex items-center gap-1 rounded-full h-9 px-3 border transition
                       bg-zinc-200 hover:bg-zinc-300 text-zinc-800 border-zinc-300
                       dark:bg-indigo-600 dark:hover:bg-indigo-500 dark:text-white dark:border-indigo-500/70
                       hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          >
            <Mail className="h-4 w-4" />
            <span className="text-sm font-medium">Email</span>
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
