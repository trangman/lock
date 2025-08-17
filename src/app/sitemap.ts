import { MetadataRoute } from 'next';
import { getAllCities } from '@/config/cities';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.locksmithyorkshire.co.uk';
  const cities = getAllCities();
  const currentDate = new Date();

  // Base pages with high priority
  const basePages = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFreq: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/locksmith`,
      lastModified: currentDate,
      changeFreq: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFreq: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // Blog articles with medium priority
  const blogArticles = [
    {
      url: `${baseUrl}/blog/emergency-lockout-what-to-do`,
      lastModified: currentDate,
      changeFreq: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/choosing-right-security-locks-home`,
      lastModified: currentDate,
      changeFreq: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/car-lockout-solutions-prevention-emergency`,
      lastModified: currentDate,
      changeFreq: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/commercial-security-protecting-business`,
      lastModified: currentDate,
      changeFreq: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/smart-locks-vs-traditional-locks`,
      lastModified: currentDate,
      changeFreq: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/key-cutting-services-guide`,
      lastModified: currentDate,
      changeFreq: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // City-specific pages with medium-high priority
  const cityPages = cities.map((city) => ({
    url: `${baseUrl}/locksmith/${city.slug}`,
    lastModified: currentDate,
    changeFreq: 'weekly' as const,
    priority: 0.8,
  }));

  // Service-specific landing pages (via rewrites)
  const servicePages = [
    {
      url: `${baseUrl}/emergency-locksmith`,
      lastModified: currentDate,
      changeFreq: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/residential-locksmith`,
      lastModified: currentDate,
      changeFreq: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/commercial-locksmith`,
      lastModified: currentDate,
      changeFreq: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // Important static pages
  const staticPages = [
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFreq: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFreq: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFreq: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFreq: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFreq: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accessibility`,
      lastModified: currentDate,
      changeFreq: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFreq: 'monthly' as const,
      priority: 0.5,
    },
  ];

  // Combine all pages
  return [
    ...basePages,
    ...blogArticles,
    ...cityPages,
    ...servicePages,
    ...staticPages,
  ];
} 