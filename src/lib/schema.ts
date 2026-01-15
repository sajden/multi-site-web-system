import type { SiteConfig } from "@/src/sites/types"

/**
 * Generates JSON-LD schema for a site.
 * Optimized for AI engines (ChatGPT, Perplexity) with specific business types.
 */
export function getSchemaForSite(site: SiteConfig): Record<string, any> {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": site.schemaOverrides?.["@type"] || "Service",
    name: site.metadata.title,
    description: site.metadata.description,
    provider: {
      "@type": "Organization",
      name: "We Build IT",
      url: "https://webuildit.se",
    },
    areaServed: {
      "@type": "Country",
      name: "Sweden",
      alternateName: "SE",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://${site.domain}`,
    },
  }

  // Add contact information if available
  if (site.contact) {
    baseSchema["contactPoint"] = {
      "@type": "ContactPoint",
      email: site.contact.email,
      telephone: site.contact.phone,
      contactType: "customer service",
      availableLanguage: "Swedish",
    }
  }

  // Add price information if available
  if (site.offer.priceValue) {
    baseSchema["offers"] = {
      "@type": "Offer",
      priceCurrency: "SEK",
      price: site.offer.priceValue.toString(),
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: site.offer.priceValue,
        priceCurrency: "SEK",
        unitText: "per månad",
      },
      availability: "https://schema.org/InStock",
    }
  }

  // Merge with any schema overrides
  if (site.schemaOverrides) {
    Object.assign(baseSchema, site.schemaOverrides)
  }

  return baseSchema
}
