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

  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://${site.domain}/sitemap.xml`

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
