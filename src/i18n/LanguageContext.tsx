// src/i18n/LanguageContext.tsx
'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Lang } from './translations';

type LanguageContextType = {
  lang: Lang;
  toggleLanguage: () => void;
  setLanguage: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ru');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Lang;
    if (savedLang && (savedLang === 'ru' || savedLang === 'en')) {
      setLang(savedLang);
    }
  }, []);

  const setLanguage = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem('language', newLang);
  };

  const toggleLanguage = () => {
    const newLang = lang === 'ru' ? 'en' : 'ru';
    setLanguage(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}