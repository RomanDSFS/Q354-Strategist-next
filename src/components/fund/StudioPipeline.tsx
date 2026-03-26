'use client';

import type { Lang } from '@/i18n/translations';
import { t } from '@/i18n/translations';

interface StudioPipelineProps {
  id: string;
  title: string;
  subtitle: string;
  lang: Lang;
}

const PIPELINE_STAGES = [
  {
    stage: 'Signal',
    icon: '📡',
    description: 'Weak signal detected',
    color: 'border-blue-400/50',
  },
  {
    stage: 'Hypothesis',
    icon: '💡',
    description: 'Hypothesis formed',
    color: 'border-purple-400/50',
  },
  {
    stage: 'Prototype',
    icon: '🔨',
    description: 'MVP developed',
    color: 'border-amber-400/50',
  },
  {
    stage: 'Startup',
    icon: '🚀',
    description: 'Spin-off launched',
    color: 'border-green-400/50',
  },
];

const CASE_STUDIES = [
  {
    id: 1,
    signal: 'AI in Biotech',
    hypothesis: 'Automated drug discovery',
    status: 'In Studio',
    progress: 65,
  },
  {
    id: 2,
    signal: 'Climate Tech',
    hypothesis: 'Carbon capture IoT',
    status: 'Prototype',
    progress: 40,
  },
  {
    id: 3,
    signal: 'Web3 Identity',
    hypothesis: 'Decentralized KYC',
    status: 'Prototype',
    progress: 60,
  },
];

const cardBase = "rounded-2xl border border-white/10";
const cardPad = "p-5 sm:p-6";
const cardHover = "transition hover:border-amber-500/30 hover:shadow-[0_0_32px_rgba(245,158,11,0.08)]";

export const StudioPipeline: React.FC<StudioPipelineProps> = ({
  id,
  title,
  subtitle,
  lang,
}) => {
  const tr = t(lang);

  return (
    <section id={id} className="mt-12">
      <div className="space-y-8">
        {/* Header - стили как на главной */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-100">
            {title}
          </h2>
          <p className="text-[17px] leading-7 text-gray-200/85 max-w-[65ch]">
            {subtitle}
          </p>
        </div>

        {/* Pipeline Visualization */}
        <div className="relative py-8">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-linear-to-r from-blue-400/30 via-purple-400/30 to-green-400/30" />

          {/* Stages */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {PIPELINE_STAGES.map((stage, index) => (
              <div key={stage.stage} className="relative">
                <div
                  className={`w-16 h-16 mx-auto rounded-full border-2 ${stage.color} bg-[#01062d] flex items-center justify-center text-2xl mb-4 relative z-10`}
                >
                  {stage.icon}
                </div>
                <div className="text-center space-y-1">
                  <p className="font-semibold text-gray-100">{stage.stage}</p>
                  <p className="text-xs text-gray-200/70">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies Cards */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-100">
            {tr.studioCases || 'Active Cases'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CASE_STUDIES.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className={`${cardBase} ${cardPad} ${cardHover} bg-white/5`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-amber-400/20 text-amber-400">
                    {caseStudy.status}
                  </span>
                  <span className="text-xs text-gray-200/60">
                    #{caseStudy.id}
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-200/60 uppercase tracking-wide">
                      Signal
                    </p>
                    <p className="font-medium text-gray-100">
                      {caseStudy.signal}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-200/60 uppercase tracking-wide">
                      Hypothesis
                    </p>
                    <p className="text-sm text-gray-200/80">
                      {caseStudy.hypothesis}
                    </p>
                  </div>
                  {/* Progress Bar */}
                  <div className="pt-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-200/60">Progress</span>
                      <span className="text-gray-100">
                        {caseStudy.progress}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-400/80 rounded-full transition-all duration-500"
                        style={{ width: `${caseStudy.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};