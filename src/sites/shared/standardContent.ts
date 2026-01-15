/**
 * Standardcontent som används på alla bransch-mikrosajter
 *
 * Detta är generellt content som inte är bransch-specifikt:
 * - Offer bullets (tekniska specifikationer)
 * - Generella features (AI, pris, teknisk hantering)
 * - Generella FAQ (bindningstid, pris, tekniska frågor)
 *
 * Bransch-specifikt content (hero, whyWebsite, bransch-features, bransch-FAQ)
 * ligger fortfarande i respektive site config för optimal SEO.
 */

/**
 * Standard offer bullets - tekniska specifikationer som är samma överallt
 */
export const standardOfferBullets = [
  "Färdig på 5 dagar med smart automatisering",
  "Responsiv design för mobil, surfplatta och dator",
  "SEO-optimerad för lokala sökningar på Google",
  "SSL-säkerhet och snabb hosting ingår",
]

/**
 * Generella features - AI, pris, teknisk hantering
 * Dessa kombineras med bransch-specifika features i varje site config
 */
export const standardFeatures = [
  {
    title: "AI sänker kostnaden dramatiskt",
    body: "Traditionella webbbyråer tar 15 000-50 000 kr för en hemsida. Med AI-driven design och automatisering levererar vi samma professionella kvalitet för 599 kr/mån. Samma resultat, 80% lägre kostnad.",
  },
  {
    title: "Färdig på 5 dagar",
    body: "Ingen lång väntan. Tack vare AI och smart automatisering är din hemsida färdig och publicerad inom 5 arbetsdagar. Börja synas online direkt och få fler kunder.",
  },
  {
    title: "Ingen teknisk kunskap krävs",
    body: "Vi sätter upp hosting och SSL och publicerar hemsidan åt dig. Du behöver ingen teknisk kunskap för att komma igång.",
  },
]

/**
 * Generella FAQ - frågor om pris, bindning, tekniska detaljer
 * Dessa läggs EFTER bransch-specifika FAQ i varje site config
 */
export const standardFAQ = [
  {
    question: "Varför är det så billigt jämfört med traditionella webbbyråer?",
    answer:
      "Vi använder artificiell intelligens och automatisering för att skapa professionella hemsidor. Det som tar en traditionell byrå 40-60 timmar manuellt arbete gör vi med AI på några timmar. Resultatet är samma professionella kvalitet och funktionalitet, men till 80% lägre kostnad. Du betalar för resultatet, inte för timmar.",
  },
  {
    question: "Hur lång är bindningstiden?",
    answer:
      "12 månader. Efter bindningstiden fortsätter avtalet månadsvis till samma pris (599 kr/mån).",
  },
  {
    question: "Vad händer efter de 12 månaderna?",
    answer:
      "Avtalet fortsätter månadsvis till samma pris (599 kr/mån). Vill du avsluta kontaktar du oss.",
  },
  {
    question: "Kan jag ändra innehållet på hemsidan senare?",
    answer:
      "Ja, ändringar kan beställas som tillägg. Löpande uppdateringar ingår inte i baspriset.",
  },
  {
    question: "Behöver jag ha en egen domän?",
    answer:
      "Ja. Du registrerar domänen själv (t.ex. via Loopia). Domänkostnaden är cirka 100-150 kr/år och tillkommer utöver månadspriset på 599 kr.",
  },
]
