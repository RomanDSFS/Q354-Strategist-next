import type { Metadata } from 'next';
import type { Lang } from '@/i18n/translations';
import { t } from '@/i18n/translations'; 
// ИСПРАВЛЕНО #1: путь импорта. Был "@/src/i18n/translations" → стал "@/i18n/translations"
// ИСПРАВЛЕНО #2: Lang — это type, поэтому import type (не обязательно, но правильно)

const EMAIL = 'Qhoja@proton.me';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Lang }>;
  // ИСПРАВЛЕНО #3: params теперь Promise<{ lang: Lang }>
}): Promise<Metadata> {
  const { lang } = await params;
  // ИСПРАВЛЕНО #4: нельзя читать params.lang напрямую → нужно await params

  const tr = t(lang);
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

  const url = `${base}/${lang}/contacts`;
  // ИСПРАВЛЕНО #5: params.lang → lang

  const ogImage = lang === 'ru' ? '/og-ru.png' : '/og-en.png';
  // ИСПРАВЛЕНО #6: params.lang → lang

  return {
    title: tr.contactsTitle,
    description: tr.contactsDesc,
    alternates: {
      canonical: url,
      languages: {
        ru: `${base}/ru/contacts`,
        en: `${base}/en/contacts`,
      },
    },
    openGraph: {
      title: tr.contactsTitle,
      description: tr.contactsDesc,
      url,
      siteName: tr.siteName,
      images: [{ url: `${base}${ogImage}`, width: 1200, height: 630 }],
      locale: lang === 'ru' ? 'ru_RU' : 'en_US',
      // ИСПРАВЛЕНО #7: params.lang → lang
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: tr.contactsTitle,
      description: tr.contactsDesc,
      images: [`${base}${ogImage}`],
    },
  };
}

export default async function ContactsPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
  // ИСПРАВЛЕНО #8: params теперь Promise<{ lang: Lang }>
}) {
  const { lang } = await params;
  // ИСПРАВЛЕНО #9: await params

  const tr = t(lang);
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: tr.siteName,
    url: `${base}/${lang}`,
    // ИСПРАВЛЕНО #10: params.lang → lang
    email: EMAIL,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: EMAIL,
        availableLanguage: lang === 'ru' ? ['Russian', 'English'] : ['English', 'Russian'],
        // ИСПРАВЛЕНО #11: params.lang → lang
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl text-gray-200 font-bold mb-6">{tr.contacts}</h1>

      <div className="text-lg text-gray-200 max-w-4xl space-y-4">
        <p>{tr.contactsText}</p>

        <p>
          <strong>Email:</strong>{' '}
          <a href={`mailto:${EMAIL}`} className="text-blue-400 hover:underline">
            {EMAIL}
          </a>
        </p>
      </div>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
