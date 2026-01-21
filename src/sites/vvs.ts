import type { SiteConfig } from "./types"
import { standardOfferBullets, standardFeatures, standardFAQ } from "./shared/standardContent"

export const vvsConfig: SiteConfig = {
  id: "starta-vvs",
  domain: "www.starta-vvs.se",
  type: "hemsida",
  lang: "sv",

  brand: {
    label: "Starta VVS-Företag",
    accentColor: "#0EA5E9",
    iconKey: "pipe",
  },

  metadata: {
    title: "Starta VVS-Företag | Hemsida + SEO från 599 kr/mån",
    description:
      "Vill du starta VVS-företag? Vi fixar hemsida, Google Mitt Företag och lokal SEO för att öka chansen att synas när kunder söker \"VVS [stad]\". Från 599 kr/mån.",
  },

  hero: {
    heading: "Starta VVS-Företag? Syns Online från Dag 1",
    subheading:
      "När du startar ett VVS-företag behöver du synas direkt. Vi bygger hemsida och lokal SEO för att öka chansen att synas när kunder söker \"VVS Stockholm\" eller \"akut rörmokare\". Färdig på 5 dagar för 599 kr/mån.",
    primaryCta: "Maila oss",
    heroImageKey: "vvs-hero",
    heroImageAlt: "VVS-montör som installerar rör och vattenledningar",
  },

  offer: {
    priceText: "599 kr/månad",
    priceValue: 599,
    binding: "12 månaders bindningstid",
    bullets: standardOfferBullets,
  },

  whyWebsite: {
    title: "Ditt digitala skyltfönster för VVS-företag",
    text: "När du startar VVS-företag behöver kunderna kunna hitta dig direkt. Din hemsida är öppen dygnet runt och visar certifieringar, tjänster och ROT-information. Syns du inte på Google går jobbet till konkurrenten.",
    points: [
      "Öka synligheten vid akuta sökningar som \"rörmokare nära mig\" och \"VVS jour\"",
      "Bygg förtroende med certifieringar, ROT-avdrag och referenser",
      "Visa upp badrumsrenoveringar och VVS-projekt med bilder",
      "Få offertförfrågningar medan du är ute på jobb",
    ],
  },

  features: [
    ...standardFeatures,
    {
      title: "Öka synligheten när kunder söker VVS + stad",
      body: "Vi optimerar för lokala sökningar som \"VVS Stockholm\" och \"rörmokare [stad]\" så att du hamnar högt upp i Google.",
    },
    {
      title: "Tydlig information om certifieringar och ROT",
      body: "Kunder väljer den VVS-firma som känns trygg. Vi lyfter fram certifieringar, försäkring och ROT-avdrag tydligt.",
    },
    {
      title: "Fler offerter med enkel kontakt",
      body: "Tydliga CTA:er och formulär gör att kunder enkelt kan beskriva sitt VVS-problem och be om offert.",
    },
  ],

  faq: [
    {
      question: "Hur startar man ett VVS-företag?",
      answer:
        "Du behöver F-skatt, försäkring och rätt kompetens. För att få kunder snabbt krävs också en hemsida och synlighet på Google så att du hittas när någon söker VVS-hjälp i din stad.",
    },
    {
      question: "Hur syns jag på Google som VVS-företag?",
      answer:
        "En SEO-optimerad hemsida + Google Mitt Företag är grunden. Vi hjälper dig att öka chansen att synas när kunder söker \"VVS [stad]\", \"rörmokare\" och relaterade tjänster.",
    },
    {
      question: "Vilka VVS-tjänster ska jag lista på hemsidan?",
      answer:
        "Visa allt du erbjuder: rördragning, badrumsrenovering, avloppsstopp, värmepumpar och jourtjänster. Det hjälper dig att ranka på fler relevanta sökningar.",
    },
    {
      question: "Hur får jag kunder till mitt nystartade VVS-företag?",
      answer:
        "För att få kunder till ditt nystartade VVS-företag behöver du synas på Google när kunder söker tjänster i din stad. Med en professionell hemsida, Google Mitt Företag och lokal SEO ökar du chansen att bli hittad direkt. Vi hjälper dig att komma igång snabbt så att förfrågningar börjar komma in.",
    },
    {
      question: "Hur får jag fler offertförfrågningar?",
      answer:
        "Med tydliga tjänstesidor, snabb kontakt och lokal SEO. Vi gör det lätt för kunder att beskriva sitt problem och be om offert direkt.",
    },
    {
      question: "Är hemsida viktigt när jag startar VVS-företag?",
      answer:
        "Ja, synlighet från dag 1 gör stor skillnad. Kunder googlar VVS-tjänster varje dag och du vill finnas med i resultaten direkt.",
    },
    ...standardFAQ,
  ],

  contact: {
    email: "info@webuildit.se",
  },

  sections: ["hero", "trustBadges", "whyWebsite", "offer", "features", "faq", "contact"],

  schemaOverrides: {
    "@type": "Plumber",
  },
}
