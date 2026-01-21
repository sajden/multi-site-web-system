import type { SiteConfig } from "./types"
import { standardOfferBullets, standardFeatures, standardFAQ } from "./shared/standardContent"

export const stadConfig: SiteConfig = {
  id: "starta-stadfirma",
  domain: "www.starta-stadfirma.se",
  type: "hemsida",
  lang: "sv",

  brand: {
    label: "Starta Städfirma",
    accentColor: "#10B981",
    iconKey: "sparkles",
  },

  metadata: {
    title: "Starta Städfirma | Hemsida + SEO från 599 kr/mån",
    description:
      "Vill du starta städfirma? Vi fixar hemsida, Google Mitt Företag och lokal SEO för att öka chansen att synas på Google från dag 1. Från 599 kr/mån.",
  },

  hero: {
    heading: "Starta Städfirma? Syns Online från Dag 1",
    subheading:
      "När du startar en städfirma behöver du synas direkt. Vi bygger hemsida, Google Mitt Företag och lokal SEO för att öka chansen att synas när kunder söker \"städfirma [stad]\". Färdig på 5 dagar för 599 kr/mån.",
    primaryCta: "Maila oss",
    heroImageKey: "cleaning-hero",
    heroImageAlt: "Professionell städning av kontor och hem",
  },

  offer: {
    priceText: "599 kr/månad",
    priceValue: 599,
    binding: "12 månaders bindningstid",
    bullets: standardOfferBullets,
  },

  whyWebsite: {
    title: "Ditt digitala skyltfönster som städfirma",
    text: "När du startar städfirma är förtroende allt. Din hemsida är ditt digitala skyltfönster där kunder ser tjänster, RUT-information och recensioner. Syns du inte på Google väljer kunden en annan städfirma.",
    points: [
      "Bygg förtroende direkt med tydlig info om RUT-avdrag, försäkring och tjänster",
      "Öka synligheten lokalt när kunder söker hemstäd, kontorsstäd eller flyttstädning",
      "Få offertförfrågningar även när du är ute och städar",
      "Visa omdömen och före/efter-bilder som gör det lätt att välja dig",
    ],
  },

  features: [
    ...standardFeatures,
    {
      title: "Öka synligheten när kunder söker städfirma + stad",
      body: "Vi optimerar din sida för lokala sökningar som \"städfirma Stockholm\" och \"hemstädning nära mig\" så att du blir vald från start.",
    },
    {
      title: "Bygg förtroende med RUT och recensioner",
      body: "Tydlig RUT-information, tjänstelistor och kundomdömen gör att nya kunder känner sig trygga med att boka.",
    },
    {
      title: "Få fler förfrågningar utan krångel",
      body: "Kontaktformulär och tydliga CTA:er gör att kunder enkelt kan be om offert eller boka städning.",
    },
  ],

  faq: [
    {
      question: "Hur startar jag en städfirma och får kunder snabbt?",
      answer:
        "Börja med att synas online direkt. När du startar städfirma är Google din bästa säljkanal. En professionell hemsida med lokal SEO gör att kunder hittar dig när de söker \"städfirma [stad]\".",
    },
    {
      question: "Hur syns jag på Google som städfirma?",
      answer:
        "Du behöver en SEO-optimerad hemsida och en uppdaterad Google Mitt Företag-profil. Vi hjälper dig att öka chansen att synas när kunder söker hemstäd, kontorsstäd eller flyttstädning i din stad.",
    },
    {
      question: "Vad behövs för att starta städfirma?",
      answer:
        "F-skatt, försäkring, tydliga tjänster och en hemsida som bygger förtroende. Med en bra sajt kan du ta emot förfrågningar direkt och visa priser, tjänster och RUT-avdrag.",
    },
    {
      question: "Är det lönsamt att starta städfirma?",
      answer:
        "Ja, särskilt med återkommande kunder. RUT-avdrag gör tjänster mer attraktiva och en bra hemsida hjälper dig att få fler återkommande uppdrag.",
    },
    {
      question: "Vilka städtjänster ska jag visa på hemsidan?",
      answer:
        "Visa de tjänster du vill sälja: hemstäd, kontorsstäd, flyttstäd, storstäd, fönsterputs och trappstäd. Ju tydligare du är, desto lättare är det för kunder att boka.",
    },
    {
      question: "Hur får jag kunder till min nystartade städfirma?",
      answer:
        "För att få kunder till din nystartade städfirma behöver du synas på Google när kunder söker tjänster i din stad. Med en professionell hemsida, Google Mitt Företag och lokal SEO ökar du chansen att bli hittad direkt. Vi hjälper dig att komma igång snabbt så att förfrågningar börjar komma in.",
    },
    ...standardFAQ,
  ],

  contact: {
    email: "info@webuildit.se",
  },

  sections: ["hero", "trustBadges", "whyWebsite", "offer", "features", "faq", "contact"],

  schemaOverrides: {
    "@type": "CleaningService",
  },
}
