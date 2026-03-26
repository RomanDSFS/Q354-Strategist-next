'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Lang } from '@/i18n/translations';
import { t as tt } from '@/i18n/translations';

// Внешние ссылки
const foresightTools = [
  { name: '6 Tools Site', url: 'https://q354sight.vercel.app' },
  // { name: 'Scenario Analysis', url: 'https://foresight-scenario-analysis.vercel.app' },
];

const decisionMakers = [
  { name: '3 Tools Site', url: 'https://q354decision-makers.vercel.app/' },
];

const checkIdeaTools = [
  { name: '12 Tools Site', url: 'https://q354-idea-validation-toolkit.vercel.app' },
];

type Props = {
  lang: Lang;
};

export function Header({ lang }: Props) {
  const tr = tt(lang);

  const pathname = usePathname(); // например "/ru/fund"
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = (menuName: string) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const closeMenus = () => {
    setOpenMenu(null);
    setIsMobileMenuOpen(false);
  };

  // Переключение языка с сохранением текущего пути
  const otherLang: Lang = lang === 'ru' ? 'en' : 'ru';

  const switchHref = useMemo(() => {
    // pathname уже содержит "/ru/..." или "/en/..."
    // заменяем префикс на другой язык
    const replaced = pathname.replace(/^\/(ru|en)(?=\/|$)/, `/${otherLang}`);

    // если вдруг пользователь на "/" (не должно, но на всякий)
    if (replaced === '/' || replaced === '') return `/${otherLang}`;

    return replaced;
  }, [pathname, otherLang]);

  return (
    <header className="bg-gray-800 text-gray-200 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between relative">
        {/* Логотип */}
        <Link
          href={`/${lang}`}
          className="flex items-center gap-2 hover:text-gray-400 transition"
          onClick={closeMenus}
        >
          <img src="/logo.png" alt="Q354 Logo" className="h-14 w-auto" />
          <span className="text-xl font-bold">Q354 Strategist</span>
        </Link>

        {/* Мобильный гамбургер */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>

        {/* Десктоп меню */}
        <nav className="hidden md:flex items-center gap-x-1 relative">
          <Link
            href={`/${lang}/fund`}
            className="px-3 py-2 text-sm font-medium rounded hover:bg-gray-700 transition"
            onClick={closeMenus}
          >
            {tr.fund}
          </Link>

          <Link
            href={`/${lang}/studio`}
            className="px-3 py-2 text-sm font-medium rounded hover:bg-gray-700 transition"
            onClick={closeMenus}
          >
            {tr.studio}
          </Link>

          {/* Форсайт */}
          <div className="relative">
            <button
              onClick={() => toggleMenu('foresight')}
              className="px-3 py-2 text-sm font-medium rounded hover:bg-gray-700 transition flex items-center gap-1"
              aria-expanded={openMenu === 'foresight'}
              aria-haspopup="menu"
            >
              {tr.foresight}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openMenu === 'foresight' && (
              <div className="absolute left-0 mt-1 w-52 bg-gray-700 text-white shadow-lg rounded-md z-10">
                {foresightTools.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm hover:bg-gray-600"
                    onClick={closeMenus}
                  >
                    {tool.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Decision Making */}
          <div className="relative">
            <button
              onClick={() => toggleMenu('decision')}
              className="px-3 py-2 text-sm font-medium rounded hover:bg-gray-700 transition flex items-center gap-1"
              aria-expanded={openMenu === 'decision'}
              aria-haspopup="menu"
            >
              {tr.decisionMaker}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openMenu === 'decision' && (
              <div className="absolute left-0 mt-1 w-52 bg-gray-700 text-white shadow-lg rounded-md z-10">
                {decisionMakers.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm hover:bg-gray-600"
                    onClick={closeMenus}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Check Idea */}
          <div className="relative">
            <button
              onClick={() => toggleMenu('checkIdea')}
              className="px-3 py-2 text-sm font-medium rounded hover:bg-gray-700 transition flex items-center gap-1"
              aria-expanded={openMenu === 'checkIdea'}
              aria-haspopup="menu"
            >
              {tr.checkIdea}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openMenu === 'checkIdea' && (
              <div className="absolute left-0 mt-1 w-56 bg-gray-700 text-white shadow-lg rounded-md z-10 max-h-60 overflow-y-auto">
                {checkIdeaTools.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm hover:bg-gray-600 whitespace-nowrap"
                    onClick={closeMenus}
                  >
                    {tool.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <Link
            href={`/${lang}/contacts`}
            className="px-3 py-2 text-sm font-medium rounded hover:bg-gray-700 transition"
            onClick={closeMenus}
          >
            {tr.contacts}
          </Link>

          {/* Переключатель языка (URL-based) */}
          <Link
            href={switchHref}
            className="px-3 py-2 text-bold font-bold text-blue-600 rounded hover:bg-gray-700 transition"
            onClick={closeMenus}
            aria-label="Switch language"
          >
            {otherLang.toUpperCase()}
          </Link>
        </nav>

        {/* Мобильное меню */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-800 shadow-lg z-40">
            <div className="flex flex-col p-4 space-y-3">
              <Link
                href={`/${lang}/fund`}
                className="px-3 py-2 text-sm font-medium rounded hover:bg-gray-700 transition"
                onClick={closeMenus}
              >
                {tr.fund}
              </Link>

              <Link
                href={`/${lang}/studio`}
                className="px-3 py-2 text-sm font-medium rounded hover:bg-gray-700 transition"
                onClick={closeMenus}
              >
                {tr.studio}
              </Link>

              {/* Выпадашки для мобильного */}
              <div className="border-t border-gray-700 pt-3">
                <button
                  onClick={() => toggleMenu('foresight')}
                  className="w-full text-left px-3 py-2 text-sm font-medium rounded hover:bg-gray-700 transition flex items-center justify-between"
                  aria-expanded={openMenu === 'foresight'}
                >
                  {tr.foresight}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transition-transform ${openMenu === 'foresight' ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openMenu === 'foresight' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {foresightTools.map((tool) => (
                      <a
                        key={tool.name}
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-1 text-xs hover:bg-gray-700 rounded"
                        onClick={closeMenus}
                      >
                        {tool.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t border-gray-700 pt-3">
                <button
                  onClick={() => toggleMenu('decision')}
                  className="w-full text-left px-3 py-2 text-sm font-medium rounded hover:bg-gray-700 transition flex items-center justify-between"
                  aria-expanded={openMenu === 'decision'}
                >
                  {tr.decisionMaker}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transition-transform ${openMenu === 'decision' ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openMenu === 'decision' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {decisionMakers.map((item) => (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-1 text-xs hover:bg-gray-700 rounded"
                        onClick={closeMenus}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t border-gray-700 pt-3">
                <button
                  onClick={() => toggleMenu('checkIdea')}
                  className="w-full text-left px-3 py-2 text-sm font-medium rounded hover:bg-gray-700 transition flex items-center justify-between"
                  aria-expanded={openMenu === 'checkIdea'}
                >
                  {tr.checkIdea}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transition-transform ${openMenu === 'checkIdea' ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openMenu === 'checkIdea' && (
                  <div className="ml-4 mt-2 space-y-1 max-h-32 overflow-y-auto">
                    {checkIdeaTools.map((tool) => (
                      <a
                        key={tool.name}
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-1 text-xs hover:bg-gray-700 rounded"
                        onClick={closeMenus}
                      >
                        {tool.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href={`/${lang}/contacts`}
                className="px-3 py-2 text-sm font-medium rounded hover:bg-gray-700 transition"
                onClick={closeMenus}
              >
                {tr.contacts}
              </Link>

              {/* Переключатель языка */}
              <div className="border-t border-gray-700 pt-3">
                <Link
                  href={switchHref}
                  className="inline-flex px-3 py-2 text-sm font-medium rounded border border-gray-600 hover:bg-gray-700 transition"
                  onClick={closeMenus}
                >
                  {otherLang.toUpperCase()}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
