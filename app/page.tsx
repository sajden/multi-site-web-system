import type React from "react"
import { getCurrentSite } from "@/src/lib/siteResolver"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { PageViewTracker } from "@/components/page-view-tracker"
import { Hero } from "@/components/sections/hero"
import { TrustBadges } from "@/components/sections/trust-badges"
import { Offer } from "@/components/sections/offer"
import { Features } from "@/components/sections/features"
import { WhyWebsite } from "@/components/sections/why-website"
import { Faq } from "@/components/sections/faq"
import { Contact } from "@/components/sections/contact"
import { SeoContent } from "@/components/sections/seo-content"
import { GeneralSEOContent } from "@/components/sections/general-seo-content"
import type { SectionType } from "@/src/sites/types"

// Section component mapping with type safety
const SECTION_COMPONENTS: Record<SectionType, React.ComponentType<{ site: any }>> = {
  hero: Hero,
  trustBadges: TrustBadges,
  offer: Offer,
  features: Features,
  whyWebsite: WhyWebsite,
  faq: Faq,
  contact: Contact,
  seoContent: SeoContent,
  generalSEO: GeneralSEOContent,
}

export default async function Page() {
  const site = await getCurrentSite()

  return (
    <>
      <Navbar site={site} />

      <main>
        {site.sections.map((sectionKey) => {
          const SectionComponent = SECTION_COMPONENTS[sectionKey]
          return <SectionComponent key={sectionKey} site={site} />
        })}
      </main>

      <Footer />

      <CookieBanner site={site} />
      <PageViewTracker site={site} />
    </>
  )
}
