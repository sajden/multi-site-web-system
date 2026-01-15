import { generalSEOContent } from "@/src/sites/shared/generalContent"
import type { SiteConfig } from "@/src/sites/types"
import { Button } from "@/components/ui/button"

interface GeneralSEOContentProps {
  site: SiteConfig
}

/**
 * Gemensam SEO-sektion som renderas på alla mikrosajter.
 * Fokuserar på digitalt skyltfönster, synlighet på Google och fast pris.
 */
export function GeneralSEOContent({ site }: GeneralSEOContentProps) {
  const { brand } = site

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Title & Intro */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{generalSEOContent.title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {generalSEOContent.intro}
          </p>
        </div>

        {/* Three column sections with keywords */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {generalSEOContent.sections.map((section, idx) => (
            <div key={idx} className="bg-background p-6 rounded-lg border shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3" style={{ color: brand.accentColor }}>
                {section.heading}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Benefits grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Fördelar med vår webdesign</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generalSEOContent.benefits.map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: `${brand.accentColor}20` }}
                >
                  <svg
                    className="w-6 h-6"
                    style={{ color: brand.accentColor }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ with keywords */}
        <div className="max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Vanliga frågor om företagshemsidor</h3>
          <div className="space-y-4">
            {generalSEOContent.faq.map((item, idx) => (
              <details
                key={idx}
                className="bg-background p-5 rounded-lg border group hover:border-primary/50 transition"
              >
                <summary className="font-semibold cursor-pointer flex justify-between items-center">
                  {item.question}
                  <svg
                    className="w-5 h-5 transform group-open:rotate-180 transition"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-background p-8 rounded-lg border">
          <h3 className="text-2xl font-bold mb-3">{generalSEOContent.cta.heading}</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{generalSEOContent.cta.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" style={{ backgroundColor: brand.accentColor }} className="text-white" asChild>
              <a href="#kontakt">{generalSEOContent.cta.primaryButton}</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#tjanst">{generalSEOContent.cta.secondaryButton}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
