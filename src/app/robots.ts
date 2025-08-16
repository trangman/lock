import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.CONTEXT === 'production' || process.env.NODE_ENV === 'production';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.locksmithyorkshire.co.uk';

  return {
    rules: isProduction
      ? [{ userAgent: '*', allow: '/' }]
      : [
          { userAgent: '*', disallow: '/' },
        ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl.replace(/^https?:\/\//, ''),
  };
}


