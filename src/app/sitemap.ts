import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

  const paths = ['', '/fund', '/studio', '/contacts'];
  const locales = ['ru', 'en'];

  const urls: MetadataRoute.Sitemap = [];

  for (const l of locales) {
    for (const p of paths) {
      urls.push({
        url: `${base}/${l}${p}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: p === '' ? 1 : 0.7,
      });
    }
  }

  return urls;
}
