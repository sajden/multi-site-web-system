import type { SiteConfig } from "@/src/sites/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FeaturesProps {
  site: SiteConfig
}

export function Features({ site }: FeaturesProps) {
  const { features, brand } = site

  return (
    <section id="varfor" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <span className="text-sm font-semibold" style={{ color: brand.accentColor }}>
                Fördelarna
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Varför välja oss?</h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              AI-teknologi och smart automatisering ger dig professionell kvalitet till en bråkdel av vanliga priser.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${brand.accentColor}15` }}
                  >
                    <div className="w-6 h-6 rounded-full" style={{ backgroundColor: brand.accentColor }} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
