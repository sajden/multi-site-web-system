"use client"

import { useEffect, useRef } from "react"
import { isConsentAccepted } from "@/lib/consent"
import type { SiteConfig } from "@/src/sites/types"

interface PageViewTrackerProps {
  site: SiteConfig
}

/**
 * Client-side pageview tracker that respects GDPR consent.
 * Only sends tracking data if user has accepted cookies.
 */
export function PageViewTracker({ site }: PageViewTrackerProps) {
  const hasTracked = useRef(false)

  useEffect(() => {
    // Only track once per page load
    if (hasTracked.current) return

    // Only track if consent is accepted
    if (!isConsentAccepted()) {
      console.log("[v0] Tracking blocked: no consent")
      return
    }

    // Track pageview
    const trackPageView = async () => {
      try {
        await fetch("/api/log-pageview", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            siteId: site.id,
            path: window.location.pathname,
            referrer: document.referrer || null,
          }),
        })
        hasTracked.current = true
        console.log("[v0] Pageview tracked for", site.id)
      } catch (error) {
        console.error("[v0] Failed to track pageview:", error)
      }
    }

    trackPageView()
  }, [site.id])

  return null
}
