import type { SiteConfig } from "./types"
import { standardOfferBullets, standardFeatures, standardFAQ } from "./shared/standardContent"

export const flyttfirmaConfig: SiteConfig = {
  id: "starta-flyttfirma",
  domain: "starta-flyttfirma.se",
  type: "hemsida",
  lang: "sv",

  brand: {
    label: "Starta Flyttfirma",
    accentColor: "#2563EB",
    iconKey: "truck",
  },

  metadata: {
    title: "Starta Flyttfirma | Hemsida + SEO från 599 kr/mån",
    description:
      "Vill du starta flyttfirma? Vi fixar hemsida, Google Mitt Företag och lokal SEO för att öka chansen att synas när kunder söker \"flyttfirma [stad]\". Från 599 kr/mån.",
  },

  hero: {
    heading: "Starta Flyttfirma? Syns Online från Dag 1",
    subheading:
      "När du startar en flyttfirma behöver du synas direkt. Vi bygger hemsida och lokal SEO för att öka chansen att synas när kunder söker \"flyttfirma [stad]\" och \"flytthjälp\". Färdig på 5 dagar för 599 kr/mån.",
    primaryCta: "Maila oss",
    heroImageKey: "moving-hero",
    heroImageAlt: "Flyttfirma som hjälper till med packning och flytt",
  },

  offer: {
    priceText: "599 kr/månad",
    priceValue: 599,
    binding: "12 månaders bindningstid",
    bullets: standardOfferBullets,
  },

  whyWebsite: {
    title: "Ditt digitala skyltfönster som flyttfirma",
    text: "När du startar flyttfirma behöver kunderna känna sig trygga. Din hemsida visar försäkringar, tjänster och omdömen. Syns du inte på Google väljer kunden en annan flyttfirma.",
    points: [
      "Visa tjänster som privatflytt, företagsflytt, packning och magasinering",
      "Öka synligheten lokalt när kunder söker \"flyttfirma + stad\"",
      "Bygg förtroende med försäkringar och recensioner",
      "Få fler bokningar via enkel kontakt och offertformulär",
    ],
  },

  features: [
    ...standardFeatures,
    {
      title: "Lokal synlighet på Google",
      body: "Vi optimerar för sökningar som \"flyttfirma [stad]\" och \"flytthjälp\" så att du hamnar högt upp i resultaten.",
    },
    {
      title: "Bygg förtroende med försäkringar",
      body: "Tydlig information om ansvarsförsäkring och rutiner gör att kunden väljer dig.",
    },
    {
      title: "Fler bokningar med tydliga tjänster",
      body: "Kunder ser direkt vad du erbjuder och kan enkelt kontakta dig för offert eller bokning.",
    },
  ],

  faq: [
    {
      question: "Hur startar jag en flyttfirma?",
      answer:
        "Du behöver F-skatt, försäkring och en tydlig tjänsteprofil. För att få kunder snabbt är det viktigt att synas på Google med en professionell hemsida.",
    },
    {
      question: "Hur syns jag på Google som flyttfirma?",
      answer:
        "En SEO-optimerad hemsida och Google Mitt Företag ökar chansen att synas när kunder söker \"flyttfirma [stad]\" och \"flytthjälp\".",
    },
    {
      question: "Vilka flyttjänster ska jag visa på hemsidan?",
      answer:
        "Lista privatflytt, företagsflytt, packning, magasinering och flyttstäd. Det hjälper dig att ranka för fler relevanta sökningar.",
    },
    {
      question: "Hur får jag fler bokningar?",
      answer:
        "Med tydliga tjänster, bra omdömen och enkel kontakt. Vi gör det enkelt för kunder att boka eller be om offert.",
    },
    {
      question: "Hur får jag kunder till min nystartade flyttfirma?",
      answer:
        "För att få kunder till din nystartade flyttfirma behöver du synas på Google när kunder söker tjänster i din stad. Med en professionell hemsida, Google Mitt Företag och lokal SEO ökar du chansen att bli hittad direkt. Vi hjälper dig att komma igång snabbt så att förfrågningar börjar komma in.",
    },
    {
      question: "Är hemsida viktigt när jag startar flyttfirma?",
      answer:
        "Ja, synlighet från dag 1 gör stor skillnad. Kunder googlar flytthjälp varje dag och du vill finnas där direkt.",
    },
    ...standardFAQ,
  ],

  contact: {
    email: "info@webuildit.se",
  },

  sections: ["hero", "trustBadges", "whyWebsite", "offer", "features", "faq", "contact"],

  schemaOverrides: {
    "@type": "MovingCompany",
  },
}
