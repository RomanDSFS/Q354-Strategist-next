'use client';

import { useRouter } from 'next/navigation';
import type { Lang } from '@/i18n/translations';

interface HeroSectionProps {
  id: string;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  lang: Lang;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  id,
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  lang,
}) => {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(`/${lang}${path}`);
  };

  return (
    <section
      id={id}
      className="min-h-[90vh] flex flex-col justify-center px-6 py-20 lg:px-12 border-b border-border/40"
    >
      <div className="max-w-4xl space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-xs font-medium text-primary">
            Research → Validation → Startup
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button
            onClick={() => handleNavigate('/fund/insights')}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {ctaPrimary}
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>

          <button
            onClick={() => handleNavigate('/fund/studio')}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border bg-background text-foreground font-medium hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-border focus:ring-offset-2"
          >
            {ctaSecondary}
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-6 pt-12 border-t border-border/40">
          {[
            { label: 'Tools', value: '9' },
            { label: 'Signals', value: '250+' },
            { label: 'Startups', value: '12' },
          ].map((stat) => (
            <div key={stat.label} className="space-y-1">
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};