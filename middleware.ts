import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Only handle dev_site in development
  if (process.env.NODE_ENV === "development") {
    const devSite = request.nextUrl.searchParams.get("dev_site")

    if (devSite) {
      const response = NextResponse.next()
      response.cookies.set("dev_site", devSite, {
        maxAge: 60 * 60 * 24, // 24 hours
        path: "/",
      })
      return response
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/:path*",
}
