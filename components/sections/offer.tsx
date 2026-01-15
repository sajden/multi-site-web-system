import type { SiteConfig } from "@/src/sites/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface OfferProps {
  site: SiteConfig
}

export function Offer({ site }: OfferProps) {
  const { offer, brand } = site

  return (
    <section id="tjanst" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Professionell hemsida till ett pris som alla har råd med
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Tack vare AI-driven design kan vi erbjuda samma kvalitet som dyra webbbyråer – fast för 599 kr/mån
              istället för 30 000+ kr.
            </p>
          </div>

          <Card className="shadow-xl border-2">
            <CardHeader className="text-center pb-8">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
                  <span className="text-sm font-semibold" style={{ color: brand.accentColor }}>
                    Spara 80% mot vanliga webbbyråer
                  </span>
                </div>
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold mb-2">Komplett hemsida för ditt företag</CardTitle>
              <div className="mt-6">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl md:text-6xl font-bold" style={{ color: brand.accentColor }}>
                    {offer.priceText.replace(" kr/månad", "")}
                  </span>
                  <span className="text-2xl text-muted-foreground">/månad</span>
                </div>
                {offer.binding && <p className="mt-3 text-sm font-medium text-muted-foreground">{offer.binding}</p>}
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {offer.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3 p-2">
                    <Check className="h-6 w-6 mt-0.5 flex-shrink-0" style={{ color: brand.accentColor }} />
                    <span className="text-foreground text-base">{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-border">
                <Button size="lg" className="w-full text-white" style={{ backgroundColor: brand.accentColor }} asChild>
                  <a href="#kontakt">Kom igång idag</a>
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Ingen uppsättningskostnad • Hosting & SSL ingår • 12 månaders bindningstid
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
