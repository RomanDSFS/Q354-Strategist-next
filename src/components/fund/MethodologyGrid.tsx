'use client';

import { useState } from 'react';
import type { Lang } from '@/i18n/translations';
import { t } from '@/i18n/translations';

interface MethodologyTool {
  id: string;
  nameKey: string;
  category: 'scanning' | 'analysis' | 'synthesis';
  descriptionKey: string;
}

interface MethodologyGridProps {
  id: string;
  title: string;
  subtitle: string;
  tools: MethodologyTool[];
  lang: Lang;
}

const CATEGORY_CONFIG = {
  scanning: {
    label: 'Scanning',
    color: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    icon: '🔍',
  },
  analysis: {
    label: 'Analysis',
    color: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    icon: '🧠',
  },
  synthesis: {
    label: 'Synthesis',
    color: 'bg-green-500/10 text-green-400 border-green-500/20',
    icon: '🔮',
  },
};

// Дизайн-токены как на главной странице
const cardBase = "rounded-2xl border border-white/10";
const cardPad = "p-5 sm:p-6";
const cardHover = "transition hover:border-amber-500/30 hover:shadow-[0_0_32px_rgba(245,158,11,0.08)]";

export const MethodologyGrid: React.FC<MethodologyGridProps> = ({
  id,
  title,
  subtitle,
  tools,
  lang,
}) => {
  const [activeCategory, setActiveCategory] = useState<
    'all' | 'scanning' | 'analysis' | 'synthesis'
  >('all');
  const tr = t(lang);

  const filteredTools =
    activeCategory === 'all'
      ? tools
      : tools.filter((tool) => tool.category === activeCategory);

  return (
    <section id={id} className="mt-8">
      <div className="space-y-6">
        {/* Header - стили как на главной */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-100">
            {title}
          </h2>
          <p className="text-[17px] leading-7 text-gray-200/85 max-w-[65ch]">
            {subtitle}
          </p>
        </div>

        {/* Category Filter - адаптированные стили */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-amber-400/20 text-amber-400 border border-amber-400/30'
                : 'bg-white/5 text-gray-200/70 border border-white/10 hover:bg-white/10 hover:text-gray-100'
            }`}
          >
            All
          </button>
          {(Object.keys(CATEGORY_CONFIG) as Array<keyof typeof CATEGORY_CONFIG>).map(
            (category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? CATEGORY_CONFIG[category].color + ' border'
                    : 'bg-white/5 text-gray-200/70 border border-white/10 hover:bg-white/10 hover:text-gray-100'
                }`}
              >
                {CATEGORY_CONFIG[category].icon} {CATEGORY_CONFIG[category].label}
              </button>
            )
          )}
        </div>

        {/* Tools Grid - с карточками как на главной */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className={`${cardBase} ${cardPad} ${cardHover} bg-white/5`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <span
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${CATEGORY_CONFIG[tool.category].color} border`}
                >
                  {CATEGORY_CONFIG[tool.category].icon}
                </span>
                <h3 className="font-semibold text-gray-100">
                  {tr[tool.nameKey as keyof typeof tr] || tool.nameKey}
                </h3>
              </div>
              <p className="text-sm text-gray-200/80 leading-relaxed">
                {tr[tool.descriptionKey as keyof typeof tr] || tool.descriptionKey}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};