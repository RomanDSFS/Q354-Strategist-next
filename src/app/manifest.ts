import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Q354 Strategist',
    short_name: 'Q354',
    start_url: '/ru',
    display: 'standalone',
    background_color: '#01062d',
    theme_color: '#01062d',
    icons: [
      { src: '/logo.png', sizes: '1024x1024', type: 'image/png' },
    ],
  };
}
