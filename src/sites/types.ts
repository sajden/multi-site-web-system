// Type definitions for the multi-site system

export type SectionType = "hero" | "trustBadges" | "offer" | "features" | "faq" | "contact" | "whyWebsite" | "seoContent" | "generalSEO"

export type SiteType = "hemsida" | "compliance" | "security" | "ai"

export interface SiteConfig {
  id: string
  domain: string
  type: SiteType
  lang: "sv"

  brand: {
    label: string // Ex: "Starta VVS-Företag"
    accentColor: string // Ex: "#0EA5E9"
    iconKey: string // Ex: "pipe", "sparkles", "car"
  }

  metadata: {
    title: string
    description: string
  }

  hero: {
    heading: string // H1
    subheading: string // 1–2 meningar
    primaryCta: string // "Kontakta oss"
    heroImageKey?: string // Nyckel för branschbild
    heroImageAlt?: string // Alt-text för tillgänglighet och SEO
  }

  offer: {
    priceText: string // "599 kr/månad"
    priceValue?: number // Enables exact structured pricing
    binding?: string // "12 månader"
    bullets: string[] // Vad som ingår
  }

  features: {
    title: string
    body: string
  }[]

  whyWebsite?: {
    title: string
    text: string
    points: string[]
  }

  seoContent?: {
    sections: {
      heading: string
      content: string
    }[]
  }

  faq: {
    question: string
    answer: string
  }[]

  contact: {
    email: string
    phone?: string
    address?: string
  }

  sections: SectionType[] // Ex: ["hero", "offer", "features", "faq", "contact"]

  schemaOverrides?: Record<string, any>

  og?: {
    imageKey?: string
  }
}
