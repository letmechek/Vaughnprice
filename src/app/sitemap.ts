import type { MetadataRoute } from 'next';
import { allFooterPages } from './lib/footerLinks';

const baseUrl = 'https://vaughnprice.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/#services',
    '/#work',
    '/#process',
    '/#technology',
    '/#contact',
    '/privacy',
    '/terms',
    ...allFooterPages.map((page) =>
      page.category === 'Build Type' ? `/build-types/${page.slug}` : `/system-layers/${page.slug}`,
    ),
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
