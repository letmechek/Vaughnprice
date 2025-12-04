import type { MetadataRoute } from 'next';

const baseUrl = 'https://vaughnprice.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/#services', '/#work', '/#process', '/#technology', '/#contact'];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
