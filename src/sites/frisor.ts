import type { SiteConfig } from "./types"
import { standardOfferBullets, standardFeatures, standardFAQ } from "./shared/standardContent"

export const frisorConfig: SiteConfig = {
  id: "starta-frisor",
  domain: "www.starta-frisor.se",
  type: "hemsida",
  lang: "sv",

  brand: {
    label: "Starta Frisörsalong",
    accentColor: "#EC4899",
    iconKey: "scissors",
  },

  metadata: {
    title: "Starta Frisörsalong | Frisör Hemsida + SEO från 599 kr/mån",
    description:
      "Vill du starta frisörsalong? Vi fixar hemsida för frisörer, Google Mitt Företag och lokal SEO för att öka chansen att synas när kunder söker \"frisör [stad]\". Från 599 kr/mån.",
  },

  hero: {
    heading: "Starta Frisörsalong? Syns Online från Dag 1",
    subheading:
      "När du startar en frisörsalong behöver du synas direkt. Vi bygger hemsida och lokal SEO för att öka chansen att synas när kunder söker \"frisör [stad]\" och \"frisörsalong\". Färdig på 5 dagar för 599 kr/mån.",
    primaryCta: "Maila oss",
    heroImageKey: "hair-salon-hero",
    heroImageAlt: "Frisörsalong med klippning och styling",
  },

  offer: {
    priceText: "599 kr/månad",
    priceValue: 599,
    binding: "12 månaders bindningstid",
    bullets: standardOfferBullets,
  },

  whyWebsite: {
    title: "Ditt digitala skyltfönster som frisörsalong",
    text: "När du startar frisörsalong vill kunder se stil och kvalitet. Din hemsida visar behandlingar, priser och bilder från dina arbeten. Syns du inte på Google väljer kunden en annan frisör.",
    points: [
      "Öka synligheten lokalt när kunder söker \"frisör + stad\"",
      "Visa behandlingar, priser och omdömen tydligt",
      "Bygg förtroende med före/efter-bilder",
      "Få fler bokningar med enkel kontakt",
    ],
  },

  features: [
    ...standardFeatures,
    {
      title: "Öka synligheten när kunder söker frisör + stad",
      body: "Vi optimerar för lokala sökningar för att öka chansen att synas när kunder letar efter frisör eller frisörsalong i din stad.",
    },
    {
      title: "Visa behandlingar och priser",
      body: "Tydliga tjänstelistor gör det enkelt att boka klippning, färgning och styling.",
    },
    {
      title: "Fler bokningar med professionell närvaro",
      body: "En proffsig hemsida gör att kunder väljer dig och återkommer.",
    },
  ],

  faq: [
    {
      question: "Hur startar jag en frisörsalong?",
      answer:
        "Du behöver F-skatt, rätt lokal och en tydlig tjänsteprofil. För att få kunder snabbt behöver du synlighet på Google och en professionell hemsida.",
    },
    {
      question: "Hur syns jag på Google som frisör?",
      answer:
        "En SEO-optimerad hemsida och Google Mitt Företag ökar chansen att synas när kunder söker \"frisör [stad]\" och \"frisörsalong\".",
    },
    {
      question: "Vilka behandlingar ska jag lista på hemsidan?",
      answer:
        "Lista klippning, färgning, styling, balayage, behandlingar och eventuella brudpaket. Det hjälper dig att ranka för fler sökningar.",
    },
    {
      question: "Hur får jag kunder till min nystartade frisörsalong?",
      answer:
        "För att få kunder till din nystartade frisörsalong behöver du synas på Google när kunder söker tjänster i din stad. Med en professionell hemsida, Google Mitt Företag och lokal SEO ökar du chansen att bli hittad direkt. Vi hjälper dig att komma igång snabbt så att förfrågningar börjar komma in.",
    },
    {
      question: "Hur får jag fler bokningar?",
      answer:
        "Med tydliga tjänster, bra bilder och enkel kontakt. Vi gör det enkelt för kunder att boka eller fråga om lediga tider.",
    },
    {
      question: "Är bilder på arbeten viktiga?",
      answer:
        "Ja, bilder är avgörande för frisörer. Före/efter visar kvalitet och gör att kunder väljer dig.",
    },
    ...standardFAQ,
  ],

  contact: {
    email: "info@webuildit.se",
  },

  sections: ["hero", "trustBadges", "whyWebsite", "offer", "features", "faq", "contact"],

  schemaOverrides: {
    "@type": "HairSalon",
  },
}
