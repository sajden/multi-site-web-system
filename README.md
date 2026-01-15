# Multi-Site Web System

Ett produktionsredo multi-site system där en enda Next.js-applikation driver många mikrosajter.

## Översikt

Detta system använder en enda kodbas för att driva flera domäner (mikrosajter), var och en med unikt innehåll och design men gemensam infrastruktur.

### Exempel på mikrosajter:
- starta-vvs.se (VVS-företag)
- starta-stadfirma.se (Städfirmor)
- starta-malerifirma.se (Målerifirmor)

## Teknikstack

- **Next.js 15** (App Router, SSR)
- **React 18**
- **TypeScript**
- **Tailwind CSS v4**
- **PostgreSQL 16** (för tracking)
- **Shadcn UI** (komponenter)

## Arkitektur

### Multi-site Routing
Systemet använder `Host`-headern för att identifiera vilken mikrosajt som ska visas. All konfiguration laddas en gång vid process-boot och cachas i minnet för O(1) lookup.

\`\`\`typescript
const site = await getCurrentSite(); // Använder Host-header
\`\`\`

### Site Configuration
Varje mikrosajt har sin egen `SiteConfig` med:
- Metadata (title, description)
- Brand (label, accentColor, iconKey)
- Innehåll (hero, offer, features, faq, contact)
- SEO (schema overrides, OG images)

### Prestanda
- **O(1) lookup** - Ingen databas eller filsystem I/O per request
- **In-memory cache** - Alla configs laddas vid boot
- **CDN för bilder** - Ingen statisk asset-bloat

## Utveckling

### Lokalt
För att testa olika sajter lokalt, använd `dev_site` query parameter:

\`\`\`bash
http://localhost:3000/?dev_site=starta-vvs.se
http://localhost:3000/?dev_site=starta-stadfirma.se
http://localhost:3000/?dev_site=starta-malerifirma.se
\`\`\`

### Lägga till en ny mikrosajt

1. **Skapa en ny fil** i `src/sites/`, t.ex. `elektriker.ts`:
\`\`\`typescript
import type { SiteConfig } from "./types"

export const elektrikerConfig: SiteConfig = {
  id: "starta-elfirma",
  domain: "starta-elfirma.se",
  // ... resten av config
}
\`\`\`

2. **Importera i** `src/sites/index.ts`:
\`\`\`typescript
import { elektrikerConfig } from "./elektriker"
\`\`\`

3. **Lägg till i siteMap**:
\`\`\`typescript
export const siteMap: Record<string, SiteConfig> = {
  "starta-elfirma.se": elektrikerConfig,
  "www.starta-elfirma.se": elektrikerConfig,
  // ... existing sites
}
\`\`\`

4. **Ladda upp assets** till CDN med matchande `iconKey` och `heroImageKey`

5. **Bygg och deploya** ny Docker-image

6. **Konfigurera DNS** att peka mot ingress

## GDPR & Tracking

Systemet är GDPR-kompatibelt med:
- Cookie-banner vid första besök
- Blockerad tracking tills samtycke ges
- Möjlighet att uppdatera cookieval
- Pageview tracking till PostgreSQL (endast med samtycke)

## SEO

Varje mikrosajt har:
- Unik metadata (title, description)
- Open Graph tags för social sharing
- JSON-LD schema för sökmotorer och AI
- Per-domän sitemap.xml
- Per-domän robots.txt
- Canonical tags

## Deployment

### Docker
Systemet är Docker-redo och körs som en Node-baserad container.

### Kubernetes/Ingress
En deployment hanterar alla domäner via ingress-routing:

\`\`\`yaml
starta-vvs.se       → microsites-web:3000
starta-stadfirma.se → microsites-web:3000
starta-malerifirma.se    → microsites-web:3000
\`\`\`

## Databas

### Schema
\`\`\`sql
CREATE TABLE pageviews (
  id BIGSERIAL PRIMARY KEY,
  site_id TEXT NOT NULL,
  host TEXT NOT NULL,
  path TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
\`\`\`

### Köra migrations
\`\`\`bash
# Kör SQL-script från scripts-mappen
psql $DATABASE_URL -f scripts/001-create-pageviews-table.sql
\`\`\`

## Projektstruktur

\`\`\`
├── src/
│   ├── sites/
│   │   ├── types.ts          # TypeScript-typer
│   │   ├── index.ts          # Importerar & exporterar siteMap
│   │   ├── vvs.ts           # VVS site config
│   │   ├── stadfirma.ts     # Städfirma site config
│   │   └── malare.ts        # Målare site config
│   └── lib/
│       ├── siteResolver.ts   # Host-baserad routing
│       └── schema.ts         # JSON-LD schema
├── components/
│   ├── sections/             # Hero, Offer, Features, FAQ, Contact
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── cookie-banner.tsx
│   └── safe-image.tsx
├── app/
│   ├── page.tsx              # Huvudsida (dynamisk)
│   ├── layout.tsx            # Global layout med schema
│   ├── sitemap.xml/route.ts  # Per-domän sitemap
│   ├── robots.txt/route.ts   # Per-domän robots
│   └── api/
│       └── log-pageview/route.ts
└── scripts/
    └── 001-create-pageviews-table.sql
\`\`\`

## Säkerhet

- Origin-validering för tracking API
- GDPR-kompatibel samtyckehantering
- Input-validering för alla API-endpoints
- CSP-headers (konfigurera i production)

## Licens

Privat projekt - We Build IT
