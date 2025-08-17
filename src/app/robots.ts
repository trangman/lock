import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.CONTEXT === 'production' || process.env.NODE_ENV === 'production';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.locksmithyorkshire.co.uk';

  return {
    rules: isProduction
      ? [
          {
            userAgent: '*',
            allow: [
              '/',
              '/locksmith',
              '/blog',
              '/sitemap.xml',
              '/robots.txt',
            ],
            disallow: [
              '/admin/',
              '/api/',
              '/_next/',
              '/private/',
              '/temp/',
              '/draft/',
              '/test/',
              '/dev/',
              '/staging/',
              '/.well-known/',
              '/sw.js',
              '/manifest.json',
            ],
            crawlDelay: 1,
          },
          {
            userAgent: 'Googlebot',
            allow: [
              '/',
              '/locksmith',
              '/blog',
              '/sitemap.xml',
            ],
            disallow: [
              '/admin/',
              '/api/',
              '/_next/',
              '/private/',
            ],
            crawlDelay: 1,
          },
          {
            userAgent: 'Bingbot',
            allow: [
              '/',
              '/locksmith',
              '/blog',
              '/sitemap.xml',
            ],
            disallow: [
              '/admin/',
              '/api/',
              '/_next/',
              '/private/',
            ],
            crawlDelay: 1,
          },
          {
            userAgent: 'Slurp',
            allow: [
              '/',
              '/locksmith',
              '/blog',
              '/sitemap.xml',
            ],
            disallow: [
              '/admin/',
              '/api/',
              '/_next/',
              '/private/',
            ],
            crawlDelay: 2,
          },
          {
            userAgent: 'DuckDuckBot',
            allow: [
              '/',
              '/locksmith',
              '/blog',
              '/sitemap.xml',
            ],
            disallow: [
              '/admin/',
              '/api/',
              '/_next/',
              '/private/',
            ],
            crawlDelay: 1,
          },
          {
            userAgent: 'facebookexternalhit',
            allow: [
              '/',
              '/locksmith',
              '/blog',
            ],
            disallow: [
              '/admin/',
              '/api/',
              '/_next/',
              '/private/',
            ],
            crawlDelay: 1,
          },
          {
            userAgent: 'Twitterbot',
            allow: [
              '/',
              '/locksmith',
              '/blog',
            ],
            disallow: [
              '/admin/',
              '/api/',
              '/_next/',
              '/private/',
            ],
            crawlDelay: 1,
          },
        ]
      : [
          { userAgent: '*', disallow: '/' },
        ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl.replace(/^https?:\/\//, ''),
  };
}


