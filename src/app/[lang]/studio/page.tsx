import type { Metadata } from 'next';
import Link from 'next/link';
import type { Lang } from '@/i18n/translations';
import { t } from '@/i18n/translations';

const STUDIO_URL = 'https://q354-startup-studio.vercel.app/';

// ============================================================================
// METADATA
// ============================================================================
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const tr = t(lang);
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const url = `${base}/${lang}/studio`;
  const ogImage = lang === 'ru' ? '/og-ru.png' : '/og-en.png';

  return {
    title: tr.studioTitle,
    description: tr.studioDesc,
    alternates: {
      canonical: url,
      languages: {
        ru: `${base}/ru/studio`,
        en: `${base}/en/studio`,
      },
    },
    openGraph: {
      title: tr.studioTitle,
      description: tr.studioDesc,
      url,
      siteName: tr.siteName,
      images: [{ url: `${base}${ogImage}`, width: 1200, height: 630 }],
      locale: lang === 'ru' ? 'ru_RU' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: tr.studioTitle,
      description: tr.studioDesc,
      images: [`${base}${ogImage}`],
    },
  };
}

// ============================================================================
// BACKGROUND LAYERS (как на главной странице)
// ============================================================================
const BackgroundLayers = () => (
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute inset-0 bg-linear-to-b from-white/2 via-transparent to-black/74" />
    <div className="absolute -top-40 -left-40 h-130 w-130 rounded-full bg-indigo-400/10 blur-3xl" />
    <div className="absolute -bottom-56 -right-40 h-155 w-155 rounded-full bg-cyan-300/10 blur-3xl" />

    {/* Слой звёзд 1: мелкие, тусклые */}
    <div
      className="absolute inset-0 opacity-[0.32]"
      style={{
        backgroundImage: `
          radial-gradient(2px 2px at 10% 20%, rgba(255,255,255,.55) 50%, transparent 52%),
          radial-gradient(3px 2px at 30% 80%, rgba(255,255,255,.45) 50%, transparent 1%),
          radial-gradient(2px 3px at 55% 35%, rgba(255,255,255,.35) 50%, transparent 32%),
          radial-gradient(3px 2px at 75% 15%, rgba(255,255,255,.40) 50%, transparent 32%),
          radial-gradient(2px 2px at 90% 70%, rgba(255,255,255,.30) 50%, transparent 66%)
        `,
        backgroundSize: "360px 260px",
        backgroundRepeat: "repeat",
      }}
    />

    {/* Слой звёзд 2: редкие, яркие */}
    <div
      className="absolute inset-0 opacity-[4.70]"
      style={{
        backgroundImage: `
          radial-gradient(1.5px 3.5px at 20% 40%, rgba(255,255,255,.85) 50%, transparent 5%),
          radial-gradient(2.8px 1.8px at 70% 60%, rgba(255,255,255,.75) 50%, transparent 5%),
          radial-gradient(2.2px 1.2px at 85% 25%, rgba(255,255,255,.65) 50%, transparent 5%)
        `,
        backgroundSize: "520px 620px",
        backgroundRepeat: "repeat",
        filter: "blur(2.2px)",
      }}
    />

    {/* Слой звёзд 3: шум/зерно */}
    <div
      className="absolute inset-0 opacity-[2.10]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 50%, rgba(255,255,255,.06), transparent 60%)",
        mixBlendMode: "screen",
      }}
    />

    {/* Паттерн звёзд (тайл) */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: "url(/stars-tile.png)",
        backgroundRepeat: "repeat",
        backgroundSize: "750px 450px",
        opacity: 0.24,
        mixBlendMode: "screen",
        filter: "blur(0.12px)",
      }}
    />
  </div>
);

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default async function StudioPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const tr = t(lang);

  // Дизайн-токены как на главной странице
  const cardBase = "rounded-2xl border border-white/10";
  const cardPad = "p-8 sm:p-10";
  const cardHover = "transition hover:border-amber-500/30 hover:shadow-[0_0_32px_rgba(245,158,11,0.08)]";

  return (
    <main className="min-h-screen w-full bg-[#01062d] text-gray-200 relative overflow-hidden">
      <BackgroundLayers />

      <section className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
        
        {/* Hero Section */}
        <header className="mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-100">
            {tr.studio}
          </h1>
          <p className="mt-4 max-w-[65ch] text-[17px] sm:text-lg leading-7 text-gray-200/85">
            {tr.studioDescription}
          </p>
        </header>

        {/* Main Content Card */}
        <div className={`${cardBase} ${cardPad} ${cardHover} bg-white/5`}>
          <div className="space-y-8">
            {/* Studio Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🚀</span>
                <h2 className="text-2xl font-semibold text-gray-100">
                  {lang === 'ru' ? 'Q354 Startup Studio' : 'Q354 Startup Studio'}
                </h2>
              </div>
              <p className="text-gray-200/80 leading-relaxed">
                {lang === 'ru' 
                  ? 'Инновационная лаборатория, где мы превращаем форсайт-исследования в реальные стартапы. От слабых сигналов до готовых продуктов — мы создаем будущее, которое предсказываем.'
                  : 'An innovation lab where we turn foresight research into real startups. From weak signals to ready products — we create the future we predict.'
                }
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {[
                {
                  icon: '📡',
                  title: lang === 'ru' ? 'Слабые сигналы' : 'Weak Signals',
                  desc: lang === 'ru' 
                    ? 'Выявляем ранние тренды и возможности'
                    : 'Identify early trends and opportunities'
                },
                {
                  icon: '🔬',
                  title: lang === 'ru' ? 'Валидация гипотез' : 'Hypothesis Validation',
                  desc: lang === 'ru'
                    ? 'Тестируем идеи с реальными пользователями'
                    : 'Test ideas with real users'
                },
                {
                  icon: '🚀',
                  title: lang === 'ru' ? 'Запуск стартапов' : 'Launch Startups',
                  desc: lang === 'ru'
                    ? 'Выводим продукты на рынок'
                    : 'Bring products to market'
                }
              ].map((feature, idx) => (
                <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-amber-500/30 transition-all">
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <h3 className="font-semibold text-gray-100 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-200/70">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href={STUDIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-amber-400/20 border border-amber-400/30 text-amber-400 font-medium hover:bg-amber-400/30 hover:border-amber-400/50 transition-all"
              >
                {lang === 'ru' ? 'Перейти на сайт студии' : 'Visit Startup Studio'}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <Link
                href={`/${lang}/contacts`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-gray-200 font-medium hover:bg-white/10 hover:border-amber-400/30 transition-all"
              >
                {lang === 'ru' ? 'Связаться' : 'Contact'}
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="mt-12 text-center">
          <Link
            href={`/${lang}`}
            className="inline-flex items-center text-sm text-gray-200/60 hover:text-amber-400 transition-colors"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {lang === 'ru' ? 'Вернуться на главную' : 'Back to home'}
          </Link>
        </div>
      </section>
    </main>
  );
}