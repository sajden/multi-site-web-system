import { CheckCircle2, MonitorSmartphone, Search, ShieldCheck, MousePointerClick } from "lucide-react"
import type { SiteConfig } from "@/src/sites/types"
import { SafeImage } from "@/components/safe-image"

export function WhyWebsite({ site }: { site: SiteConfig }) {
  if (!site.whyWebsite) return null

  const icons = [MonitorSmartphone, Search, ShieldCheck, MousePointerClick]

  return (
    <section id="whyWebsite" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
                {site.whyWebsite.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{site.whyWebsite.text}</p>
            </div>

            <div className="grid gap-6">
              {site.whyWebsite.points.map((point, index) => {
                const Icon = icons[index % icons.length]
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-full flex-shrink-0" style={{ backgroundColor: `${site.brand.accentColor}20` }}>
                      <Icon className="w-5 h-5" style={{ color: site.brand.accentColor }} />
                    </div>
                    <div>
                      <p className="font-medium text-lg leading-relaxed">{point}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative lg:order-last">
            <div className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl border bg-background">
              <div className="absolute inset-0 z-10 mix-blend-overlay" style={{ background: `linear-gradient(to bottom right, ${site.brand.accentColor}20, transparent)` }} />
              <SafeImage
                src="/images/digital-storefront.jpg"
                alt="Digitalt skyltfönster - professionell hemsida"
                fill
                className="object-cover"
                priority={false}
              />

              {/* Floating badge */}
              <div className="absolute bottom-8 left-8 right-8 z-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-6 rounded-xl shadow-lg border">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${site.brand.accentColor}20` }}>
                    <CheckCircle2 className="h-6 w-6" style={{ color: site.brand.accentColor }} />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Öppet dygnet runt</p>
                    <p className="text-sm text-muted-foreground">Missa aldrig en potentiell kund</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full blur-3xl -z-10" style={{ backgroundColor: `${site.brand.accentColor}10` }} />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full blur-3xl -z-10" style={{ backgroundColor: `${site.brand.accentColor}10` }} />
          </div>
        </div>
      </div>
    </section>
  )
}
