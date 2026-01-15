import { headers } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"
import { insertPageView } from "@/lib/db"
import { siteMap } from "@/src/sites"

// List of allowed origins for security
const ALLOWED_ORIGIN_PATTERNS = [
  "https://webuildit.se",
  "https://www.webuildit.se",
  "https://starta-stadfirma.se",
  "https://www.starta-stadfirma.se",
  "https://starta-vvs.se",
  "https://www.starta-vvs.se",
  "https://starta-elfirma.se",
  "https://www.starta-elfirma.se",
  "https://starta-tradgardsfirma.se",
  "https://www.starta-tradgardsfirma.se",
  "https://starta-malerifirma.se",
  "https://www.starta-malerifirma.se",
  "https://starta-flyttfirma.se",
  "https://www.starta-flyttfirma.se",
  "https://starta-bilverkstad.se",
  "https://www.starta-bilverkstad.se",
  "https://starta-dackfirma.se",
  "https://www.starta-dackfirma.se",
  "https://starta-frisor.se",
  "https://www.starta-frisor.se",
  "https://starta-spa.se",
  "https://www.starta-spa.se",
]

function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return false

  // Allow localhost in development
  if (process.env.NODE_ENV === "development" && origin.includes("localhost")) {
    return true
  }

  return ALLOWED_ORIGIN_PATTERNS.some((allowed) => origin === allowed)
}

export async function POST(req: NextRequest) {
  try {
    const headersList = await headers()
    const origin = headersList.get("origin")
    const host = headersList.get("host") || ""
    const userAgent = headersList.get("user-agent") || null

    // Security: validate origin
    if (!isAllowedOrigin(origin)) {
      console.warn("[Tracking] Forbidden origin:", origin)
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    // Parse request body
    const body = await req.json()
    const { siteId, path, referrer } = body

    // Validate required fields
    if (!siteId || !path) {
      return NextResponse.json({ error: "Missing required fields: siteId, path" }, { status: 400 })
    }

    // Validate that siteId exists in our configuration
    const siteExists = Object.values(siteMap).some((site) => site.id === siteId)
    if (!siteExists) {
      console.warn("[Tracking] Unknown siteId:", siteId)
      return NextResponse.json({ error: "Invalid siteId" }, { status: 400 })
    }

    // Insert pageview
    await insertPageView({
      site_id: siteId,
      host: host,
      path: path,
      referrer: referrer || null,
      user_agent: userAgent,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("[Tracking] Error logging pageview:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
