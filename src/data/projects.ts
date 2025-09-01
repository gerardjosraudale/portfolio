// Types for your portfolio projects
export type Project = {
  title: string;
  desc: string;
  tags: string[];
  repo?: string;     // GitHub URL
  demo?: string;     // Live demo URL
  image?: string;    // e.g. "/smart-budget.png" (optional)
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    title: "Smart Budget Cooking Assistant",
    desc:
      "Full-stack app that recommends budget-friendly meals and builds shopping lists.",
    tags: ["React", "Node.js", "Firebase", "Tailwind"],
    repo: "https://github.com/gerardjosraudale/smart-budget-cooking",
    image: "/smart-budget.png",
    featured: true,
  },
  {
    title: "Resume ↔ JD Matcher (AI)",
    desc:
      "NLP + embeddings to score fit, highlight gaps, and draft tailored bullets.",
    tags: ["FastAPI", "NLP", "Embeddings"],
    repo: "https://github.com/gerardjosraudale", // replace with exact repo if you have it
  },
  // Add more projects below…
];
