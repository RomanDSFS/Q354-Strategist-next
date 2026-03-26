import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const SUPPORTED = ['ru', 'en'] as const;

function getPreferredLang(req: NextRequest) {
  const header = req.headers.get('accept-language') || '';
  // грубо, но эффективно: ищем ru/en
  if (header.toLowerCase().includes('ru')) return 'ru';
  if (header.toLowerCase().includes('en')) return 'en';
  return 'ru';
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // пропускаем системные пути
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/robots') ||
    pathname.startsWith('/sitemap') ||
    pathname.startsWith('/manifest') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // если уже есть /ru или /en в начале — ок
  const hasLangPrefix = SUPPORTED.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLangPrefix) return NextResponse.next();

  // редирект на язык
  const lang = getPreferredLang(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${lang}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api).*)'],
};
