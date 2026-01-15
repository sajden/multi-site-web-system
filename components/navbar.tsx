"use client"

import Link from "next/link"
import { useState } from "react"
import type { SiteConfig } from "@/src/sites/types"
import { Car, Disc3, Flower, Leaf, Menu, Paintbrush, Scissors, Sparkles, Truck, Wrench, X, Zap } from "lucide-react"

interface NavbarProps {
  site: SiteConfig
}

const iconMap = {
  pipe: Wrench,
  sparkles: Sparkles,
  "paint-brush": Paintbrush,
  zap: Zap,
  leaf: Leaf,
  truck: Truck,
  car: Car,
  "disc-3": Disc3,
  scissors: Scissors,
  flower: Flower,
}

export function Navbar({ site }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: "Tjänsten", href: "#tjanst" },
    { label: "Varför oss", href: "#varfor" },
    { label: "Frågor & svar", href: "#faq" },
    { label: "Kontakt", href: "#kontakt" },
  ]

  const Icon = iconMap[site.brand.iconKey as keyof typeof iconMap] || Wrench

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 md:px-6 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Icon className="h-8 w-8" style={{ color: site.brand.accentColor }} />
          <span className="text-lg font-bold">{site.brand.label}</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground relative group"
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full"
                style={{ backgroundColor: site.brand.accentColor }}
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" style={{ color: site.brand.accentColor }} />
          ) : (
            <Menu className="h-6 w-6" style={{ color: site.brand.accentColor }} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-base font-medium text-foreground/70 hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                style={{ borderLeftWidth: "3px", borderLeftColor: "transparent", paddingLeft: "1rem" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderLeftColor = site.brand.accentColor
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderLeftColor = "transparent"
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
