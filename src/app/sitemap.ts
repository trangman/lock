import { MetadataRoute } from 'next';
import { generateSitemapData, getAllCities } from '@/config/cities';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.locksmithyorkshire.co.uk';
  const cityPages = generateSitemapData();
  const cities = getAllCities();
  
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFreq: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/locksmith`,
      lastModified: new Date(),
      changeFreq: 'weekly',
      priority: 0.9,
    },
  ];

  const citySitemapEntries = cityPages.map((city) => {
    const cityData = cities.find((c) => c.slug === city.slug);
    const lastModIso = cityData?.updatedAt ?? city.lastmod;
    return {
      url: `${baseUrl}/locksmith/${city.slug}`,
      lastModified: new Date(lastModIso),
      changeFreq: city.changefreq,
      priority: city.priority,
    };
  });

  return [...staticPages, ...citySitemapEntries];
} 