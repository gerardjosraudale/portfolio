
import { PROJECTS } from "@/data/projects";

const BASE_URL = "https://josueraudales.com";

export async function GET() {
  const now = new Date().toISOString();

  const urls = [
    { loc: BASE_URL, priority: 1.0 },
    ...PROJECTS.map((p) => ({
      loc: `${BASE_URL}/projects/${encodeURIComponent(
        p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
      )}`,
      priority: 0.8,
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `
  <url>
    <loc>${u.loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
