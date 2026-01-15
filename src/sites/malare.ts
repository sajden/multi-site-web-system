import type { SiteConfig } from "./types"
import { standardOfferBullets, standardFeatures, standardFAQ } from "./shared/standardContent"

export const malareConfig: SiteConfig = {
  id: "starta-malerifirma",
  domain: "starta-malerifirma.se",
  type: "hemsida",
  lang: "sv",

  brand: {
    label: "Starta Målerifirma",
    accentColor: "#F59E0B",
    iconKey: "paint-brush",
  },

  metadata: {
    title: "Starta Målerifirma | Hemsida + SEO från 599 kr/mån",
    description:
      "Vill du starta målerifirma? Vi fixar hemsida, Google Mitt Företag och lokal SEO för att öka chansen att synas när kunder söker \"målerifirma [stad]\". Från 599 kr/mån.",
  },

  hero: {
    heading: "Starta Målerifirma? Syns Online från Dag 1",
    subheading:
      "När du startar en målerifirma behöver du synas direkt. Vi bygger hemsida och lokal SEO för att öka chansen att synas när kunder söker \"målerifirma [stad]\" eller \"målare nära mig\". Färdig på 5 dagar för 599 kr/mån.",
    primaryCta: "Maila oss",
    heroImageKey: "painting-hero",
    heroImageAlt: "Målare som målar vägg inomhus",
  },

  offer: {
    priceText: "599 kr/månad",
    priceValue: 599,
    binding: "12 månaders bindningstid",
    bullets: standardOfferBullets,
  },

  whyWebsite: {
    title: "Ditt digitala skyltfönster för målerifirmor",
    text: "När du startar målerifirma säljer du med bilder. Din hemsida är ett digitalt showroom som visar före/efter-projekt, färgval och referenser. Syns du inte på Google missar du uppdrag.",
    points: [
      "Visa projektbilder som bygger förtroende och säljer dina tjänster",
      "Öka synligheten lokalt när kunder söker \"målerifirma + stad\" eller \"måla om\"",
      "Tydlig information om ROT-avdrag och garanti",
      "Få fler offertförfrågningar utan att lägga tid på administration",
    ],
  },

  features: [
    ...standardFeatures,
    {
      title: "Portfolio som visar kvalitet",
      body: "Före/efter-bilder gör det enkelt att välja dig. Visa invändig målning, fasadmålning och tapetsering.",
    },
    {
      title: "Lokal synlighet på Google",
      body: "Vi optimerar för sökningar som \"målerifirma [stad]\", \"målare\" och \"fasadmålning\" för att öka chansen att synas där kunderna letar.",
    },
    {
      title: "Bygg förtroende med ROT och referenser",
      body: "Tydlig ROT-information och kundomdömen gör att fler väljer din målerifirma.",
    },
  ],

  faq: [
    {
      question: "Hur startar jag en målerifirma?",
      answer:
        "Du behöver F-skatt, försäkring och en tydlig tjänsteprofil. För att få kunder snabbt behöver du också synlighet på Google med en professionell hemsida.",
    },
    {
      question: "Hur syns jag på Google som målerifirma?",
      answer:
        "En SEO-optimerad hemsida och Google Mitt Företag ökar chansen att synas när kunder söker \"målerifirma [stad]\" och relaterade tjänster.",
    },
    {
      question: "Vilka tjänster ska jag lista på hemsidan?",
      answer:
        "Lista invändig målning, fasadmålning, tapetsering, spackling och specialarbeten. Ju tydligare du är, desto fler uppdrag får du.",
    },
    {
      question: "Hur får jag kunder till min nystartade målerifirma?",
      answer:
        "För att få kunder till din nystartade målerifirma behöver du synas på Google när kunder söker tjänster i din stad. Med en professionell hemsida, Google Mitt Företag och lokal SEO ökar du chansen att bli hittad direkt. Vi hjälper dig att komma igång snabbt så att förfrågningar börjar komma in.",
    },
    {
      question: "Hur får jag fler offertförfrågningar?",
      answer:
        "Med tydliga projektbilder, enkel kontakt och lokal SEO. Vi gör det lätt för kunder att be om offert direkt.",
    },
    {
      question: "Är hemsida viktigt när jag startar målerifirma?",
      answer:
        "Ja, synlighet från dag 1 gör stor skillnad. Kunder googlar målare varje dag och du vill finnas där direkt.",
    },
    ...standardFAQ,
  ],

  contact: {
    email: "info@webuildit.se",
  },

  sections: ["hero", "trustBadges", "whyWebsite", "offer", "features", "faq", "contact"],

  schemaOverrides: {
    "@type": "HousePainter",
  },
}
