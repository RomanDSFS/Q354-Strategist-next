import '@/app/globals.css';
import { Header } from '@/components/layout/Header';
import type { Lang } from '@/i18n/translations';

export function generateStaticParams() {
  return [{ lang: 'ru' }, { lang: 'en' }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body className="min-h-screen bg-[#01062d] text-gray-200">
        <div className="flex flex-col min-h-screen">
          <Header lang={lang} />
          <main className="grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
