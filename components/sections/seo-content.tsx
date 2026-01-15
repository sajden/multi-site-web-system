import type { SiteConfig } from "@/src/sites/types"

export function SeoContent({ site }: { site: SiteConfig }) {
  if (!site.seoContent) return null

  return (
    <section id="seoContent" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="space-y-16">
          {site.seoContent.sections.map((section, index) => (
            <article key={index} className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-balance">{section.heading}</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                {section.content.split("\n\n").map((paragraph, pIndex) => (
                  <p key={pIndex} className="mb-4 whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
