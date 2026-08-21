import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import {
  isLocalizablePath,
  isPrefixedLocale,
  localeCookieMaxAge,
  localeCookieName,
  localeFromAcceptLanguage,
  localeFromPathname,
  localizePath,
  parseLocale,
} from "./lib/i18n";

const localeCookieOptions = {
  maxAge: localeCookieMaxAge,
  path: "/",
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
};

function addLocaleVaryHeader(response: NextResponse) {
  const currentVary = response.headers.get("Vary");
  response.headers.set(
    "Vary",
    currentVary ? `${currentVary}, Accept-Language, Cookie` : "Accept-Language, Cookie",
  );
}

function rememberLocale(response: NextResponse, locale: "fr" | "en" | "es") {
  response.cookies.set(localeCookieName, locale, localeCookieOptions);
  addLocaleVaryHeader(response);
  return response;
}

export function proxy(request: NextRequest) {
  const host = request.headers.get("host");

  if (host === "dylan-cdo.fr") {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = "www.dylan-cdo.fr";
    return NextResponse.redirect(url, 308);
  }

  const pathname = request.nextUrl.pathname;
  const pathnameLocale = localeFromPathname(pathname);
  const firstSegment = pathname.split("/")[1];

  if (isPrefixedLocale(firstSegment)) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-portfolio-locale", pathnameLocale);
    const response = NextResponse.next({ request: { headers: requestHeaders } });
    return rememberLocale(response, pathnameLocale);
  }

  if (isLocalizablePath(pathname)) {
    const storedLocale = parseLocale(request.cookies.get(localeCookieName)?.value);
    const preferredLocale =
      storedLocale ?? localeFromAcceptLanguage(request.headers.get("accept-language"));

    if (preferredLocale !== "fr") {
      const url = request.nextUrl.clone();
      url.pathname = localizePath(pathname, preferredLocale);
      return rememberLocale(NextResponse.redirect(url, 307), preferredLocale);
    }

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-portfolio-locale", "fr");
    const response = NextResponse.next({ request: { headers: requestHeaders } });
    return rememberLocale(response, "fr");
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-portfolio-locale", pathnameLocale);

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|favicon.svg|favicon-16x16.png|favicon-32x32.png|apple-touch-icon.png|robots.txt|sitemap.xml|llms.txt|assets/|fonts/).*)",
  ],
};
