import type { SiteConfig } from "./types"
import { standardOfferBullets, standardFeatures, standardFAQ } from "./shared/standardContent"

export const tradgardsmastareConfig: SiteConfig = {
  id: "starta-tradgardsfirma",
  domain: "starta-tradgardsfirma.se",
  type: "hemsida",
  lang: "sv",

  brand: {
    label: "Starta Trädgårdsfirma",
    accentColor: "#059669",
    iconKey: "leaf",
  },

  metadata: {
    title: "Starta Trädgårdsfirma | Hemsida + SEO från 599 kr/mån",
    description:
      "Vill du starta trädgårdsfirma? Vi fixar hemsida, Google Mitt Företag och lokal SEO för att öka chansen att synas när kunder söker \"trädgårdsfirma [stad]\". Från 599 kr/mån.",
  },

  hero: {
    heading: "Starta Trädgårdsfirma? Syns Online från Dag 1",
    subheading:
      "När du startar en trädgårdsfirma behöver du synas direkt. Vi bygger hemsida och lokal SEO för att öka chansen att synas när kunder söker \"trädgårdsfirma [stad]\" och \"trädgårdsskötsel\". Färdig på 5 dagar för 599 kr/mån.",
    primaryCta: "Maila oss",
    heroImageKey: "gardener-hero",
    heroImageAlt: "Trädgårdsarbete med beskärning och skötsel",
  },

  offer: {
    priceText: "599 kr/månad",
    priceValue: 599,
    binding: "12 månaders bindningstid",
    bullets: standardOfferBullets,
  },

  whyWebsite: {
    title: "Ditt digitala skyltfönster som trädgårdsfirma",
    text: "När du startar trädgårdsfirma vill kunder se att du levererar kvalitet. Din hemsida visar tjänster, säsongsarbete och projektbilder. Syns du inte på Google väljer kunden någon annan.",
    points: [
      "Visa tjänster som gräsklippning, beskärning, plantering och anläggning",
      "Öka synligheten lokalt när kunder söker \"trädgårdsfirma + stad\"",
      "Bygg förtroende med projektbilder och omdömen",
      "Få återkommande kunder med tydliga abonnemang och offertflöde",
    ],
  },

  features: [
    ...standardFeatures,
    {
      title: "Projektbilder som säljer",
      body: "Före/efter-bilder på trädgårdsprojekt gör att kunder direkt ser resultatet och väljer dig.",
    },
    {
      title: "Lokal synlighet på Google",
      body: "Vi optimerar för sökningar som \"trädgårdsfirma [stad]\" och \"trädgårdsskötsel\" för att öka chansen att synas där kunderna letar.",
    },
    {
      title: "Få återkommande kunder",
      body: "Lyft fram säsongsabonnemang och återkommande skötsel så att du bygger stabila intäkter.",
    },
  ],

  faq: [
    {
      question: "Hur startar jag en trädgårdsfirma?",
      answer:
        "Du behöver F-skatt, försäkring och en tydlig tjänsteprofil. För att få kunder snabbt är det viktigt att synas online med en professionell hemsida.",
    },
    {
      question: "Hur syns jag på Google som trädgårdsfirma?",
      answer:
        "En SEO-optimerad hemsida och Google Mitt Företag ökar chansen att synas när kunder söker \"trädgårdsfirma [stad]\" och relaterade tjänster.",
    },
    {
      question: "Vilka trädgårdstjänster ska jag lista på hemsidan?",
      answer:
        "Lista gräsklippning, häckklippning, beskärning, plantering, ogräsrensning och anläggning. Det hjälper dig att ranka för fler relevanta sökningar.",
    },
    {
      question: "Hur får jag kunder till min nystartade trädgårdsfirma?",
      answer:
        "För att få kunder till din nystartade trädgårdsfirma behöver du synas på Google när kunder söker tjänster i din stad. Med en professionell hemsida, Google Mitt Företag och lokal SEO ökar du chansen att bli hittad direkt. Vi hjälper dig att komma igång snabbt så att förfrågningar börjar komma in.",
    },
    {
      question: "Är det lönsamt att starta trädgårdsfirma?",
      answer:
        "Ja, särskilt med återkommande uppdrag. En bra hemsida hjälper dig att få fler förfrågningar och bygga långsiktiga kundrelationer.",
    },
    {
      question: "Är hemsida viktigt när jag startar trädgårdsfirma?",
      answer:
        "Ja, synlighet från dag 1 gör stor skillnad. Kunder googlar trädgårdstjänster varje dag och du vill finnas där direkt.",
    },
    ...standardFAQ,
  ],

  contact: {
    email: "info@webuildit.se",
  },

  sections: ["hero", "trustBadges", "whyWebsite", "offer", "features", "faq", "contact"],

  schemaOverrides: {
    "@type": "LandscapingBusiness",
  },
}
