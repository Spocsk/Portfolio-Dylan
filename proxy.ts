import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { localeFromPathname } from "./lib/i18n";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host");

  if (host === "dylan-cdo.fr") {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = "www.dylan-cdo.fr";
    return NextResponse.redirect(url, 308);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-portfolio-locale", localeFromPathname(request.nextUrl.pathname));

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
