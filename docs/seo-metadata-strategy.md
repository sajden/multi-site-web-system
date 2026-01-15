# SEO & Metadata Strategy – Starta-domäner (1-page)

Detta dokument sammanfattar metadata, SEO-strategi och on-page-struktur för de 10 starta-domänerna. Syftet är snabb validering: ranka på "starta [bransch]" och få in leads via mail.

## Globala regler

- Pris: 599 kr/mån
- Bindning: 12 månader
- CTA: "Maila oss" (länkar till #kontakt)
- Kontakt: mailto `info@webuildit.se`
- Ingen telefon i UI
- Alla sidor är 1-page med samma sektioner

## On-page struktur (1-page)

Sektioner i ordning:

1. Hero (H1 med huvudterm)
2. Trust badges
3. Why Website (digitalt skyltfönster)
4. Offer (pris + 12 månader)
5. Features (lokal SEO + förtroende + kontakt)
6. FAQ (long-tail frågor)
7. General SEO (gemensam sektion)
8. Kontakt

Ankar-ID:n som används i navbar:
- `#tjanst`
- `#varfor`
- `#faq`
- `#kontakt`

## Gemensam SEO-sektion (alla sajter)

Källa: `src/sites/shared/generalContent.ts`

- Fokus: digitalt skyltfönster, synlighet på Google, lokal SEO och fast pris
- CTA: "Maila oss" + "Se priser"
- Syfte: ge generell SEO-bredd utan att duplicera branschcopy

## Metadata-mallar

**Title (mall):**
`Starta [Bransch] | Hemsida + SEO från 599 kr/mån`

**Description (mall):**
`Vill du starta [bransch]? Vi fixar hemsida, Google Mitt Företag och lokal SEO för att öka chansen att synas när kunder söker "[bransch] [stad]". Från 599 kr/mån.`

**H1 (mall):**
`Starta [Bransch]? Syns Online från Dag 1`

## Domänspecifika metadata och inställningar

### starta-stadfirma.se
- Site ID: `starta-stadfirma`
- Primär term: städfirma
- H1: Starta Städfirma? Syns Online från Dag 1
- Title: Starta Städfirma | Hemsida + SEO från 599 kr/mån
- Meta description: Vill du starta städfirma? Vi fixar hemsida, Google Mitt Företag och lokal SEO för att öka chansen att synas på Google från dag 1. Från 599 kr/mån.
- Schema: `CleaningService`
- Hero image: `public/images/cleaning-hero.jpg`
- Accent color: `#10B981`
- Icon key: `sparkles`

### starta-vvs.se
- Site ID: `starta-vvs`
- Primär term: VVS / VVS-företag
- H1: Starta VVS-Företag? Syns Online från Dag 1
- Title: Starta VVS-Företag | Hemsida + SEO från 599 kr/mån
- Meta description: Vill du starta VVS-företag? Vi fixar hemsida, Google Mitt Företag och lokal SEO för att öka chansen att synas när kunder söker "VVS [stad]". Från 599 kr/mån.
- Schema: `Plumber`
- Hero image: `public/images/vvs-hero.jpg`
- Accent color: `#0EA5E9`
- Icon key: `pipe`

### starta-elfirma.se
- Site ID: `starta-elfirma`
- Primär term: elfirma
- H1: Starta Elfirma? Syns Online från Dag 1
- Title: Starta Elfirma | Hemsida + SEO från 599 kr/mån
- Meta description: Vill du starta elfirma? Vi fixar hemsida, Google Mitt Företag och lokal SEO för att öka chansen att synas när kunder söker "elfirma [stad]". Från 599 kr/mån.
- Schema: `Electrician`
- Hero image: `public/images/electrician-hero.jpg`
- Accent color: `#EAB308`
- Icon key: `zap`

### starta-tradgardsfirma.se
- Site ID: `starta-tradgardsfirma`
- Primär term: trädgårdsfirma
- H1: Starta Trädgårdsfirma? Syns Online från Dag 1
- Title: Starta Trädgårdsfirma | Hemsida + SEO från 599 kr/mån
- Meta description: Vill du starta trädgårdsfirma? Vi fixar hemsida, Google Mitt Företag och lokal SEO för att öka chansen att synas när kunder söker "trädgårdsfirma [stad]". Från 599 kr/mån.
- Schema: `LandscapingBusiness`
- Hero image: `public/images/gardener-hero.jpg`
- Accent color: `#059669`
- Icon key: `leaf`

### starta-malerifirma.se
- Site ID: `starta-malerifirma`
- Primär term: målerifirma
- H1: Starta Målerifirma? Syns Online från Dag 1
- Title: Starta Målerifirma | Hemsida + SEO från 599 kr/mån
- Meta description: Vill du starta målerifirma? Vi fixar hemsida, Google Mitt Företag och lokal SEO för att öka chansen att synas när kunder söker "målerifirma [stad]". Från 599 kr/mån.
- Schema: `HousePainter`
- Hero image: `public/images/painting-hero.jpg`
- Accent color: `#F59E0B`
- Icon key: `paint-brush`

### starta-flyttfirma.se
- Site ID: `starta-flyttfirma`
- Primär term: flyttfirma
- H1: Starta Flyttfirma? Syns Online från Dag 1
- Title: Starta Flyttfirma | Hemsida + SEO från 599 kr/mån
- Meta description: Vill du starta flyttfirma? Vi fixar hemsida, Google Mitt Företag och lokal SEO för att öka chansen att synas när kunder söker "flyttfirma [stad]". Från 599 kr/mån.
- Schema: `MovingCompany`
- Hero image: `public/images/moving-hero.jpg`
- Accent color: `#2563EB`
- Icon key: `truck`

### starta-bilverkstad.se
- Site ID: `starta-bilverkstad`
- Primär term: bilverkstad
- H1: Starta Bilverkstad? Syns Online från Dag 1
- Title: Starta Bilverkstad | Hemsida + SEO från 599 kr/mån
- Meta description: Vill du starta bilverkstad? Vi fixar hemsida, Google Mitt Företag och lokal SEO för att öka chansen att synas när kunder söker "bilverkstad [stad]". Från 599 kr/mån.
- Schema: `AutoRepair`
- Hero image: `public/images/auto-repair-hero.jpg`
- Accent color: `#1D4ED8`
- Icon key: `car`

### starta-dackfirma.se
- Site ID: `starta-dackfirma`
- Primär term: däckfirma
- H1: Starta Däckfirma? Syns Online från Dag 1
- Title: Starta Däckfirma | Hemsida + SEO från 599 kr/mån
- Meta description: Vill du starta däckfirma? Vi fixar hemsida, Google Mitt Företag och lokal SEO för att öka chansen att synas när kunder söker "däckfirma [stad]". Från 599 kr/mån.
- Schema: `AutomotiveBusiness`
- Hero image: `public/images/tire-hero.jpg`
- Accent color: `#F97316`
- Icon key: `disc-3`

### starta-frisor.se
- Site ID: `starta-frisor`
- Primär term: frisör + frisörsalong
- H1: Starta Frisörsalong? Syns Online från Dag 1
- Title: Starta Frisörsalong | Frisör Hemsida + SEO från 599 kr/mån
- Meta description: Vill du starta frisörsalong? Vi fixar hemsida för frisörer, Google Mitt Företag och lokal SEO för att öka chansen att synas när kunder söker "frisör [stad]". Från 599 kr/mån.
- Schema: `HairSalon`
- Hero image: `public/images/hair-salon-hero.jpg`
- Accent color: `#EC4899`
- Icon key: `scissors`

### starta-spa.se
- Site ID: `starta-spa`
- Primär term: spa
- H1: Starta Spa? Syns Online från Dag 1
- Title: Starta Spa | Hemsida + SEO från 599 kr/mån
- Meta description: Vill du starta spa? Vi fixar hemsida, Google Mitt Företag och lokal SEO för att öka chansen att synas när kunder söker "spa [stad]". Från 599 kr/mån.
- Schema: `DaySpa`
- Hero image: `public/images/spa-hero.jpg`
- Accent color: `#14B8A6`
- Icon key: `flower`

## Long-tail strategi

- FAQ-frågor är formulerade för att matcha long-tail ("Hur startar jag...", "Hur syns jag på Google...").
- Features/Why-website nämner lokala sökningar ("[bransch] + stad", "nära mig").
- H2/H3 hålls naturliga och informativa, inte keyword-stuffing.

## Schema-typer

Schema är branschspecifikt för att stärka relevans i SERP:

- CleaningService
- Plumber
- Electrician
- LandscapingBusiness
- HousePainter
- MovingCompany
- AutoRepair
- AutomotiveBusiness
- HairSalon
- DaySpa
