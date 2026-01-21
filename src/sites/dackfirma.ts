import type { SiteConfig } from "./types"
import { standardOfferBullets, standardFeatures, standardFAQ } from "./shared/standardContent"

export const dackfirmaConfig: SiteConfig = {
  id: "starta-dackfirma",
  domain: "www.starta-dackfirma.se",
  type: "hemsida",
  lang: "sv",

  brand: {
    label: "Starta Däckfirma",
    accentColor: "#F97316",
    iconKey: "disc-3",
  },

  metadata: {
    title: "Starta Däckfirma | Hemsida + SEO från 599 kr/mån",
    description:
      "Vill du starta däckfirma? Vi fixar hemsida, Google Mitt Företag och lokal SEO för att öka chansen att synas när kunder söker \"däckfirma [stad]\". Från 599 kr/mån.",
  },

  hero: {
    heading: "Starta Däckfirma? Syns Online från Dag 1",
    subheading:
      "När du startar en däckfirma behöver du synas direkt. Vi bygger hemsida och lokal SEO för att öka chansen att synas när kunder söker \"däckfirma [stad]\" och \"däckskifte\". Färdig på 5 dagar för 599 kr/mån.",
    primaryCta: "Maila oss",
    heroImageKey: "tire-hero",
    heroImageAlt: "Däckservice med däckskifte och balansering",
  },

  offer: {
    priceText: "599 kr/månad",
    priceValue: 599,
    binding: "12 månaders bindningstid",
    bullets: standardOfferBullets,
  },

  whyWebsite: {
    title: "Ditt digitala skyltfönster som däckfirma",
    text: "När du startar däckfirma vill kunder kunna boka snabbt, särskilt inför säsong. Din hemsida visar tjänster som däckskifte, däckhotell och balansering. Syns du inte på Google missar du kunder.",
    points: [
      "Öka synligheten inför högsäsong när kunder söker \"däckskifte + stad\"",
      "Visa tjänster som däckhotell, balansering och däckförvaring",
      "Bygg förtroende med omdömen och tydlig process",
      "Få bokningar via enkel kontakt och tydliga CTA:er",
    ],
  },

  features: [
    ...standardFeatures,
    {
      title: "Öka synligheten när kunder söker däckfirma + stad",
      body: "Vi optimerar för lokala sökningar för att öka chansen att synas när kunder letar efter däckskifte och däckservice.",
    },
    {
      title: "Tydliga tjänster inför säsong",
      body: "Visa däckskifte, däckhotell och däckförvaring så att kunder snabbt förstår vad du erbjuder.",
    },
    {
      title: "Fler bokningar med enkel kontakt",
      body: "Kontaktformulär och tydliga tider gör att kunder kan boka direkt.",
    },
  ],

  faq: [
    {
      question: "Hur startar jag en däckfirma?",
      answer:
        "Du behöver F-skatt, utrustning och en tydlig tjänsteprofil. För att få kunder snabbt är det viktigt att synas online med en professionell hemsida.",
    },
    {
      question: "Hur syns jag på Google som däckfirma?",
      answer:
        "En SEO-optimerad hemsida och Google Mitt Företag ökar chansen att synas när kunder söker \"däckfirma [stad]\" och \"däckskifte\".",
    },
    {
      question: "Vilka tjänster ska jag lista på hemsidan?",
      answer:
        "Lista däckskifte, balansering, däckhotell, däckförvaring och nya däck. Det hjälper dig att ranka för fler relevanta sökningar.",
    },
    {
      question: "Hur får jag kunder inför säsong?",
      answer:
        "Genom att synas på Google och ha tydliga tjänster och kontaktvägar. Vi hjälper dig att vara synlig när efterfrågan är som störst.",
    },
    {
      question: "Hur får jag kunder till min nystartade däckfirma?",
      answer:
        "För att få kunder till din nystartade däckfirma behöver du synas på Google när kunder söker tjänster i din stad. Med en professionell hemsida, Google Mitt Företag och lokal SEO ökar du chansen att bli hittad direkt. Vi hjälper dig att komma igång snabbt så att förfrågningar börjar komma in.",
    },
    {
      question: "Är hemsida viktigt när jag startar däckfirma?",
      answer:
        "Ja, synlighet från dag 1 gör stor skillnad, särskilt under högsäsong.",
    },
    ...standardFAQ,
  ],

  contact: {
    email: "info@webuildit.se",
  },

  sections: ["hero", "trustBadges", "whyWebsite", "offer", "features", "faq", "contact"],

  schemaOverrides: {
    "@type": "AutomotiveBusiness",
  },
}
