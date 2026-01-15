import type { SiteConfig } from "./types"
import { standardOfferBullets, standardFeatures, standardFAQ } from "./shared/standardContent"

export const elektrikerConfig: SiteConfig = {
  id: "starta-elfirma",
  domain: "starta-elfirma.se",
  type: "hemsida",
  lang: "sv",

  brand: {
    label: "Starta Elfirma",
    accentColor: "#EAB308",
    iconKey: "zap",
  },

  metadata: {
    title: "Starta Elfirma | Hemsida + SEO från 599 kr/mån",
    description:
      "Vill du starta elfirma? Vi fixar hemsida, Google Mitt Företag och lokal SEO för att öka chansen att synas när kunder söker \"elfirma [stad]\". Från 599 kr/mån.",
  },

  hero: {
    heading: "Starta Elfirma? Syns Online från Dag 1",
    subheading:
      "När du startar en elfirma behöver du synas direkt. Vi bygger hemsida och lokal SEO för att öka chansen att synas när kunder söker \"elfirma [stad]\" eller \"elektriker nära mig\". Färdig på 5 dagar för 599 kr/mån.",
    primaryCta: "Maila oss",
    heroImageKey: "electrician-hero",
    heroImageAlt: "Elektriker som installerar el och belysning",
  },

  offer: {
    priceText: "599 kr/månad",
    priceValue: 599,
    binding: "12 månaders bindningstid",
    bullets: standardOfferBullets,
  },

  whyWebsite: {
    title: "Ditt digitala skyltfönster som elfirma",
    text: "När du startar elfirma måste kunderna känna sig trygga. Din hemsida visar auktorisation, försäkringar och tjänster tydligt. Syns du inte på Google väljer kunden någon som gör det.",
    points: [
      "Visa auktorisation, certifieringar och ROT-avdrag på ett trovärdigt sätt",
      "Öka synligheten vid lokala sökningar som \"elfirma [stad]\" och \"elektriker nära mig\"",
      "Lyft fram tjänster som elinstallation, felsökning och laddboxar",
      "Få fler förfrågningar utan att missa kunder",
    ],
  },

  features: [
    ...standardFeatures,
    {
      title: "Lokal synlighet på Google",
      body: "SEO-optimerad för lokala sökningar så att kunder hittar dig när de söker elektriker eller elfirma i din stad.",
    },
    {
      title: "Visa auktorisation och trygghet",
      body: "Vi lyfter fram behörighet, försäkring och referenser så att du känns som ett säkert val för kunden.",
    },
    {
      title: "Fler eluppdrag med tydlig kontakt",
      body: "Enkla kontaktvägar och tydliga tjänstebeskrivningar gör att kunder bokar eller ber om offert direkt.",
    },
  ],

  faq: [
    {
      question: "Hur startar jag en elfirma?",
      answer:
        "Du behöver rätt behörighet, F-skatt och försäkring. För att få kunder snabbt krävs också synlighet online och en hemsida som bygger förtroende.",
    },
    {
      question: "Hur syns jag på Google som elfirma?",
      answer:
        "En SEO-optimerad hemsida och Google Mitt Företag ökar chansen att synas när kunder söker \"elfirma [stad]\" och \"elektriker nära mig\".",
    },
    {
      question: "Vilka eltjänster ska jag visa på hemsidan?",
      answer:
        "Lista elinstallationer, felsökning, elcentraler, belysning, laddboxar och akuta uppdrag. Det hjälper dig att ranka för fler relevanta sökningar.",
    },
    {
      question: "Hur får jag kunder till min nystartade elfirma?",
      answer:
        "För att få kunder till din nystartade elfirma behöver du synas på Google när kunder söker tjänster i din stad. Med en professionell hemsida, Google Mitt Företag och lokal SEO ökar du chansen att bli hittad direkt. Vi hjälper dig att komma igång snabbt så att förfrågningar börjar komma in.",
    },
    {
      question: "Hur får jag fler kunder lokalt?",
      answer:
        "Med lokal SEO, tydliga tjänstebeskrivningar och snabb kontakt. Vi optimerar sidan för lokala sökningar för att öka chansen att synas när kunder behöver hjälp.",
    },
    {
      question: "Är hemsida viktigt för en nystartad elfirma?",
      answer:
        "Ja, synlighet från dag 1 gör stor skillnad. Kunder googlar elhjälp dagligen och du vill finnas där direkt.",
    },
    ...standardFAQ,
  ],

  contact: {
    email: "info@webuildit.se",
  },

  sections: ["hero", "trustBadges", "whyWebsite", "offer", "features", "faq", "contact"],

  schemaOverrides: {
    "@type": "Electrician",
  },
}
