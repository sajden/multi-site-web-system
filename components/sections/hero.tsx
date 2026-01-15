import type { SiteConfig } from "@/src/sites/types"
import { Button } from "@/components/ui/button"
import { SafeImage } from "@/components/safe-image"
import { getHeroImageUrl } from "@/src/lib/siteResolver"

interface HeroProps {
  site: SiteConfig
}

export function Hero({ site }: HeroProps) {
  const { hero, brand, metadata } = site

  return (
    <section className="relative overflow-hidden min-h-[90vh]">
      {/* Background Image with Overlay */}
      {hero.heroImageKey && (
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={getHeroImageUrl(hero.heroImageKey)}
            alt={hero.heroImageAlt || metadata.title}
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 50%, ${brand.accentColor}15 100%)`
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-7xl py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur border border-border w-fit mb-8">
            <span className="text-xs font-medium">✨ AI-driven design</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance leading-tight mb-6">
            {hero.heading}
          </h1>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed mb-8">{hero.subheading}</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" style={{ backgroundColor: brand.accentColor }} className="text-white" asChild>
              <a href="#kontakt">{hero.primaryCta}</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/80 backdrop-blur" asChild>
              <a href="#tjanst">Se priser</a>
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: brand.accentColor }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Färdig på 5 dagar</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                style={{ color: brand.accentColor }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span>Säker & snabb</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                style={{ color: brand.accentColor }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Transparent prissättning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
