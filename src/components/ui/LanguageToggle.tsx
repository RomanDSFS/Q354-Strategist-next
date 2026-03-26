// src/components/ui/LanguageToggle.tsx
import { useLanguage } from '../../i18n/LanguageContext';

export const LanguageToggle = () => {
  const { lang, toggleLanguage } = useLanguage();

  // Показываем НЕ текущий язык, а тот, на который можно переключиться
  const nextLang = lang === 'ru' ? 'EN' : 'RU';

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 text-bold font-bold text-blue-600 rounded hover:bg-gray-700 transition"
      aria-label={`Switch to ${nextLang}`}
    >
      {nextLang}
    </button>
  );
};