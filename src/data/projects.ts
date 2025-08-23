import type { Project } from "@/components/ProjectCard";

export const PROJECTS: Project[] = [
{
title: "Smart Budget Cooking Assistant",
desc: "Full‑stack app that recommends budget‑friendly meals and builds shopping lists.",
tags: ["React", "Node", "Firebase", "Tailwind"],
repo: "https://github.com/gerardjosraudale/smart-budget-cooking",
demo: "",
image: "/smart-budget.png",
},
{
title: "Resume ↔ JD Matcher (AI)",
desc: "NLP + embeddings to score fit, highlight gaps, and draft tailored bullets.",
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