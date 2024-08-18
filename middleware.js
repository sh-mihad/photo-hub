import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

const locales = ["bn", "en"];
const defaultLocales = "en";

const getLocale = (request) => {
  const acceptedLanguage = request.headers.get("accept-language") ?? undefined;
  const headers = { "accept-language": acceptedLanguage };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocales);
};

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const pathnameIsLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && !pathname.startsWith(`/${locale}`)
  );

  if (pathnameIsLocale) {
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    console.log("url-",request.nextUrl);
    return NextResponse.redirect(request.nextUrl)
  }

  return NextResponse.next();
}

// export const config = {
//   matcher: [
//     // Skip all internal paths (_next)
//     "/((?!_next).*)",
//     // Optional: only run on root (/) URL
//     // '/'
//   ],
// };
export const config = {
    matcher: [
      // Skip all internal paths (_next, assets, api)
      '/((?!api|assets|.*\\..*|_next).*)',
      // Optional: only run on root (/) URL
      // '/'
    ],
  }
