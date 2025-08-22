'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, HomeIcon, BuildingOfficeIcon, KeyIcon, ShieldCheckIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import TrustBadges from '@/components/TrustBadges';
import LeadCapture from '@/components/LeadCapture';
import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import BlogSection from '@/components/BlogSection';
import { siteConfig } from '@/config/site';
import { getHeroImage } from '@/config/cities';

export default function Home() {
  const { company, contact, services } = siteConfig;

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
      
      {/* Additional Schema for Long-tail Keywords */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Do you provide 24 hour locksmith service in Leeds West Yorkshire?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we provide 24 hour locksmith services across Leeds West Yorkshire and all of Yorkshire. Our emergency response time is typically 15 minutes or less.'
                }
              },
              {
                '@type': 'Question', 
                name: 'Can you help with car lockout service in Sheffield Yorkshire?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely! We offer professional car lockout service across Sheffield Yorkshire and all South Yorkshire areas with rapid mobile response.'
                }
              },
              {
                '@type': 'Question',
                name: 'Do you repair UPVC door locks across Yorkshire?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we specialize in UPVC door lock repair throughout Yorkshire, including multi-point locking mechanisms and all common UPVC door problems.'
                }
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
                Emergency Locksmith Near Me Yorkshire - 24/7 Service
              </h1>
              <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Professional 24 hour locksmith Leeds West Yorkshire & across all Yorkshire cities. 
                Emergency lockout service in 15 minutes - licensed, insured, trusted.
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      {key === 'automotive' && <WrenchScrewdriverIcon className="h-8 w-8 text-blue-600" aria-hidden="true" />}
                      {key === 'security' && <ShieldCheckIcon className="h-8 w-8 text-blue-600" aria-hidden="true" />}
                      {key === 'keycutting' && <KeyIcon className="h-8 w-8 text-blue-600" aria-hidden="true" />}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {key === 'emergency' ? 'Emergency Locksmith Near Me Yorkshire' : 
                       key === 'automotive' ? 'Car Lockout Service Sheffield Yorkshire' :
                       key === 'residential' ? 'UPVC Door Lock Repair Yorkshire' :
                       key === 'commercial' ? 'Commercial Locksmith Services Hull Yorkshire' :
                       key === 'security' ? 'Smart Lock Fitting York North Yorkshire' :
                       service.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {key === 'emergency' ? '24 hour locksmith Leeds West Yorkshire and emergency locksmith response across all Yorkshire cities' :
                       key === 'automotive' ? 'Professional car lockout service Sheffield Yorkshire, broken key extraction Doncaster Yorkshire and automotive locksmith solutions' :
                       key === 'residential' ? 'UPVC door lock repair Yorkshire, lock change service Bradford Yorkshire, and residential security solutions' :
                       key === 'commercial' ? 'Commercial locksmith services Hull Yorkshire, business security, and access control systems for Yorkshire companies' :
                       key === 'security' ? 'Smart lock fitting York North Yorkshire, Yale lock installation Wakefield Yorkshire, and modern security systems' :
                       service.description}
                    </p>
                    <div className="text-sm text-gray-500 space-y-1">
                      <p><strong>Response:</strong> {service.response}</p>
                      <p><strong>Available:</strong> {service.available}</p>
                      <p><strong>From:</strong> {service.price}</p>
                    </div>
                    <div className="mt-4">
                      {key === 'emergency' && (
                        <a href="/blog/emergency-lockout-what-to-do" className="text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                          Learn about emergency procedures →
                        </a>
                      )}
                      {key === 'residential' && (
                        <a href="/blog/choosing-right-security-locks-home" className="text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                          Home security guide →
                        </a>
                      )}
                      {key === 'commercial' && (
                        <a href="/blog/commercial-security-protecting-business" className="text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                          Business security tips →
                        </a>
                      )}
                      {key === 'automotive' && (
                        <a href="/blog/car-lockout-solutions-prevention-emergency" className="text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                          Car lockout solutions →
                        </a>
                      )}
                      {key === 'security' && (
                        <a href="/blog" className="text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                          Security system guide →
                        </a>
                      )}
                      {key === 'keycutting' && (
                        <a href="/blog/key-cutting-services-guide" className="text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                          Key cutting guide →
                        </a>
                      )}
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

        {/* Crime Statistics & Safety Information */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Local Crime Statistics & Safety Resources
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Stay informed about crime patterns in your area and access official police resources for enhanced security awareness
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Official Crime Maps</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Access official police crime statistics and maps for all Yorkshire areas.
                </p>
                <a href="https://www.police.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                  View National Crime Map →
                </a>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Police Force Websites</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Direct links to local police force websites and community safety information.
                </p>
                                            <Link href="/locksmith" className="text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                              View Local Police Resources →
                            </Link>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Security Assessment</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Get a professional security assessment based on local crime patterns.
                </p>
                <a href="#services" className="text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                  Book Security Assessment →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Capture */}
        <LeadCapture />
      </main>
    </div>
  );
}
