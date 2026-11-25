import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Send the bare domain to www so every page has a single canonical host.
export function proxy(request: NextRequest) {
  const host = request.headers.get("host");

  if (host === "dylan-cdo.fr" || host === "dylan-cdo.fr:3000") {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.hostname = "www.dylan-cdo.fr";
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|favicon.svg|favicon-16x16.png|favicon-32x32.png|apple-touch-icon.png|robots.txt|sitemap.xml|llms.txt|assets/|fonts/).*)",
  ],
};
