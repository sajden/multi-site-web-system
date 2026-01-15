import { headers, cookies } from "next/headers"
import { notFound } from "next/navigation"
import { siteMap, vvsConfig } from "@/src/sites"
import type { SiteConfig } from "@/src/sites/types"

/**
 * Resolves the current site based on the Host header.
 * This function performs O(1) lookup from an in-memory map.
 * No database or filesystem I/O occurs during request handling.
 */
export async function getCurrentSite(): Promise<SiteConfig> {
  const headersList = await headers()
  let host = headersList.get("host") || ""

  if (process.env.NODE_ENV === "development") {
    // Check if this is a localhost request
    const isLocalhost = host.includes("localhost") || host.includes("127.0.0.1")

    if (isLocalhost) {
      // Try to get dev_site from cookie
      const cookieStore = await cookies()
      const devSite = cookieStore.get("dev_site")?.value

      if (devSite) {
        host = devSite
        console.log(`[siteResolver] Development mode: Using ${devSite}`)
      } else {
        // Default to VVS site for localhost
        console.log("[siteResolver] Development mode: Using VVS site as default")
        console.log("[siteResolver] Tip: Use ?dev_site=starta-vvs.se to test different sites")
        return vvsConfig
      }
    }
  }

  // Normalize host: lowercase and remove port
  const normalizedHost = host.toLowerCase().split(":")[0]

  // O(1) lookup in pre-loaded site map
  const site = siteMap[normalizedHost]

  if (!site) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[siteResolver] Unknown host: ${normalizedHost}, falling back to VVS site`)
      return vvsConfig
    }

    // Production: Unknown domain - return 404
    console.warn(`[siteResolver] Unknown host: ${normalizedHost}`)
    notFound()
  }

  return site
}

/**
 * Utility to build CDN URLs for assets
 */
export function getCdnUrl(assetKey: string, extension = "png"): string {
  return `https://cdn.webuildit.se/assets/${assetKey}.${extension}`
}

/**
 * Get icon URL for a site
 */
export function getIconUrl(iconKey: string): string {
  return getCdnUrl(iconKey, "svg")
}

/**
 * Get hero image URL for a site
 */
export function getHeroImageUrl(heroImageKey: string): string {
  return `/images/${heroImageKey}.jpg`
}
