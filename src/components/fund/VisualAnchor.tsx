'use client';

import { useEffect, useState } from 'react';
import type { Lang } from '@/i18n/translations';
import { t } from '@/i18n/translations';

interface VisualAnchorData {
  id: string;
  type: 'abstract' | 'radar' | 'live-data';
  captionKey: string;
  linkedSectionId: string;
  icon?: string;
}

interface VisualAnchorProps {
  data: VisualAnchorData;
  lang: Lang;
}

export const VisualAnchor: React.FC<VisualAnchorProps> = ({ data, lang }) => {
  const [isActive, setIsActive] = useState(false);
  const tr = t(lang);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      }
    );

    const section = document.getElementById(data.linkedSectionId);
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, [data.linkedSectionId]);

  const getVisualContent = () => {
    switch (data.type) {
      case 'abstract':
        return (
          <div className="w-full h-32 bg-linear-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center overflow-hidden">
            <div className="text-4xl opacity-50 animate-pulse">{data.icon}</div>
            <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10" />
          </div>
        );
      case 'radar':
        return (
          <div className="w-full h-32 bg-muted/50 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="w-20 h-20 border-2 border-primary/30 rounded-full animate-spin-slow" />
            <div className="absolute w-12 h-12 border border-secondary/50 rounded-full" />
            <div className="text-2xl">{data.icon}</div>
          </div>
        );
      case 'live-data':
        return (
          <div className="w-full h-32 bg-background border border-border rounded-lg flex flex-col items-center justify-center space-y-2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-primary rounded-full animate-pulse"
                  style={{
                    height: `${Math.random() * 24 + 8}px`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">{data.icon}</span>
          </div>
        );
    }
  };

  return (
    <div
      className={`space-y-3 transition-all duration-300 ${
        isActive ? 'opacity-100 scale-105' : 'opacity-60 scale-100'
      }`}
    >
      {getVisualContent()}
      <div className="space-y-1">
        <p className="text-sm font-medium text-foreground">
          {tr[data.captionKey as keyof typeof tr] || data.captionKey}
        </p>
        <div
          className={`h-0.5 w-8 rounded-full transition-all duration-300 ${
            isActive ? 'bg-primary w-12' : 'bg-muted'
          }`}
        />
      </div>
    </div>
  );
};