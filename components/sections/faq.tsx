import type { SiteConfig } from "@/src/sites/types"

interface FaqProps {
  site: SiteConfig
}

export function Faq({ site }: FaqProps) {
  const { faq, brand } = site

  return (
    <section id="faq" className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <span className="text-sm font-semibold" style={{ color: brand.accentColor }}>
                Vanliga frågor
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Frågor & svar</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Har du fler frågor? Tveka inte att kontakta oss!
            </p>
          </div>

          <div className="space-y-4">
            {faq.map((item, index) => (
              <details
                key={index}
                className="group rounded-xl border-2 bg-card p-6 hover:shadow-md transition-shadow [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-semibold text-lg">
                  <span className="text-pretty">{item.question}</span>
                  <span className="transition group-open:rotate-180 flex-shrink-0" style={{ color: brand.accentColor }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
