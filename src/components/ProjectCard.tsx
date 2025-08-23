import React from "react";

export type Project = {
title: string;
desc: string;
tags: string[];
repo: string;
demo?: string;
image?: string; // optional thumbnail in /public
};

export default function ProjectCard({ p }: { p: Project }) {
return (
<article className="group rounded-3xl border p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
{p.image ? (
// eslint-disable-next-line @next/next/no-img-element
<img src={p.image} alt="thumbnail" className="mb-3 aspect-video w-full rounded-2xl object-cover" />
) : null}
<h3 className="text-lg font-semibold">{p.title}</h3>
<p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{p.desc}</p>
<ul className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-500">
{p.tags.map((t) => (
<li key={t} className="rounded-full border px-3 py-1">{t}</li>
))}
</ul>
<div className="mt-4 flex gap-4 text-sm">
<a className="underline" href={p.repo} target="_blank">Repo</a>
{p.demo ? (
<a className="underline" href={p.demo} target="_blank">Live Demo</a>
) : null}
</div>
</article>
);
}