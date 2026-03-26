'use client';

import { useRouter } from 'next/navigation';
import type { Lang } from '@/i18n/translations';

interface MiniFooterProps {
  lang: Lang;
}

export const MiniFooter: React.FC<MiniFooterProps> = ({ lang }) => {
  const router = useRouter();

  const switchLanguage = () => {
    const newLang = lang === 'ru' ? 'en' : 'ru';
    router.push(`/${newLang}/fund`);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="space-y-6">
      {/* Language Switcher */}
      

      {/* Quick Links 
      <div className="space-y-2 text-xs text-muted-foreground">
        <a
          href={`/${lang}/fund/methodology`}
          className="block hover:text-foreground transition-colors"
        >
          Methodology
        </a>
        <a
          href={`/${lang}/fund/studio`}
          className="block hover:text-foreground transition-colors"
        >
          Startup Studio
        </a>
        <a
          href={`/${lang}/fund/reports`}
          className="block hover:text-foreground transition-colors"
        >
          Reports
        </a>
      </div>*/}

      {/* Copyright */}
      <div className="pt-4 border-t border-border/40">
        <p className="text-xs text-muted-foreground">
          {currentYear} Q354 Strategist
        </p>
        
      </div>

      {/* Social Links */}
      <div className="flex space-x-3 pt-2">
        {['github', 'twitter', 'linkedin'].map((social) => (
          <a
            key={social}
            href={`https://${social}.com/q354`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all"
          >
            <span className="text-xs uppercase">{social[0]}</span>
          </a>
        ))}
      </div>
    </div>
  );
};