'use client';

import { useState, useEffect } from 'react';
import type { Lang } from '@/i18n/translations';
import { t } from '@/i18n/translations';

interface LiveFeedSectionProps {
  id: string;
  title: string;
  lang: Lang;
}

interface FeedItem {
  id: string;
  type: 'signal' | 'scenario' | 'update';
  title: string;
  timestamp: string;
  confidence: 'high' | 'medium' | 'low';
}

const MOCK_FEED: FeedItem[] = [
  {
    id: '1',
    type: 'signal',
    title: 'Quantum computing breakthrough in drug discovery',
    timestamp: '2 hours ago',
    confidence: 'high',
  },
  {
    id: '2',
    type: 'scenario',
    title: 'Energy 2030: Decentralized grid scenario updated',
    timestamp: '5 hours ago',
    confidence: 'medium',
  },
  {
    id: '3',
    type: 'update',
    title: 'New hypothesis validated: AI-powered supply chain',
    timestamp: '1 day ago',
    confidence: 'high',
  },
];

const TYPE_CONFIG = {
  signal: { label: 'Signal', color: 'text-blue-400', bgColor: 'bg-blue-400/10', icon: '📡' },
  scenario: { label: 'Scenario', color: 'text-purple-400', bgColor: 'bg-purple-400/10', icon: '🔮' },
  update: { label: 'Update', color: 'text-green-400', bgColor: 'bg-green-400/10', icon: '✅' },
};

const CONFIDENCE_CONFIG = {
  high: { label: 'High', color: 'text-green-400' },
  medium: { label: 'Medium', color: 'text-amber-400' },
  low: { label: 'Low', color: 'text-red-400' },
};

const cardBase = "rounded-2xl border border-white/10";
const cardPad = "p-5 sm:p-6";
const cardHover = "transition hover:border-amber-500/30 hover:shadow-[0_0_32px_rgba(245,158,11,0.08)]";

export const LiveFeedSection: React.FC<LiveFeedSectionProps> = ({
  id,
  title,
  lang,
}) => {
  const tr = t(lang);
  const [feedItems, setFeedItems] = useState<FeedItem[]>(MOCK_FEED);
  const [query, setQuery] = useState('');

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      // In production, fetch from API
      console.log('Checking for new signals...');
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id={id} className="mt-12">
      <div className="space-y-6">
        {/* Header - стили как на главной */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-100">
              {title}
            </h2>
            <p className="text-[17px] leading-7 text-gray-200/85 max-w-[65ch]">
              {tr.liveFeedSubtitle || 'Real-time weak signals and scenario updates'}
            </p>
          </div>

          {/* AI Query Input */}
          <div className="w-full lg:w-96">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={tr.askAI || 'Ask GPT-4o about trends...'}
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-gray-100 placeholder:text-gray-200/50 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/50 transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-amber-400/20 text-amber-400 hover:bg-amber-400/30 transition-all">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Feed Items */}
        <div className="space-y-3">
          {feedItems.map((item) => (
            <div
              key={item.id}
              className={`${cardBase} ${cardPad} ${cardHover} bg-white/5 group`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start space-x-4 flex-1">
                  {/* Type Badge */}
                  <div
                    className={`w-10 h-10 rounded-xl ${TYPE_CONFIG[item.type].bgColor} flex items-center justify-center text-lg shrink-0`}
                  >
                    {TYPE_CONFIG[item.type].icon}
                  </div>

                  {/* Content */}
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center space-x-2">
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${TYPE_CONFIG[item.type].bgColor} ${TYPE_CONFIG[item.type].color}`}
                      >
                        {TYPE_CONFIG[item.type].label}
                      </span>
                      <span
                        className={`text-xs ${CONFIDENCE_CONFIG[item.confidence].color}`}
                      >
                        ● {CONFIDENCE_CONFIG[item.confidence].label} Confidence
                      </span>
                    </div>
                    <h3 className="font-medium text-gray-100 group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-200/60">
                      {item.timestamp}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <svg
                  className="w-5 h-5 text-gray-200/50 group-hover:text-amber-400 transition-colors shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center pt-4">
          <button className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-gray-200/80 font-medium hover:bg-white/10 hover:text-gray-100 hover:border-amber-400/30 transition-all">
            {tr.loadMore || 'Load More Signals'}
          </button>
        </div>
      </div>
    </section>
  );
};