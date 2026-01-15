import { headers } from "next/headers"
import { siteMap } from "@/src/sites"

export async function GET() {
  const headersList = await headers()
  const host = headersList.get("host") || ""
  const normalizedHost = host.toLowerCase().split(":")[0]

  // Find site configuration
  const site = siteMap[normalizedHost]

  if (!site) {
    return new Response("Site not found", { status: 404 })
  }

  const baseUrl = `https://${site.domain}`

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
