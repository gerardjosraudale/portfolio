import type { NextRequest } from "next/server";

export function GET(_req: NextRequest) {
  const body = `User-agent: *
Allow: /

Sitemap: https://josueraudales.com/sitemap.xml`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
