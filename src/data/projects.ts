// Define the shape of a project
export type Project = {
  title: string;
  desc: string;
  tags: string[];
  repo?: string;     // GitHub link (optional)
  demo?: string;     // Live demo link (optional)
  image?: string;    // Thumbnail image (optional)
  featured?: boolean; // If it's the "Featured Project"
};

// Strongly typed list of projects
export const PROJECTS: Project[] = [
  {
    title: "Smart Budget Cooking Assistant",
    desc: "Full-stack app that recommends budget-friendly meals and builds shopping lists.",
    tags: ["React", "Node.js", "Firebase", "Tailwind"],
    repo: "https://github.com/gerardjosraudale/smart-budget-cooking-assistant",
    image: "/smart-budget.png",
    featured: true,
  },
  {
    title: "Resume ↔ JD Matcher (AI)",
    desc: "NLP + embeddings to score fit, highlight gaps, and draft tailored bullets.",
    tags: ["FastAPI", "NLP", "Embeddings"],
    repo: "https://github.com/gerardjosraudale",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built with Next.js, Tailwind, and TypeScript — deployed on Vercel.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    repo: "https://github.com/gerardjosraudale/portfolio.git",
    image: "/Screenshot 2025-09-06 at 5.44.04 PM.png",
    demo: "https://josueraudales.com",
  },
 
];
