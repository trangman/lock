'use client';
import Link from 'next/link';
import Image from 'next/image';
import { PhoneIcon, ClockIcon, MapPinIcon, ShieldCheckIcon, KeyIcon, LockClosedIcon, HomeIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import LiveChat from '@/components/LiveChat';
import EmergencyCTA from '@/components/EmergencyCTA';
import TrustBadges from '@/components/TrustBadges';
import LeadCapture from '@/components/LeadCapture';
import AdvertiseBlock from '@/components/AdvertiseBlock';
import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import BlogSection from '@/components/BlogSection';
import { siteConfig } from '@/config/site';
import { getHeroImage } from '@/config/cities';

export default function Home() {
  const { company, contact, services, leadGen } = siteConfig;

  return (
    <div className="min-h-screen">
      {/* Organization & WebSite JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: company.fullName,
            alternateName: company.name,
            url: 'https://www.locksmithyorkshire.co.uk/',
            telephone: contact.emergency.phone,
            email: contact.general.email,
            address: {
              '@type': 'PostalAddress',
              addressRegion: 'Yorkshire',
              addressCountry: 'UK',
              addressLocality: 'Yorkshire'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 53.8008,
              longitude: -1.5491
            },
            areaServed: [
              'Leeds', 'Sheffield', 'Bradford', 'Hull', 'York', 'Wakefield', 
              'Halifax', 'Huddersfield', 'Doncaster', 'Rotherham', 'Barnsley'
            ],
            serviceArea: {
              '@type': 'GeoCircle',
              geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 53.8008,
                longitude: -1.5491
              },
              geoRadius: '50000'
            },
            openingHours: ['Mo-Su 00:00-23:59'],
            priceRange: '££',
            paymentAccepted: ['Cash', 'Credit Card', 'Debit Card'],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Locksmith Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name: 'Emergency Locksmith' }
                },
                {
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name: 'Residential Locksmith' }
                },
                {
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name: 'Commercial Locksmith' }
                }
              ]
            },
            sameAs: [
              siteConfig.social.facebook,
              siteConfig.social.twitter,
              siteConfig.social.instagram,
              siteConfig.social.linkedin,
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: company.fullName,
            url: 'https://www.locksmithyorkshire.co.uk/',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://www.locksmithyorkshire.co.uk/search?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Locksmith Services',
            description: 'Professional locksmith services available across Yorkshire',
            itemListElement: [
              {
                '@type': 'Service',
                position: 1,
                name: 'Emergency Locksmith',
                description: '24/7 emergency locksmith services for lockouts and urgent security needs',
                provider: {
                  '@type': 'LocalBusiness',
                  name: 'Locksmith Yorkshire'
                },
                areaServed: 'Yorkshire',
                serviceType: 'Emergency Locksmith',
                availableChannel: {
                  '@type': 'ServiceChannel',
                  serviceUrl: 'https://www.locksmithyorkshire.co.uk/',
                  servicePhone: contact.emergency.phone
                }
              },
              {
                '@type': 'Service',
                position: 2,
                name: 'Residential Locksmith',
                description: 'Complete home security solutions including lock installation and repair',
                provider: {
                  '@type': 'LocalBusiness',
                  name: 'Locksmith Yorkshire'
                },
                areaServed: 'Yorkshire',
                serviceType: 'Residential Locksmith'
              },
              {
                '@type': 'Service',
                position: 3,
                name: 'Commercial Locksmith',
                description: 'Professional security solutions for businesses and commercial properties',
                provider: {
                  '@type': 'LocalBusiness',
                  name: 'Locksmith Yorkshire'
                },
                areaServed: 'Yorkshire',
                serviceType: 'Commercial Locksmith'
              }
            ]
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: company.fullName,
            url: 'https://www.locksmithyorkshire.co.uk/',
            logo: 'https://www.locksmithyorkshire.co.uk/locksmith-yorkshire400.png',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: contact.emergency.phone,
              contactType: 'customer service',
              areaServed: 'GB',
              availableLanguage: 'English'
            },
            sameAs: [
              siteConfig.social.facebook,
              siteConfig.social.twitter,
              siteConfig.social.instagram,
              siteConfig.social.linkedin,
            ]
          }),
        }}
      />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main id="main-content" role="main" aria-label="Main content">
        {/* Hero Section */}
        <section 
          className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white"
          aria-labelledby="hero-heading"
        >
          {/* Hero Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={getHeroImage()}
              alt="Professional locksmith services in Yorkshire - secure, reliable, and trusted"
              fill
              className="object-cover opacity-50"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/40"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 
                id="hero-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              >
                24/7 Emergency Locksmith Services
              </h1>
              <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Professional, licensed, and insured locksmiths across Yorkshire. 
                Emergency response in 15 minutes or less.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contact.emergency.phone}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold text-lg rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  aria-label={`Emergency locksmith service - Call ${contact.emergency.phone} now`}
                >
                  <PhoneIcon className="h-6 w-6 mr-2" aria-hidden="true" />
                  Emergency Call
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 hover:bg-gray-100 font-semibold text-lg rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                  aria-label="View our locksmith services"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section 
          id="services" 
          className="py-16 bg-white"
          aria-labelledby="services-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 
                id="services-heading"
                className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
              >
                Professional Locksmith Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From emergency lockouts to complete security solutions, we provide comprehensive 
                locksmith services across Yorkshire with rapid response times.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(services).map(([key, service]) => (
                <div 
                  key={key}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
                  tabIndex={0}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      {key === 'emergency' && <PhoneIcon className="h-8 w-8 text-blue-600" aria-hidden="true" />}
                      {key === 'residential' && <HomeIcon className="h-8 w-8 text-blue-600" aria-hidden="true" />}
                      {key === 'commercial' && <BuildingOfficeIcon className="h-8 w-8 text-blue-600" aria-hidden="true" />}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="text-sm text-gray-500 space-y-1">
                      <p><strong>Response:</strong> {service.response}</p>
                      <p><strong>Available:</strong> {service.available}</p>
                      <p><strong>From:</strong> {service.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <TrustBadges />

        {/* FAQ Section */}
        <FAQ />

        {/* Blog Section */}
        <BlogSection />

        {/* Lead Capture */}
        <LeadCapture />
      </main>
    </div>
  );
}
