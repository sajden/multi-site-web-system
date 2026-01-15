import type { SiteConfig } from "@/src/sites/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

interface ContactProps {
  site: SiteConfig
}

export function Contact({ site }: ContactProps) {
  const { contact, brand } = site

  return (
    <section id="kontakt" className="py-20 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <span className="text-sm font-semibold" style={{ color: brand.accentColor }}>
                Kontakt
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Redo att komma igång?</h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Kontakta oss idag så berättar vi mer om hur vi kan skapa den perfekta hemsidan för ditt företag. Snabb
              respons garanterad!
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Kontaktinformation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Har du frågor eller vill du komma igång? Vi svarar vanligtvis inom 24 timmar på vardagar.
                </p>

                <div className="space-y-4 pt-2">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="p-2 rounded-lg" style={{ backgroundColor: `${brand.accentColor}15` }}>
                      <Mail className="h-5 w-5" style={{ color: brand.accentColor }} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">E-post</div>
                      <div className="font-medium group-hover:underline">{contact.email}</div>
                    </div>
                  </a>

                  {contact.phone && (
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors group"
                    >
                      <div className="p-2 rounded-lg" style={{ backgroundColor: `${brand.accentColor}15` }}>
                        <Phone className="h-5 w-5" style={{ color: brand.accentColor }} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Telefon</div>
                        <div className="font-medium group-hover:underline">{contact.phone}</div>
                      </div>
                    </a>
                  )}

                  {contact.address && (
                    <div className="flex items-center gap-4 p-3 rounded-lg">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: `${brand.accentColor}15` }}>
                        <MapPin className="h-5 w-5" style={{ color: brand.accentColor }} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Plats</div>
                        <div className="font-medium">{contact.address}</div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-4 p-3 rounded-lg">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: `${brand.accentColor}15` }}>
                      <Clock className="h-5 w-5" style={{ color: brand.accentColor }} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Svarstid</div>
                      <div className="font-medium">Inom 24 timmar</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2" style={{ borderColor: `${brand.accentColor}30` }}>
              <CardHeader>
                <CardTitle className="text-2xl">Få en kostnadsfri konsultation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Vi hjälper dig att komma igång med din nya hemsida. Berätta om ditt företag så tar vi fram ett förslag
                  anpassat efter dina behov.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: brand.accentColor }}
                    >
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Kontakta oss</div>
                      <div className="text-sm text-muted-foreground">Maila oss med din förfrågan</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: brand.accentColor }}
                    >
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Kostnadsfri konsultation</div>
                      <div className="text-sm text-muted-foreground">Vi diskuterar dina behov och önskemål</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: brand.accentColor }}
                    >
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Färdig på 5 dagar</div>
                      <div className="text-sm text-muted-foreground">
                        Din hemsida är live och redo att ta emot kunder
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    size="lg"
                    className="w-full text-white"
                    style={{ backgroundColor: brand.accentColor }}
                    asChild
                  >
                    <a href={`mailto:${contact.email}`}>Skicka e-post nu</a>
                  </Button>
                  <p className="text-center text-xs text-muted-foreground mt-3">
                    12 månaders bindningstid
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
