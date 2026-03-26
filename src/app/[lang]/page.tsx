import type { Metadata } from "next";
import Image from "next/image";
import type { Lang } from "@/i18n/translations";
import { t } from "@/i18n/translations";
import {
  FaRegCompass,
  FaFlask,
  FaBookOpen,
  FaChartLine,
  FaBalanceScale,
  FaCheckCircle,
} from "react-icons/fa";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const typedLang = lang as Lang;
  const tr = t(typedLang);

  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const url = `${base}/${typedLang}`;
  const ogImage = typedLang === "ru" ? "/og-ru.png" : "/og-en.png";

  return {
    title: tr.homeTitle,
    description: tr.homeDesc,
    alternates: {
      canonical: url,
      languages: { ru: `${base}/ru`, en: `${base}/en` },
    },
    openGraph: {
      title: tr.homeTitle,
      description: tr.homeDesc,
      url,
      siteName: tr.siteName,
      images: [{ url: `${base}${ogImage}`, width: 1200, height: 630 }],
      locale: typedLang === "ru" ? "ru_RU" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: tr.homeTitle,
      description: tr.homeDesc,
      images: [`${base}${ogImage}`],
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const typedLang = lang as Lang;
  const tr = t(typedLang);

  // --------------------------------------------------------------------------
  // 2.1: Константы и проектные токены // Constants & Design Tokens
  // --------------------------------------------------------------------------

  const images = [
    { src: "/img-1.png", alt: "Image 1" },
    { src: "/img-2.jpg", alt: "Image 2" },
    { src: "/img-3.jpg", alt: "Image 3" },
    { src: "/img-4.jpg", alt: "Image 4" },
    { src: "/img-5.jpg", alt: "Image 5" },
  ] as const;

  const cardBase = "rounded-2xl border border-white/10";
  const cardPad = "p-5 sm:p-6";
  const cardHover = "transition hover:border-amber-500/30 hover:shadow-[0_0_32px_rgba(245,158,11,0.08)]";
  const imageCardBase = "rounded-2xl";
  
  // --------------------------------------------------------------------------
  // 2.2: Фоновые слои (визуальная глубина) // Background Layers (Visual Depth)
  // --------------------------------------------------------------------------

  const BackgroundLayers = () => (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-linear-to-b from-white/2 via-transparent to-black/74" />
      <div className="absolute -top-40 -left-40 h-130 w-130 rounded-full bg-indigo-400/10 blur-3xl" />
      <div className="absolute -bottom-56 -right-40 h-155 w-155 rounded-full bg-cyan-300/10 blur-3xl" />

      {/* Слой звёзд 1: мелкие, тусклые // Stars Layer 1: Small, faint */}
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

      {/* Слой звёзд 2: редкие, яркие // Stars Layer 2: Rare, bright */}
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

      {/* Слой звёзд 3: шум/зерно // Stars Layer 3: Noise/grain overlay */}
      <div
        className="absolute inset-0 opacity-[2.10]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,.06), transparent 60%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Паттерн звёзд (тайл) // Stars tile pattern */}
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

  // --------------------------------------------------------------------------
  // 2.3: Левая колонка — Визуальная библиотека // Left Column — Visual Library
  // --------------------------------------------------------------------------

  const VisualLibrary = () => (
    <aside className="order-2 lg:order-1">
      <div className="lg:sticky lg:top-10">
        {/* Мобильная версия: горизонтальный скролл // Mobile: horizontal scroll */}
        <div className="flex gap-4 overflow-x-auto pb-2 lg:hidden">
          {images.filter((_, i) => i === 0 || i === 1).map((img, i) => (
            <div
              key={img.src}
              className={`overflow-hidden ${imageCardBase} bg-white/5
                shadow-[0_18px_60px_rgba(0,0,0,0.35)]
                w-full max-w-96 mx-auto
                md:max-w-62.5 md:mx-0
                ${i % 2 ? "md:ml-auto" : ""}
              `}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Десктопная версия: сетка // Desktop: grid layout */}
        <div className="hidden lg:grid grid-cols-1 gap-32">
          {images.slice(0, 2).map((img, i) => (
            <div key={img.src} className={`${imageCardBase} overflow-hidden`}>
              <Image
                src={img.src}
                alt={img.alt}
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                priority={i === 0}
              />
            </div>
          ))}
          <p className="text-xs text-gray-200/60 leading-relaxed">
            {tr.visualNote}
          </p>
        </div>
      </div>
    </aside>
  );

  // --------------------------------------------------------------------------
  // 2.4: Правая колонка — Hero-секция // Right Column — Hero Section
  // --------------------------------------------------------------------------

  const HeroSection = () => (
    <header className="mb-10 sm:mb-12">
      <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-100">
        {tr.homeH1}
      </h1>

      <p className="mt-4 max-w-[65ch] text-[17px] sm:text-lg leading-7 text-gray-200/85">
        {tr.homeDesc}
      </p>

      <div className="mt-7 flex flex-wrap gap-6">
        {[
          { k: tr.trustFocusLabel, v: tr.trustFocusValue },
          { k: tr.trustMethodLabel, v: tr.trustMethodValue },
          { k: tr.trustResultLabel, v: tr.trustResultValue },
        ].map((x) => (
          <div
            key={x.k}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm"
          >
            <span className="text-gray-200/70">{x.k}: </span>
            <span className="text-gray-100 font-medium">{x.v}</span>
          </div>
        ))}
      </div>
    </header>
  );

  // --------------------------------------------------------------------------
  // 2.5: Блок структуры — Foundation, Studio, Library
  //      Structure Block — Foundation, Studio, Library
  // --------------------------------------------------------------------------

  const StructureBlock = () => (
    <div className="mt-4 mb-2">
      <h2 className="text-2xl font-semibold text-gray-100 mb-2">
        {tr.structureTitle}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {[
          { icon: FaRegCompass, title: tr.foundationTitle, desc: tr.foundationDesc },
          { icon: FaFlask, title: tr.studioTitle, desc: tr.studioDesc },
          { icon: FaBookOpen, title: tr.libraryTitle, desc: tr.libraryDesc },
        ].map((item, idx) => (
          <div key={idx} className={`${cardBase} ${cardPad} ${cardHover} bg-white/5`}>
            <div className="text-amber-400/80 text-3xl mb-3">
              <item.icon />
            </div>
            <h3 className="text-lg font-semibold text-gray-100 mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-gray-200/80 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  // --------------------------------------------------------------------------
  // 2.6: Основной текстовый контент // Main Content Text Blocks
  // --------------------------------------------------------------------------

  const ContentText = () => (
    <div className="max-w-[70ch] space-y-6 text-[17px] leading-7 text-gray-200/85">
      {tr.homeLead.map((p: string, idx: number) => (
        <p key={idx}>{p}</p>
      ))}
      <p>
        <span className="text-gray-100 font-medium">
          {tr.homeNotSellIllusion}
        </span>{" "}
        {tr.homeBridgeText}{" "}
        <span className="text-amber-400/90 font-medium">
          {tr.homeFlexibility}
        </span>
        , {tr.homeAnd}{" "}
        <span className="text-amber-400/90 font-medium">
          {tr.homeValidation}
        </span>
        .
      </p>
    </div>
  );

  // --------------------------------------------------------------------------
  // 2.7: Шаги рабочего процесса (01, 02, 03)
  //      Workflow Steps (01, 02, 03)
  // --------------------------------------------------------------------------

  const WorkflowSteps = () => (
    <div className="mt-12">
      <h2 className="text-xl font-semibold text-gray-100">
        {tr.workLooksTitle}
      </h2>

      <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {[
          { label: tr.workStep1Label, title: tr.workStep1Title, desc: tr.workStep1Desc },
          { label: tr.workStep2Label, title: tr.workStep2Title, desc: tr.workStep2Desc },
          { label: tr.workStep3Label, title: tr.workStep3Title, desc: tr.workStep3Desc },
        ].map((step, idx) => (
          <div key={idx} className={`${cardBase} ${cardPad} ${cardHover} bg-white/5`}>
            <div className="text-sm text-gray-200/80">
              {String(idx + 1).padStart(2, "0")} — {step.label}
            </div>
            <div className="mt-2 font-semibold text-gray-100">
              {step.title}
            </div>
            <p className="mt-2 text-sm leading-6 text-gray-200/80">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  // --------------------------------------------------------------------------
  // 2.8: Обзор инструментов (21 инструмент)
  //      Tools Overview (21 instruments)
  // --------------------------------------------------------------------------

  const ToolsOverview = () => (
    <div className="mt-16">
      <div className="flex items-baseline gap-2 mb-6">
        <span className="text-5xl font-bold text-amber-400/90">21</span>
        <h2 className="text-2xl font-semibold text-gray-100">
          {tr.toolsTitle}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: FaChartLine, label: "Foresight", count: 6, desc: tr.toolsForesight },
          { icon: FaBalanceScale, label: "Decision Making", count: 3, desc: tr.toolsDecision },
          { icon: FaCheckCircle, label: "Validation", count: 12, desc: tr.toolsValidation },
        ].map((tool, idx) => (
          <div key={idx} className={`${cardBase} ${cardPad} ${cardHover} bg-white/5`}>
            <div className="flex items-center gap-2 mb-3">
              <tool.icon className="text-amber-400/80 text-xl" />
              <span className="text-sm uppercase tracking-wider text-gray-200/70">
                {tool.label}
              </span>
            </div>
            <div className="text-4xl font-light text-amber-400/80 mb-1">
              {tool.count}
            </div>
            <p className="text-xs text-gray-200/70">{tool.desc}</p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-sm text-gray-200/70 italic border-l-2 border-amber-400/40 pl-4">
        {tr.toolsNote}
      </p>
    </div>
  );

  // --------------------------------------------------------------------------
  // 2.9: Футер с призывом к действию // Footer CTA
  // --------------------------------------------------------------------------

  const FooterCTA = () => (
    <div className="mt-16 border-t border-white/10 pt-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <p className="text-3xl sm:text-4xl font-light text-gray-100/90 tracking-tight">
            {tr.footerLine1}
          </p>
          <p className="text-3xl sm:text-4xl font-semibold text-amber-400/90">
            {tr.footerLine2}
          </p>
        </div>
        <a
          href={`/${typedLang}/contacts`}
          className="inline-flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-gray-100 px-6 py-3 font-medium hover:bg-white/20 transition-all shadow-lg"
        >
          {tr.footerCta}
        </a>
      </div>
    </div>
  );

  // --------------------------------------------------------------------------
  // 2.10: Основной макет страницы // Main Layout Render
  // --------------------------------------------------------------------------

  return (
    <main className="min-h-screen w-full bg-[#01062d] text-gray-200 relative overflow-hidden">
      <BackgroundLayers />

      <section className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] gap-10 lg:gap-14 items-start">
          <VisualLibrary />

          <div className="order-1 lg:order-2">
            <HeroSection />
            <StructureBlock />
            <ContentText />
            <WorkflowSteps />
            <ToolsOverview />
            <FooterCTA />
          </div>
        </div>
      </section>
    </main>
  );
}