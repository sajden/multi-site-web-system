import type { SiteConfig } from "./types"
import { standardOfferBullets, standardFeatures, standardFAQ } from "./shared/standardContent"

export const spaConfig: SiteConfig = {
  id: "starta-spa",
  domain: "starta-spa.se",
  type: "hemsida",
  lang: "sv",

  brand: {
    label: "Starta Spa",
    accentColor: "#14B8A6",
    iconKey: "flower",
  },

  metadata: {
    title: "Starta Spa | Hemsida + SEO från 599 kr/mån",
    description:
      "Vill du starta spa? Vi fixar hemsida, Google Mitt Företag och lokal SEO för att öka chansen att synas när kunder söker \"spa [stad]\". Från 599 kr/mån.",
  },

  hero: {
    heading: "Starta Spa? Syns Online från Dag 1",
    subheading:
      "När du startar ett spa behöver du synas direkt. Vi bygger hemsida och lokal SEO för att öka chansen att synas när kunder söker \"spa [stad]\" och \"spa-behandlingar\". Färdig på 5 dagar för 599 kr/mån.",
    primaryCta: "Maila oss",
    heroImageKey: "spa-hero",
    heroImageAlt: "Spa-miljö med behandling och avkoppling",
  },

  offer: {
    priceText: "599 kr/månad",
    priceValue: 599,
    binding: "12 månaders bindningstid",
    bullets: standardOfferBullets,
  },

  whyWebsite: {
    title: "Ditt digitala skyltfönster för ditt spa",
    text: "När du startar spa vill kunder känna lugn och kvalitet direkt. Din hemsida visar behandlingar, paket och recensioner. Syns du inte på Google missar du bokningar.",
    points: [
      "Öka synligheten lokalt när kunder söker \"spa + stad\"",
      "Visa behandlingar, paket och priser tydligt",
      "Bygg förtroende med bilder och omdömen",
      "Få fler bokningar via enkel kontakt",
    ],
  },

  features: [
    ...standardFeatures,
    {
      title: "Öka synligheten när kunder söker spa + stad",
      body: "Vi optimerar för lokala sökningar för att öka chansen att synas när kunder letar efter spa och behandlingar i din stad.",
    },
    {
      title: "Visa behandlingar och paket",
      body: "Tydliga paket, behandlingar och presentkort gör det enkelt att boka.",
    },
    {
      title: "Öka bokningar med professionell närvaro",
      body: "En proffsig hemsida gör att fler kunder väljer dig och återkommer.",
    },
  ],

  faq: [
    {
      question: "Hur startar jag ett spa?",
      answer:
        "Du behöver F-skatt, rätt lokal och en tydlig behandlingserbjudande. För att få kunder snabbt är det viktigt att synas på Google med en professionell hemsida.",
    },
    {
      question: "Hur syns jag på Google som spa?",
      answer:
        "En SEO-optimerad hemsida och Google Mitt Företag ökar chansen att synas när kunder söker \"spa [stad]\" och relaterade behandlingar.",
    },
    {
      question: "Vilka behandlingar ska jag lista på hemsidan?",
      answer:
        "Lista massage, ansiktsbehandlingar, spa-paket, bastu och eventuella specialbehandlingar. Det hjälper dig att ranka för fler sökningar.",
    },
    {
      question: "Hur får jag kunder till mitt nystartade spa?",
      answer:
        "För att få kunder till ditt nystartade spa behöver du synas på Google när kunder söker tjänster i din stad. Med en professionell hemsida, Google Mitt Företag och lokal SEO ökar du chansen att bli hittad direkt. Vi hjälper dig att komma igång snabbt så att förfrågningar börjar komma in.",
    },
    {
      question: "Hur får jag fler bokningar?",
      answer:
        "Med tydliga behandlingar, bra bilder och enkel kontakt. Vi gör det lätt för kunder att boka eller fråga om tider.",
    },
    {
      question: "Är det lönsamt att starta spa?",
      answer:
        "Ja, särskilt med återkommande kunder och paket. Synlighet online hjälper dig att fylla kalendern.",
    },
    ...standardFAQ,
  ],

  contact: {
    email: "info@webuildit.se",
  },

  sections: ["hero", "trustBadges", "whyWebsite", "offer", "features", "faq", "contact"],

  schemaOverrides: {
    "@type": "DaySpa",
  },
}
