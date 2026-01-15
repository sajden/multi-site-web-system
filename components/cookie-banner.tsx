"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { setConsent, hasConsent } from "@/lib/consent"
import type { SiteConfig } from "@/src/sites/types"

interface CookieBannerProps {
  site: SiteConfig
  onConsentChange?: (accepted: boolean) => void
}

export function CookieBanner({ site, onConsentChange }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already given consent
    if (!hasConsent()) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    setConsent("accepted")
    setIsVisible(false)
    onConsentChange?.(true)
  }

  const handleDeny = () => {
    setConsent("denied")
    setIsVisible(false)
    onConsentChange?.(false)
  }

  const handleReopen = () => {
    setIsVisible(true)
  }

  // Expose reopen function globally so Footer can trigger it
  useEffect(() => {
    if (typeof window !== "undefined") {
      ;(window as any).__reopenCookieBanner = handleReopen
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6">
      <Card className="mx-auto max-w-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">Vi värnar om din integritet</CardTitle>
          <CardDescription className="text-sm">
            Vi använder cookies för att förbättra din upplevelse och analysera trafik på vår webbplats. Välj om du vill
            acceptera eller avvisa cookies.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button variant="outline" onClick={handleDeny} className="sm:order-1 bg-transparent">
            Avvisa
          </Button>
          <Button
            onClick={handleAccept}
            style={{ backgroundColor: site.brand.accentColor }}
            className="text-white sm:order-2"
          >
            Acceptera
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
