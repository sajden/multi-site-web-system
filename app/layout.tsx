import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { getCurrentSite } from "@/src/lib/siteResolver"
import { getSchemaForSite } from "@/src/lib/schema"

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// <CHANGE> Dynamic metadata based on current site
export async function generateMetadata(): Promise<Metadata> {
  const site = await getCurrentSite()
  const domain = `https://${site.domain}`

  return {
    title: site.metadata.title,
    description: site.metadata.description,
    metadataBase: new URL(domain),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: site.metadata.title,
      description: site.metadata.description,
      url: domain,
      siteName: site.brand.label,
      locale: "sv_SE",
      type: "website",
      images: [
        {
          url: site.og?.imageKey
            ? `/images/${site.og.imageKey}.jpg`
            : `/images/${site.hero.heroImageKey || "hero-background"}.jpg`,
          width: 1200,
          height: 630,
          alt: site.hero.heroImageAlt || site.metadata.title,
        },
      ],
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // <CHANGE> Get current site and inject schema + dynamic accent color
  const site = await getCurrentSite()
  const schema = getSchemaForSite(site)

  return (
    <html lang={site.lang}>
      <head>
        <meta name="language" content="sv" />
        <meta httpEquiv="content-language" content="sv" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body className="font-sans antialiased" style={{ "--accent": site.brand.accentColor } as React.CSSProperties}>
        {GA_MEASUREMENT_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  )
}
