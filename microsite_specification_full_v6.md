# Multi-Site Web System – Full Specification (Production-Ready)

## 1. Översikt

Detta är en komplett, produktionsredo specifikation för ett multi-site system där en enda Next.js-applikation driver många mikrosajter (en domän per nisch).

Exempel på mikrosajter:

- starta-stadfirma.se
- starta-vvs.se
- starta-elfirma.se
- starta-tradgardsfirma.se
- starta-malerifirma.se
- starta-flyttfirma.se
- starta-bilverkstad.se
- starta-dackfirma.se
- starta-frisor.se
- starta-spa.se

Alla domäner pekar mot samma kodbas, men innehållet styrs via en konfigurationsmodell (`SiteConfig`).

Mikrosajterna är svenska, en-sidiga säljsidor.
Huvuddomänen `webuildit.se` hanterar “Om oss”, policy och centrala dokument.

---

## 2. Teknikstack

- Next.js (App Router, t.ex. v15, SSR-läge)
- React 18
- TypeScript
- SSR (server runtime, ingen ren statisk export)
- Docker-redo build (Node-runtime i containern)
- PostgreSQL 16 för tracking
- Ingen extern analytics utan samtycke (GDPR-compliant)

---

## 3. Multi-site arkitektur

### 3.1 Princip

- Alla inkommande requests analyseras via `Host`-headern.
- `Host` matchas mot en lista av `SiteConfig`.
- Varje microsite använder samma layout och komponenter, men får:
  - unik text
  - unik ikon/bild
  - unik accentfärg
  - egen metadata
  - eget schema
  - egen sitemap
  - egen robots.txt

### 3.2 Filstruktur

```txt
src/
  sites/
    types.ts
    index.ts
  lib/
    siteResolver.ts
    schema.ts
  app/
    layout.tsx
    page.tsx
    sitemap.xml/route.ts
    robots.txt/route.ts
    api/log-pageview/route.ts
```

### 3.3 Prestanda & caching (KRAV)

- `SiteConfig` får **inte** laddas från databas eller filsystem per request.
- Alla `SiteConfig`-objekt ska laddas **en gång vid process-boot** och ligga i minne.
- `siteResolver.ts` ska använda en förberedd map:

  ```ts
  const siteMap: Record<string, SiteConfig> = {
    "starta-vvs.se": vvsConfig,
    "starta-stadfirma.se": stadConfig,
    "starta-elfirma.se": elektrikerConfig,
    ...
  };
  ```

- Lookup ska vara O(1) utan I/O.
- Ingen dynamisk import eller DB-anrop i request-path.

---

## 4. SiteConfig – innehållsmodell

### 4.1 Sektionstyper (typsäkerhet, KRAV)

Definiera en union-typ:

```ts
export type SectionType =
  | "hero"
  | "trustBadges"
  | "offer"
  | "features"
  | "faq"
  | "contact"
  | "whyWebsite"
  | "seoContent"
  | "generalSEO";
```

### 4.2 Modell

```ts
export interface SiteConfig {
  id: string;
  domain: string;
  type: "hemsida" | "compliance" | "security" | "ai";
  lang: "sv";

  brand: {
    label: string;       // Ex: "Starta VVS-Företag"
    accentColor: string; // Ex: "#0EA5E9"
    iconKey: string;     // Ex: "pipe", "sparkles", "car"
  };

  metadata: {
    title: string;
    description: string;
  };

  hero: {
    heading: string;       // H1
    subheading: string;    // 1–2 meningar
    primaryCta: string;    // "Kontakta oss"
    heroImageKey?: string; // Nyckel för branschbild
    heroImageAlt?: string; // Alt-text för SEO/tillgänglighet
  };

  offer: {
    priceText: string;   // "599 kr/månad"
    priceValue?: number; // Möjliggör exakt pris i schema
    binding?: string;    // "12 månader"
    bullets: string[];   // Vad som ingår
  };

  features: {
    title: string;
    body: string;
  }[];

  whyWebsite?: {
    title: string;
    text: string;
    points: string[];
  };

  seoContent?: {
    sections: {
      heading: string;
      content: string;
    }[];
  };

  faq: {
    question: string;
    answer: string;
  }[];

  contact: {
    email: string;
    phone?: string;
    address?: string;
  };

  sections: SectionType[]; // Ex: ["hero", "trustBadges", "offer", "features", "faq", "generalSEO", "contact"]

  schemaOverrides?: Record<string, any>;

  og?: {
    imageKey?: string;
  };
}
```

### 4.3 Exempel-sajter

`src/sites/index.ts` ska innehålla minst två fullt ifyllda exempel:

- `starta-vvs.se`
- `starta-stadfirma.se`

Alla texter på svenska.

---

## 5. Bild- och ikonhantering (CDN, KRAV)

### 5.1 Problem med local `public/`

- Skalar dåligt (Docker-image växer med varje ny site).
- Kräver rebuild och redeploy bara för att byta en ikon.
- Koppling mellan kod och media blir hård.

### 5.2 Lösning: CDN

Använd en extern CDN/lager, exempelvis:

```txt
https://cdn.webuildit.se/assets/{iconKey}.svg
https://cdn.webuildit.se/assets/{heroImageKey}.png
```

- `iconKey` och `heroImageKey` mappar till filer på CDN.
- Alternativt kan `SiteConfig` ha fullständiga URL:er direkt:

  ```ts
  brandIconUrl: string;
  heroImageUrl?: string;
  ```

Rekommendation: ha en liten util som från `iconKey`/`heroImageKey` genererar CDN-URL.

---

## 6. Routing & Rendering

### 6.1 `siteResolver.ts`

Ansvar:

- Läsa `Host` (`headers().get("host")`).
- Normalisera: lowercase, ta bort portnummer.
- Slå upp i `siteMap`.
- Om hittad → returnera `SiteConfig`.
- Om **inte** hittad:

  - Antingen:

    ```ts
    import { notFound } from "next/navigation";
    return notFound();
    ```

  - Eller returnera en särskild fallback-typ så att `page.tsx` kan visa “Sidan är under konstruktion”.

Detta är viktigt för att skydda appen från okända/trasiga domäner.

### 6.2 `layout.tsx`

- Hämta `SiteConfig` (server-side) via `getCurrentSite()`.
- Sätt:

  ```html
  <html lang="sv">
  <meta name="language" content="sv">
  <meta http-equiv="content-language" content="sv">
  ```

  (baserat på `site.lang`, initialt alltid `"sv"`).

- Inkludera global CSS.
- Inkludera JSON-LD schema via `getSchemaForSite(site)` i `<head>`.
- Rendera:

  - Cookie-banner (GDPR)
  - Sticky navbar
  - Children
  - Footer

### 6.3 `page.tsx`

- Hämta `site`.
- Om fallback/unknown → returnera 404 eller “under konstruktion”.
- Om riktig site:

  - rendera `GenericLandingPage` som:

    ```ts
    for (const section of site.sections) {
      render SectionComponentMap[section];
    }
    ```

---

## 7. UI/UX – Layoutstruktur

Varje mikrosajt har **en sida** (`/`) med sektioner:

1. Sticky navbar  
2. Hero  
3. Tjänsten / Offer  
4. Varför oss / Features  
5. FAQ  
6. Kontakt  
7. Footer  

Ordningen styrs av `site.sections`. Exempel:

```ts
sections: ["hero", "offer", "features", "faq", "contact"];
```

### 7.1 Sticky navbar

- Alltid längst upp, sticky vid scroll.
- Vänster:
  - We Build IT-logotyp (enkel text eller ikon).
  - Branschikon från `iconKey`/CDN.
- Höger:
  - Ankarlänkar (scrollar till sektioner):
    - Tjänsten (`#tjanst`)
    - Varför oss (`#varfor`)
    - Frågor & svar (`#faq`)
    - Kontakt (`#kontakt`)

### 7.2 Hero

- H1 = `site.hero.heading`.
- Subheading = `site.hero.subheading`.
- Primär-CTA = `site.hero.primaryCta` (scrollar till kontakt eller öppnar mailto).
- Hero-bild/illustration till höger på desktop, nedanför på mobil.

### 7.3 Offer

- Rubrik (kan vara generisk) + `site.offer.priceText`, `site.offer.binding`.
- Bulletlista från `site.offer.bullets`.

### 7.4 Features

- Grid med 3–4 kort (`site.features`).
- Två kolumner på desktop, en kolumn på mobil.

### 7.5 FAQ

- Rubrik “Frågor & svar”.
- Varje q/a som `<details><summary>Fråga</summary><p>Svar</p></details>`.

### 7.6 Kontakt

- Rubrik “Kontakt” eller liknande.
- Text + data från `site.contact`:

  - `email` → mailto  
  - `phone` → klickbar länk  
  - `address` → valfri

Bygg så att sektionen kan bytas mot formulär senare.

### 7.7 Footer

- Lighter area med länkar:

  - “Om oss” → `https://webuildit.se/om-oss`
  - “Integritetspolicy” → `https://webuildit.se/policy`
  - “Uppdatera cookieval” → öppnar cookie-banner igen

---

## 8. Designprinciper

- Ljus, vit bakgrund.
- Mörk text.
- Accentfärg från `site.brand.accentColor`.
- Ikoner: enkla SVG/line-icons via `iconKey`.
- Typsnitt: Inter eller systemfont.
- Inga animationer, ingen distraktion.
- Konverteringsfokus, inte “designshow”.

---

## 9. SEO-krav

### 9.1 Metadata

Per site:

- `title = site.metadata.title`
- `description = site.metadata.description`

Använd `generateMetadata()` eller motsvarande.

### 9.2 HTML-struktur

- Endast en H1 (hero-heading).
- H2/H3 kan användas för sektionstitlar.
- FAQ i semantisk `<details>`-struktur.

### 9.3 JSON-LD schema

`src/lib/schema.ts` ska exportera `getSchemaForSite(site)`.

Standard för `type: "hemsida"`:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "…",
  "description": "…",
  "provider": { "@type": "Organization", "name": "We Build IT" },
  "areaServed": "SE"
}
```

- `name` och `description` tas från `site.metadata`.
- `contact`-data kan användas i schema (t.ex. `serviceLocation`/`contactPoint`).
- Om `site.schemaOverrides` finns → merge/override standard-objektet.

### 9.4 Sitemap per domän

`src/app/sitemap.xml/route.ts`:

- Läs `Host` → `site`.
- Om ingen site: 404 eller tom sitemap.
- Annars: generera sitemap med `<url><loc>https://{host}/</loc></url>`.

### 9.5 robots.txt per domän

`src/app/robots.txt/route.ts`:

- Läs `Host`.
- Skriv:

  ```txt
  User-agent: *
  Allow: /
  Sitemap: https://{host}/sitemap.xml
  ```

---

## 10. GDPR – Cookie-banner (KRAV)

### 10.1 Funktionella krav

- Visa cookie-/samtyckesbanner vid första besöket på varje domän.
- Två val:

  - **Acceptera**
  - **Avvisa**

- Båda ska vara lika lätta att klicka (storlek, placering).
- Design: “Acceptera” får vara accentfärgad, “Avvisa” neutral (vit/grå) men med tydlig kontur.

### 10.2 Beteende

- Innan samtycke:
  - Ingen tracking (varken `/api/log-pageview` eller ev. framtida externa analytics).
- Vid “Acceptera”:
  - Sätt t.ex. `cookie_consent=accepted` i cookie eller `localStorage`.
  - Tillåt att tracking-komponent skickar pageviews.
- Vid “Avvisa”:
  - Sätt `cookie_consent=denied`.
  - Blockera tracking.

### 10.3 Återöppning

- I footern: länk “Uppdatera cookieval”.
- Den ska kunna återöppna bannern och låta användaren ändra sitt val.

---

## 11. Tracking – Postgres + API

### 11.1 Databas

Tabell:

```sql
CREATE TABLE pageviews (
  id BIGSERIAL PRIMARY KEY,
  site_id TEXT NOT NULL,
  host TEXT NOT NULL,
  path TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

### 11.2 API-route

`src/app/api/log-pageview/route.ts`:

- Metod: `POST`.
- Body: `{ siteId, path, referrer }`.
- Headers: läs `host`, `user-agent`.
- Kontrollera att cookiesamtycke är “accepted” (kan ske på client, men server kan validera flagga om du skickar med den).
- Kontrollera att `siteId` matchar en känd `SiteConfig`.
- Skriv rad i `pageviews`.

### 11.3 Client-hook

En liten client-komponent, t.ex. `<PageViewTracker site={site} />`:

- Körs bara om:

  - körs i browsern
  - cookie_consent === "accepted"

- Skickar POST till `/api/log-pageview` med:

  ```json
  {
    "siteId": site.id,
    "path": window.location.pathname,
    "referrer": document.referrer
  }
  ```

---

## 12. Deployment

### 12.1 Docker

- Bygg appen som en Node-baserad Docker-image.
- Innehåll:
  - Next.js server build
  - Runtime: Node
- Ingen ren statisk export.

### 12.2 Kluster

- En deployment, t.ex. `microsites-web`.
- En service som exponerar port 3000 internt.
- Ingress:

  ```txt
  starta-vvs.se       → microsites-web:3000
  starta-stadfirma.se → microsites-web:3000
  ...
  ```

Alla domäner till samma service.

### 12.3 Nya sajter – workflow (KRAV)

När du lägger till t.ex. `starta-elfirma.se`:

1. Lägg till ny `SiteConfig` i `src/sites/index.ts`.
2. Ladda upp ikon/hero-bild till CDN, med matchande `iconKey`/`heroImageKey`.
3. Bygg ny Docker-image.
4. Deploya containern.
5. Lägg till DNS-record (A/CAA/CNAME) mot ingress.
6. Ny site är live utan ytterligare kodförändringar.

Eftersom configs cachas vid boot krävs deploy/restart vid förändring – detta är avsiktligt och accepterat.

---

## 13. Sammanfattning – kärnprinciper

- En kodbas, många domäner via Host-baserad `SiteConfig`.
- Allt innehåll styrs av config – inte hårdkodning.
- In-memory SiteConfig-cache för prestanda.
- CDN för bilder/ikoner.
- Typsäkra sektioner (`SectionType` union).
- SSR med Node-runtime, ingen statisk export.
- GDPR-säker cookie-banner, med blockering av tracking tills accept.
- Postgres som enkel, robust analyslogg.
- Fallback för okända domäner (404 eller “under konstruktion”).
- Skalbar: lägg till 20–200 mikrositer utan att röra layout eller komponenter, bara config.



## 14. Implementation Details (Accent Color, CDN Images, Component Map)

### 14.1 Accent Color via CSS Variables (Tailwind)
Use a CSS variable for dynamic accent colors:

In `layout.tsx`:

```tsx
export default function RootLayout({ children }) {
  const site = getCurrentSite();
  return (
    <html lang={site.lang}>
      <body style={{ '--accent': site.brand.accentColor } as React.CSSProperties}>
        {children}
      </body>
    </html>
  );
}
```

In `tailwind.config.ts`:

```ts
theme: {
  extend: {
    colors: {
      accent: 'var(--accent)',
    },
  },
}
```

Use in components:
- `bg-accent`
- `text-accent`
- `border-accent`

---

### 14.2 next/image CDN Configuration

In `next.config.js`:

```js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.webuildit.se',
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
};
```

Map URLs:
- `https://cdn.webuildit.se/assets/{iconKey}.svg`
- `https://cdn.webuildit.se/assets/{heroImageKey}.png`

---

### 14.3 Section Rendering via Component Map (Type-safe)

Define renderer map:

```ts
const SECTION_COMPONENTS: Record<
  SectionType,
  (props: { site: SiteConfig }) => JSX.Element
> = {
  hero: ({ site }) => <Hero hero={site.hero} brand={site.brand} />,
  offer: ({ site }) => <Offer offer={site.offer} brand={site.brand} />,
  features: ({ site }) => <Features features={site.features} brand={site.brand} />,
  faq: ({ site }) => <Faq faq={site.faq} />,
  contact: ({ site }) => <Contact contact={site.contact} />,
};
```

In `page.tsx`:

```tsx
export default function Page() {
  const site = getCurrentSite();
  return (
    <main>
      {site.sections.map((sectionKey) => {
        const Renderer = SECTION_COMPONENTS[sectionKey];
        return <Renderer key={sectionKey} site={site} />;
      })}
    </main>
  );
}
```

This guarantees:
- full type safety
- no `any`
- no silent bugs from incorrect keys


## 15. SEO & AIO Enhancements (Canonical, Open Graph, Alt-text, Schema Specificity)

### 15.1 Canonical Tags (KRAV)
Each microsite must include a self-referencing canonical tag to avoid duplicate-content issues across multi-site setup.

Example inside `generateMetadata()`:

```ts
alternates: {
  canonical: '/',
}
```

---

### 15.2 Open Graph Metadata (KRAV)
For proper social sharing previews and improved AI visibility, add OG metadata.

Extend `SiteConfig` with:

```ts
og?: {
  imageKey?: string;
}
```

Metadata example:

```ts
openGraph: {
  title: site.metadata.title,
  description: site.metadata.description,
  url: `https://${site.domain}`,
  siteName: site.brand.label,
  locale: 'sv_SE',
  type: 'website',
  images: [
    {
      url: `https://cdn.webuildit.se/assets/${site.og?.imageKey || site.hero.heroImageKey || 'default-og'}.png`,
      width: 1200,
      height: 630,
      alt: site.hero.heroImageAlt || site.metadata.title,
    }
  ]
}
```

---

### 15.3 Alt-text for Hero Images (KRAV)
Extend `hero` section in `SiteConfig`:

```ts
hero: {
  heading: string;
  subheading: string;
  primaryCta: string;
  heroImageKey?: string;
  heroImageAlt?: string; // required for SEO & accessibility
};
```

---

### 15.4 AIO – Schema Specificity (KRAV)
To optimize for AI engines (ChatGPT, Perplexity, etc.), schema must express exact business “isness”.

Support richer schema in `schemaOverrides`:

Examples:
- `"@type": "Plumber"`
- `"@type": "CleaningService"`
- `"@type": "Electrician"`

Implementation in `getSchemaForSite()`:

```ts
const schema = {
  "@context": "https://schema.org",
  "@type": site.schemaOverrides?.type || "Service",
  "name": site.metadata.title,
  "description": site.metadata.description,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://${site.domain}`
  }
};
```

---

### 15.5 PriceSpecification for AI-visible Pricing (KRAV)
AI models rely heavily on structured pricing.

Add price extraction:

```ts
"offers": {
  "@type": "Offer",
  "priceCurrency": "SEK",
  "price": site.offer.priceText.replace(/\D/g, ''), 
  "availability": "https://schema.org/InStock"
}
```

If you want perfect accuracy, add:

```ts
offer: {
  priceText: string;
  priceValue?: number; // enables exact structured pricing
  binding?: string;
  bullets: string[];
}
```

Then schema uses `priceValue` when defined.

---



## 16. Development Mode Override & Safe Image Handling

### 16.1 Development Host Override (KRAV)

Local development uses `localhost:3000`, but the multi‑site resolver relies on real domains.
To enable correct local testing, add a dev‑only override:

```ts
// inside getCurrentSite()
if (process.env.NODE_ENV === 'development') {
  const referer = headers().get('referer') || '';
  const searchParams = new URL(referer).searchParams;
  const devSite = searchParams.get('dev_site');
  if (devSite) {
    effectiveHost = devSite.toLowerCase();
  }
}
```

Usage in development:

```
http://localhost:3000/?dev_site=starta-vvs.se
```

- Only active in `NODE_ENV=development`
- Zero impact in production
- No need to modify `/etc/hosts`


---

### 16.2 SafeImage With Fallback (KRAV)

CDN-based images can break if a key is mistyped or missing.
To avoid broken UI, implement a `SafeImage` component:

```tsx
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

type SafeImageProps = Omit<ImageProps, 'src'> & {
  src: string;
  fallbackSrc?: string;
};

export function SafeImage({ src, fallbackSrc = '/fallback.png', alt, ...rest }: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={currentSrc}
      alt={alt}
      onError={() => {
        if (currentSrc !== fallbackSrc) setCurrentSrc(fallbackSrc);
      }}
    />
  );
}
```

Usage example:

```tsx
<SafeImage
  src={`https://cdn.webuildit.se/assets/${site.hero.heroImageKey}.png`}
  alt={site.hero.heroImageAlt ?? site.metadata.title}
  width={800}
  height={500}
  fallbackSrc="https://cdn.webuildit.se/assets/default-hero.png"
/>
```

Ensures:
- Professional fallback instead of a broken icon
- CDN key typos never break layout
- Predictable visual output across all microsites

---


## 17. Final Hardening: Favicon Branding, Tracking Security, Static Path Handling

### 17.1 Per-site Favicon & Touch Icons (KRAV)

Each microsite should have its own favicon and (optionally) Apple touch icon for proper branding in browser tabs and shared links.

Extend `generateMetadata()` to include dynamic icons per site:

```ts
export async function generateMetadata(): Promise<Metadata> {
  const site = getCurrentSite();
  const domain = `https://${site.domain}`;

  return {
    title: site.metadata.title,
    description: site.metadata.description,
    metadataBase: new URL(domain),
    // ... alternates, openGraph, etc ...
    icons: {
      icon: `https://cdn.webuildit.se/assets/${site.brand.iconKey}-favicon.png`,
      apple: `https://cdn.webuildit.se/assets/${site.brand.iconKey}-apple-touch.png`,
    },
  };
}
```

Branding is then fully aligned across:
- logo
- hero image
- favicon
- OG image

---

### 17.2 Protecting the Tracking API (KRAV)

`POST /api/log-pageview` must not be open to arbitrary spam from the internet.

Minimum protection: validate `Origin` and/or `Host` headers against a strict allowlist of your domains.

Example:

```ts
import { headers } from 'next/headers';

const allowedOrigins = [
  'https://webuildit.se',
  'https://www.webuildit.se',
  // pattern domains, or list specific microsites
];

function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return false;
  return allowedOrigins.some((allowed) => origin === allowed || origin.startsWith('https://starta-'));
}
```

In `route.ts`:

```ts
export async function POST(req: Request) {
  const origin = headers().get('origin');
  if (!isAllowedOrigin(origin)) {
    return new Response('Forbidden', { status: 403 });
  }

  // normal logging logic...
}
```

This prevents:
- random bots from spamming pageview logs
- accidental misuse via external scripts

Further hardening (optional):
- simple rate limiting per IP
- max payload size
- schema validation for body

---

### 17.3 Static/Asset Path Handling (AWARENESS)

`siteResolver` and layout logic must not waste CPU on static or asset paths.

Next.js already routes:
- `/_next/*`
- `/favicon.ico`
- `/assets/*`
- `/robots.txt`
- `/sitemap.xml`

via its own internal pipeline, but you must ensure that:

- `getCurrentSite()` is only called from:
  - page/layout components for real pages
  - API routes that truly need site context

If you later introduce `middleware.ts`, ensure it:
- early-returns for static routes and `_next/*`
- only runs heavy logic on real page/API paths

Goal:
- avoid unnecessary work
- keep latency flat even with many microsites

---
