import type { Metadata } from 'next';
import type { Lang } from '@/i18n/translations';
import { t } from '@/i18n/translations';
import { HeroSection } from '@/components/fund/HeroSection';
import { MethodologyGrid } from '@/components/fund/MethodologyGrid';
import { StudioPipeline } from '@/components/fund/StudioPipeline';
import { LiveFeedSection } from '@/components/fund/LiveFeedSection';
import { MiniFooter } from '@/components/fund/MiniFooter';

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
  const url = `${base}/${lang}/fund`;
  const ogImage = lang === 'ru' ? '/og-ru.png' : '/og-en.png';

  return {
    title: tr.fundTitle,
    description: tr.fundDesc,
    alternates: {
      canonical: url,
      languages: {
        ru: `${base}/ru/fund`,
        en: `${base}/en/fund`,
      },
    },
    openGraph: {
      title: tr.fundTitle,
      description: tr.fundDesc,
      url,
      siteName: tr.siteName,
      images: [{ url: `${base}${ogImage}`, width: 1200, height: 630 }],
      locale: lang === 'ru' ? 'ru_RU' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: tr.fundTitle,
      description: tr.fundDesc,
      images: [`${base}${ogImage}`],
    },
  };
}

// ============================================================================
// TYPES & DATA
// ============================================================================
interface MethodologyTool {
  id: string;
  nameKey: string;
  category: 'scanning' | 'analysis' | 'synthesis';
  descriptionKey: string;
}

const METHODOLOGY_TOOLS: MethodologyTool[] = [
  { id: 'm1', nameKey: 'toolHorizon', category: 'scanning', descriptionKey: 'toolHorizonDesc' },
  { id: 'm2', nameKey: 'toolWeakSignals', category: 'scanning', descriptionKey: 'toolWeakSignalsDesc' },
  { id: 'm3', nameKey: 'toolSTEEP', category: 'scanning', descriptionKey: 'toolSTEEPDesc' },
  { id: 'm4', nameKey: 'tool6Hats', category: 'analysis', descriptionKey: 'tool6HatsDesc' },
  { id: 'm5', nameKey: 'toolCLA', category: 'analysis', descriptionKey: 'toolCLADesc' },
  { id: 'm6', nameKey: 'toolTrendImpact', category: 'analysis', descriptionKey: 'toolTrendImpactDesc' },
  { id: 'm7', nameKey: 'toolScenarios', category: 'synthesis', descriptionKey: 'toolScenariosDesc' },
  { id: 'm8', nameKey: 'toolFutureWheels', category: 'synthesis', descriptionKey: 'toolFutureWheelsDesc' },
  { id: 'm9', nameKey: 'toolBackcasting', category: 'synthesis', descriptionKey: 'toolBackcastingDesc' },
];

// ============================================================================
// BACKGROUND LAYERS (скопировано с главной страницы)
// ============================================================================
const BackgroundLayers = () => (
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute inset-0 bg-linear-to-b from-white/2 via-transparent to-black/74" />
    <div className="absolute -top-40 -left-40 h-130 w-130 rounded-full bg-indigo-400/10 blur-3xl" />
    <div className="absolute -bottom-56 -right-40 h-155 w-155 rounded-full bg-cyan-300/10 blur-3xl" />

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

    <div
      className="absolute inset-0 opacity-[2.10]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 50%, rgba(255,255,255,.06), transparent 60%)",
        mixBlendMode: "screen",
      }}
    />

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
export default async function FundPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const tr = t(lang);

  return (
    <main className="min-h-screen w-full bg-[#01062d] text-gray-200 relative overflow-hidden">
      <BackgroundLayers />

      <section className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 py-1 sm:py-0">
        
        <header className="mb-10 sm:mb-12">
          <HeroSection 
            id="hero" 
            title={tr.fundHeroTitle} 
            subtitle={tr.fundHeroSubtitle}
            ctaPrimary={tr.fundCTAExplore}
            ctaSecondary={tr.fundCTAStudio}
            lang={lang}
          />
        </header>

        <MethodologyGrid
          id="methodology"
          title={tr.methodologyTitle}
          subtitle={tr.methodologySubtitle}
          tools={METHODOLOGY_TOOLS}
          lang={lang}
        />

        <StudioPipeline
          id="studio"
          title={tr.studioIntegrationTitle}
          subtitle={tr.studioIntegrationSubtitle}
          lang={lang}
        />

        <LiveFeedSection
          id="insights"
          title={tr.liveFeedTitle}
          lang={lang}
        />

        <footer className="mt-16 border-t border-white/10 pt-12">
          <MiniFooter lang={lang} />
        </footer>
      </section>
    </main>
  );
}