import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/config/site";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.locksmithyorkshire.co.uk'
  ),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.seo.author }],
  creator: siteConfig.seo.author,
  publisher: siteConfig.seo.author,
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: siteConfig.seo.ogTitle,
    description: siteConfig.seo.ogDescription,
    type: siteConfig.seo.ogType,
    url: 'https://www.locksmithyorkshire.co.uk/',
    siteName: 'Locksmith Yorkshire',
    locale: 'en_GB',
    countryName: 'United Kingdom',
    images: [
      {
        url: 'https://www.locksmithyorkshire.co.uk/locksmith-yorkshire400.png',
        width: 400,
        height: 48,
        alt: 'Locksmith Yorkshire Logo',
      },
      {
        url: 'https://www.locksmithyorkshire.co.uk/headers/default.webp',
        width: 1920,
        height: 1080,
        alt: 'Professional Locksmith Services in Yorkshire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.ogTitle,
    description: siteConfig.seo.ogDescription,
    images: ['https://www.locksmithyorkshire.co.uk/headers/default.webp'],
    creator: '@locksmithyorks',
    site: '@locksmithyorks',
  },
  alternates: {
    canonical: "https://www.locksmithyorkshire.co.uk/",
    languages: {
      'en-GB': 'https://www.locksmithyorkshire.co.uk/',
    },
  },
  manifest: '/manifest.json',
  category: 'business',
  classification: 'Professional Services',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Locksmith Yorkshire',
    'application-name': 'Locksmith Yorkshire',
    'msapplication-TileColor': '#1e3a8a',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#1e3a8a',
    'color-scheme': 'light',
    'format-detection': 'telephone=no',
    'google-site-verification': 'your-verification-code-here',
    'msvalidate.01': 'your-bing-verification-code-here',
    'yandex-verification': 'your-yandex-verification-code-here',
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PHCW4M2L');`
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PHCW4M2L"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <PerformanceMonitor />
        <ServiceWorkerRegistration />
        
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Skip to main content
        </a>
        
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  );
}
