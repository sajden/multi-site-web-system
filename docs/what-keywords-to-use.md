# Keyword Strategy – Starta-domäner (1-page)

Detta dokument beskriver nuvarande SEO-strategi för starta-domänerna. Fokus är snabb validering med 1-page-sidor, tydliga H1/H2/H3 och FAQ som fångar long-tail.

## Mål

- Ranka snabbt på "starta [bransch]".
- Synas lokalt på "[bransch] + stad".
- Konvertera med tydlig CTA och 599 kr/mån.

## Arkitektur (SEO i kod)

### Gemensamt SEO-innehåll (alla sajter)

- Fil: `src/sites/shared/generalContent.ts`
- Komponent: `components/sections/general-seo-content.tsx`
- Injiceras automatiskt via `src/sites/index.ts`
- Fokus: digitalt skyltfönster, synlighet på Google, lokal SEO, fast pris

### Standardinnehåll (delas av alla sajter)

- Fil: `src/sites/shared/standardContent.ts`
- Innehåller standardiserade offer-bullets, features och FAQ

### Branschspecifikt innehåll

- Filer: `src/sites/*.ts`
- Varje bransch har unika H1/H2/FAQ och lokaliserade termer

## Domäner och huvudtermer

- starta-stadfirma.se → städfirma
- starta-vvs.se → VVS / VVS-företag
- starta-elfirma.se → elfirma
- starta-tradgardsfirma.se → trädgårdsfirma
- starta-malerifirma.se → målerifirma
- starta-flyttfirma.se → flyttfirma
- starta-bilverkstad.se → bilverkstad
- starta-dackfirma.se → däckfirma
- starta-frisor.se → frisör + frisörsalong
- starta-spa.se → spa

## Struktur (1-page)

Sektionerna är konsekventa över alla sajter:

- Hero (H1 med "Starta [bransch]")
- Trust badges
- Why website (digitalt skyltfönster)
- Offer (pris, 599 kr/mån, 12 mån)
- Features (lokal SEO, förtroende, kontakt)
- FAQ (long-tail frågor)
- General SEO (gemensam sektion)
- Kontakt

## Long-tail och lokala signaler

- Varje sajt nämner "[bransch] + stad" i features/FAQ.
- FAQ-frågor används som long-tail anchors (t.ex. "Hur startar jag en [bransch]?").
- H2/H3 ska vara naturliga, inte listor av keywords.

## Implementationsexempel

```ts
// src/sites/index.ts
export const siteMap: Record<string, SiteConfig> = {
  "starta-stadfirma.se": stadConfig,
  "starta-vvs.se": vvsConfig,
  "starta-elfirma.se": elektrikerConfig,
  // ...
}
```

```bash
# Testa lokalt
http://localhost:3000/?dev_site=starta-vvs.se
```

## Notering

För full metadata per domän (Title/Description/H1/schema) se `docs/seo-metadata-strategy.md`.
