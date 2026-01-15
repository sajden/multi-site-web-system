import type { SiteConfig } from "./types"
import { standardOfferBullets, standardFeatures, standardFAQ } from "./shared/standardContent"

export const bilverkstadConfig: SiteConfig = {
  id: "starta-bilverkstad",
  domain: "starta-bilverkstad.se",
  type: "hemsida",
  lang: "sv",

  brand: {
    label: "Starta Bilverkstad",
    accentColor: "#1D4ED8",
    iconKey: "car",
  },

  metadata: {
    title: "Starta Bilverkstad | Hemsida + SEO från 599 kr/mån",
    description:
      "Vill du starta bilverkstad? Vi fixar hemsida, Google Mitt Företag och lokal SEO för att öka chansen att synas när kunder söker \"bilverkstad [stad]\". Från 599 kr/mån.",
  },

  hero: {
    heading: "Starta Bilverkstad? Syns Online från Dag 1",
    subheading:
      "När du startar en bilverkstad behöver du synas direkt. Vi bygger hemsida och lokal SEO för att öka chansen att synas när kunder söker \"bilverkstad [stad]\" och \"bilservice\". Färdig på 5 dagar för 599 kr/mån.",
    primaryCta: "Maila oss",
    heroImageKey: "auto-repair-hero",
    heroImageAlt: "Bilverkstad med service och reparationer",
  },

  offer: {
    priceText: "599 kr/månad",
    priceValue: 599,
    binding: "12 månaders bindningstid",
    bullets: standardOfferBullets,
  },

  whyWebsite: {
    title: "Ditt digitala skyltfönster som bilverkstad",
    text: "När du startar bilverkstad behöver kunder kunna hitta dig direkt. Din hemsida visar tjänster, garantier och omdömen. Syns du inte på Google väljer kunden en annan verkstad.",
    points: [
      "Visa tjänster som service, felsökning, bromsbyte och AC",
      "Öka synligheten lokalt när kunder söker \"bilverkstad + stad\"",
      "Bygg förtroende med garantier, omdömen och certifieringar",
      "Få återkommande kunder med tydlig kontakt och påminnelser",
    ],
  },

  features: [
    ...standardFeatures,
    {
      title: "Öka synligheten när kunder söker bilverkstad + stad",
      body: "Vi optimerar för sökningar som \"bilverkstad [stad]\" och \"bilservice\" så att du hamnar högt upp i Google.",
    },
    {
      title: "Visa service och garantier",
      body: "Tydlig info om serviceintervall, garantier och erbjudanden gör det lättare för kunder att välja dig.",
    },
    {
      title: "Få återkommande kunder",
      body: "En proffsig hemsida gör att kunder kommer tillbaka för service, däckskifte och reparationer.",
    },
  ],

  faq: [
    {
      question: "Hur startar jag en bilverkstad?",
      answer:
        "Du behöver F-skatt, rätt utrustning och försäkring. För att få kunder snabbt är det viktigt att synas online med en professionell hemsida.",
    },
    {
      question: "Hur syns jag på Google som bilverkstad?",
      answer:
        "En SEO-optimerad hemsida och Google Mitt Företag ökar chansen att synas när kunder söker \"bilverkstad [stad]\" och \"bilservice\".",
    },
    {
      question: "Vilka tjänster ska jag lista på hemsidan?",
      answer:
        "Lista service, felsökning, bromsbyte, däckskifte, AC-service och reparationer. Det hjälper dig att ranka för fler relevanta sökningar.",
    },
    {
      question: "Hur får jag kunder till min nystartade bilverkstad?",
      answer:
        "För att få kunder till din nystartade bilverkstad behöver du synas på Google när kunder söker tjänster i din stad. Med en professionell hemsida, Google Mitt Företag och lokal SEO ökar du chansen att bli hittad direkt. Vi hjälper dig att komma igång snabbt så att förfrågningar börjar komma in.",
    },
    {
      question: "Hur får jag återkommande kunder?",
      answer:
        "Genom tydlig information om serviceintervall och bra upplevelse. En bra hemsida gör det lätt att boka och komma tillbaka.",
    },
    {
      question: "Är det lönsamt att starta bilverkstad?",
      answer:
        "Ja, särskilt med återkommande service och lojala kunder. Synlighet online hjälper dig att fylla kalendern.",
    },
    ...standardFAQ,
  ],

  contact: {
    email: "info@webuildit.se",
  },

  sections: ["hero", "trustBadges", "whyWebsite", "offer", "features", "faq", "contact"],

  schemaOverrides: {
    "@type": "AutoRepair",
  },
}
