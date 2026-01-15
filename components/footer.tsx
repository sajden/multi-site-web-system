"use client"

import Link from "next/link"

export function Footer() {
  const handleCookieClick = () => {
    if (typeof window !== "undefined") {
      ;(window as any).__reopenCookieBanner?.()
    }
  }

  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">We Build IT</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-driven webbdesign för svenska företag. Professionella hemsidor till en bråkdel av traditionella priser.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Länkar</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="https://webuildit.se/policy" className="hover:text-foreground transition-colors">
                  Integritetspolicy
                </Link>
              </li>
              <li>
                <button onClick={handleCookieClick} className="hover:text-foreground transition-colors text-left">
                  Cookieinställningar
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} We Build IT. Alla rättigheter förbehållna.
              </p>
            </div>
            <div className="text-sm text-muted-foreground">Byggd med AI-teknologi ⚡</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
