export type Lang = "ru" | "en";

export const dict = {
  ru: {
    siteName: "Q354 Strategist",
    fund: "Фонд исследований будущего",
    studio: "Студия стартапов",
    foresight: "Форсайт",
    decisionMaker: "Принятие решений",
    checkIdea: "Проверка идеи",
    contacts: "Контакты",

    // SEO
    homeTitle: "Q354 Strategist — стратегия в гармонии с замыслом",
    homeDesc:
      "Инструменты и практика стратегирования в условиях неопределённости: форсайт, принятие решений, валидация идей.",
    fundTitle: "Фонд исследований будущего — Q354 Strategist",
    fundDesc: "Тренды, слабые сигналы, сценарии и долгосрочные последствия решений.",
    studioTitle: "Студия стартапов — Q354 Strategist",
    studioDesc: "Полигон проверки гипотез: от идеи к рабочей бизнес-модели.",
    contactsTitle: "Контакты — Q354 Strategist",
    contactsDesc: "Связаться с Q354 Strategist: сотрудничество, партнёрства, вопросы.",

    // Контент главной страницы
    homeH1: "Человек планирует. Реальность корректирует. Мы помогаем синхронизировать.",
    homeLead: [
      "Наше имя — наш принцип. Q354 — не случайный код. Это напоминание: даже самая проработанная стратегия остаётся человеческой. Мы делаем свою часть системно и качественно, не забывая о контексте, который всегда шире наших планов.",
      "Наша задача — не предсказывать будущее, а создавать среду, в которой решения принимаются осознанно, а гипотезы проверяются до того, как станут дорогостоящими ошибками.",
    ],

    // Блок структуры
    structureTitle: "Наша структура",
    foundationTitle: "Фонд исследования будущего",
    foundationDesc:
      "Формализованный взгляд за горизонт: тренды, сценарии, долгосрочные последствия сегодняшних выборов.",
    fundDescription:
      "Некоммерческая исследовательская организация, специализирующаяся на системном мониторинге глобальных тенденций, выявлении слабых сигналов и построении сценариев долгосрочного развития. Деятельность Фонда основана на методологиях горизонтального сканирования, анализе мегатрендов и междисциплинарных подходах к стратегическому прогнозированию. Результаты исследований предназначены для информирования стратегических решений в государственном и корпоративном секторах.",
    studioTitleMain: "Студия стартапов",
    studioDescMain:
      "Полигон для проверки гипотез. Превращаем идеи в работающие бизнес-модели в реальных условиях.",
    studioDescription:
      "Операционное подразделение, реализующее прикладные инновационные проекты на основе данных о будущем. Студия занимается разработкой, валидацией и запуском технологических стартапов, ориентированных на решение системных вызовов, выявленных в ходе фундаментальных исследований. Процесс создания стартапов включает этапы выявления перспективных рыночных и социальных возможностей, прототипирования, разработки минимально жизнеспособного продукта (MVP) и подготовки к масштабированию в соответствии с принципами бережливого предпринимательства и инноваций, основанных на доказательствах.",
    libraryTitle: "Библиотека открытых инструментов",
    libraryDesc: "Технологии стратегирования в свободном доступе. Никаких чёрных ящиков.",

    // 21 инструмент
    toolsTitle: "инструмент для работы с неопределённостью",
    toolsForesight: "инструментов для исследования будущего",
    toolsDecision: "инструмента для принятия сложных решений",
    toolsValidation: "инструментов для валидации идей",
    toolsNote: "Все инструменты — в открытом доступе, без чёрных ящиков.",

    // Ключевые фразы
    homeNotSellIllusion: "Мы не продаём иллюзию точного прогноза.",
    homeBridgeText: "Мы создаём инструменты для жизни в неопределённости, где",
    homeFlexibility: "гибкость важнее жёсткой схемы",
    homeValidation: "валидация дороже гипотез",
    homeAnd: "а",

    // Trust badges
    trustFocusLabel: "Фокус",
    trustFocusValue: "стратегия → система решений",
    trustMethodLabel: "Метод",
    trustMethodValue: "диагностика → дизайн → валидация",
    trustResultLabel: "Результат",
    trustResultValue: "ясность, приоритеты, действия",

    // Визуальная колонка
    visualNote: "Визуальные схемы и карты — это не 'декор', а способ думать структурно и держать контекст.",

    // Как это выглядит в работе
    workLooksTitle: "Как это выглядит в работе",
    workStep1Label: "Диагностика",
    workStep1Title: "Контекст и ограничения",
    workStep1Desc: "Собираем вводные, формируем карту факторов и точку фокуса.",
    workStep2Label: "Дизайн",
    workStep2Title: "Система решений",
    workStep2Desc: "Структурируем выбор, критерии, компромиссы и механику движения.",
    workStep3Label: "Валидация",
    workStep3Title: "Проверка на реальности",
    workStep3Desc: "Тестируем гипотезы, уточняем шаги, фиксируем план внедрения.",

    // CTA
    ctaContact: "Связаться",
    ctaTools: "Открыть инструменты",

    // Footer
    footerLine1: "Планируйте мудро.",
    footerLine2: "Действуйте уверенно.",
    footerCta: "Запросить контакт",

    // прочее
    contactsText:
      "Свяжитесь с нами для сотрудничества, обратной связи или вопросов по инструментам Q354.",

    // --- НОВЫЕ КЛЮЧИ ДЛЯ СТРАНИЦЫ ФОНДА (FUND PAGE) ---
    fundHeroTitle: "Создаем будущее сегодня",
    fundHeroSubtitle: "От слабых сигналов до стартапов. Исследуем, валидируем и запускаем будущее.",
    fundCTAExplore: "Изучить исследования",
    fundCTAStudio: "В студию",

    visualAnchorMap: "Карта будущего",
    visualAnchorRadar: "Радар 9 инструментов",
    visualAnchorLive: "Живой пайплайн",

    methodologyTitle: "Двигатель методологии",
    methodologySubtitle: "9 системных инструментов для сканирования, анализа и синтеза",

    studioIntegrationTitle: "Интеграция со Студией стартапов",
    studioIntegrationSubtitle: "Где гипотезы становятся проверенными венчурами",
    studioCases: "Активные кейсы",

    liveFeedTitle: "Лента Форсайта",
    liveFeedSubtitle: "Слабые сигналы и обновления сценариев в реальном времени",
    askAI: "Спросить GPT-4o о трендах...",
    loadMore: "Загрузить ещё сигналы",

    // 9 Инструментов (Названия)
    toolHorizon: "Сканирование горизонтов",
    toolWeakSignals: "Слабые сигналы",
    toolSTEEP: "STEEP-анализ",
    tool6Hats: "6 Шляп мышления",
    toolCLA: "Причинно-следственный многоуровневый анализ",
    toolTrendImpact: "Анализ влияния трендов",
    toolScenarios: "Сценарное планирование",
    toolFutureWheels: "Колесо будущего",
    toolBackcasting: "Бэккастинг",

    // 9 Инструментов (Описания)
    toolHorizonDesc: "Мониторинг изменений на временных горизонтах",
    toolWeakSignalsDesc: "Выявление ранних индикаторов перемен",
    toolSTEEPDesc: "Социальные, технологические, экономические, экологические, политические факторы",
    tool6HatsDesc: "Многомерный анализ идей и решений",
    toolCLADesc: "Глубинный анализ слоев причинности",
    toolTrendImpactDesc: "Оценка воздействия трендов на систему",
    toolScenariosDesc: "Построение альтернативных картин будущего",
    toolFutureWheelsDesc: "Картирование последствий и эффектов",
    toolBackcastingDesc: "Планирование от желаемого будущего к настоящему",
  },

  en: {
    siteName: "Q354 Strategist",
    fund: "Future Research Foundation",
    studio: "Startup Studio",
    foresight: "Foresight",
    decisionMaker: "Decision Making",
    checkIdea: "Idea Validation",
    contacts: "Contacts",

    // SEO
    homeTitle: "Q354 Strategist — strategy aligned with intent",
    homeDesc:
      "Open tools for navigating uncertainty: foresight, decision-making, and idea validation.",
    fundTitle: "Future Research Foundation — Q354 Strategist",
    fundDesc: "Trends, weak signals, scenarios, and long-term implications of decisions.",
    studioTitle: "Startup Studio — Q354 Strategist",
    studioDesc: "A proving ground for hypotheses: from ideas to working business models.",
    contactsTitle: "Contacts — Q354 Strategist",
    contactsDesc: "Contact Q354 Strategist: collaboration, partnerships, questions.",

    homeH1: "People plan. Reality adjusts. We help synchronize.",
    homeLead: [
      "Our name is our principle. Q354 is not a random code — it's a reminder that even the most elaborated strategy remains human. We do our part systematically and thoroughly, never forgetting the context that is always broader than our plans.",
      "Our task is not to predict the future, but to create an environment where decisions are made consciously and hypotheses are tested before they become costly mistakes.",
    ],

    structureTitle: "Our structure",
    foundationTitle: "Future Research Foundation",
    foundationDesc:
      "A formalized view beyond the horizon: trends, scenarios, long-term consequences of today's choices.",
    fundDescription:
      "A non-profit research organization specializing in systematic horizon scanning, weak signal detection, and the development of long-term strategic scenarios. The Foundation employs interdisciplinary methodologies—including trend analysis, megatrends assessment, and scenario planning—to generate evidence-based foresight. Its outputs support strategic decision-making in public policy, corporate strategy, and institutional planning.",
    studioTitleMain: "Startup Studio",
    studioDescMain:
      "A testing ground for hypotheses. Turning ideas into viable business models in real-world conditions.",
    studioDescription:
      "An operational unit that translates foresight insights into applied innovation. The Studio designs, validates, and launches technology-driven startups addressing systemic challenges identified through foundational research. The venture development process includes opportunity identification, rapid prototyping, minimum viable product (MVP) development, and scalability preparation—guided by principles of lean entrepreneurship and evidence-based innovation.",
    libraryTitle: "Open Tools Library",
    libraryDesc: "Strategizing technologies freely available. No black boxes.",

    toolsTitle: "tools for navigating uncertainty",
    toolsForesight: "tools for exploring the future",
    toolsDecision: "tools for complex decision-making",
    toolsValidation: "tools for idea validation",
    toolsNote: "All tools are open access, no black boxes.",

    homeNotSellIllusion: "We do not sell the illusion of accurate forecasts.",
    homeBridgeText: "We build tools for living in uncertainty, where",
    homeFlexibility: "flexibility matters more than rigid schemes",
    homeValidation: "validation outweighs hypotheses",
    homeAnd: "and",

    trustFocusLabel: "Focus",
    trustFocusValue: "strategy → decision system",
    trustMethodLabel: "Method",
    trustMethodValue: "diagnose → design → validate",
    trustResultLabel: "Outcome",
    trustResultValue: "clarity, priorities, action",

    visualNote:
      "Visual maps and frameworks are not 'decoration' — they help keep structure and context.",

    workLooksTitle: "How it looks in practice",
    workStep1Label: "Diagnosis",
    workStep1Title: "Context & constraints",
    workStep1Desc: "Gather inputs, build a factor map, define the focus point.",
    workStep2Label: "Design",
    workStep2Title: "Decision system",
    workStep2Desc: "Structure choices, criteria, trade-offs, and movement mechanics.",
    workStep3Label: "Validation",
    workStep3Title: "Reality check",
    workStep3Desc: "Test hypotheses, refine steps, and lock an implementation plan.",

    ctaContact: "Contact",
    ctaTools: "Open tools",

    footerLine1: "Plan wisely.",
    footerLine2: "Act confidently.",
    footerCta: "Request contact",

    contactsText:
      "Get in touch for collaboration, feedback, or questions about Q354 tools.",

    // --- NEW KEYS FOR FUND PAGE ---
    fundHeroTitle: "Building Futures Today",
    fundHeroSubtitle: "From weak signals to startups. We research, validate, and launch the future.",
    fundCTAExplore: "Explore Research",
    fundCTAStudio: "Join Studio",

    visualAnchorMap: "Future Map",
    visualAnchorRadar: "9 Tools Radar",
    visualAnchorLive: "Live Pipeline",

    methodologyTitle: "Methodology Engine",
    methodologySubtitle: "9 systematic tools for scanning, analysis, and synthesis",

    studioIntegrationTitle: "Startup Studio Integration",
    studioIntegrationSubtitle: "Where hypotheses become validated ventures",
    studioCases: "Active Cases",

    liveFeedTitle: "Live Foresight Feed",
    liveFeedSubtitle: "Real-time weak signals and scenario updates",
    askAI: "Ask GPT-4o about trends...",
    loadMore: "Load More Signals",

    // 9 Tools (Names)
    toolHorizon: "Horizon Scanning",
    toolWeakSignals: "Weak Signals",
    toolSTEEP: "STEEP Analysis",
    tool6Hats: "6 Thinking Hats",
    toolCLA: "Causal Layered Analysis",
    toolTrendImpact: "Trend Impact Analysis",
    toolScenarios: "Scenario Planning",
    toolFutureWheels: "Future Wheel",
    toolBackcasting: "Backcasting",

    // 9 Tools (Descriptions)
    toolHorizonDesc: "Monitoring changes across time horizons",
    toolWeakSignalsDesc: "Detecting early indicators of change",
    toolSTEEPDesc: "Social, Technological, Economic, Environmental, Political factors",
    tool6HatsDesc: "Multi-dimensional analysis of ideas and decisions",
    toolCLADesc: "Deep analysis of layers of causality",
    toolTrendImpactDesc: "Assessing trend impact on the system",
    toolScenariosDesc: "Building alternative pictures of the future",
    toolFutureWheelsDesc: "Mapping consequences and effects",
    toolBackcastingDesc: "Planning from desired future to present",
  },
} as const;

export function t(lang: Lang) {
  return dict[lang];
}