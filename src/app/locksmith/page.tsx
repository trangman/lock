import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllCities, getCitiesByCounty, getHeroImage } from '@/config/cities';
import { siteConfig } from '@/config/site';
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Locksmith Services Across Yorkshire - All Cities Covered | Locksmith Yorkshire',
  description: 'Professional locksmith services across all Yorkshire cities. Emergency locksmith, residential and commercial security solutions in Leeds, Sheffield, Bradford, Hull, York and more.',
  keywords: 'locksmith yorkshire, emergency locksmith yorkshire, residential locksmith yorkshire, commercial locksmith yorkshire, locksmith leeds, locksmith sheffield, locksmith bradford, locksmith hull, locksmith york',
  openGraph: {
    title: 'Locksmith Services Across Yorkshire - All Cities Covered',
    description: 'Professional locksmith services across all Yorkshire cities. Emergency locksmith, residential and commercial security solutions.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.locksmithyorkshire.co.uk/locksmith',
  },
};

export default function LocksmithCitiesPage() {
  const cities = getAllCities();
  const { contact } = siteConfig;
  
  const westYorkshireCities = getCitiesByCounty('West Yorkshire');
  const southYorkshireCities = getCitiesByCounty('South Yorkshire');
  const northYorkshireCities = getCitiesByCounty('North Yorkshire');
  const eastYorkshireCities = getCitiesByCounty('East Yorkshire');

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Service Locations Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Locksmith Service Locations',
            description: 'Professional locksmith services available across all Yorkshire cities and towns',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                item: {
                  '@type': 'Place',
                  name: 'Leeds Locksmith Services',
                  url: 'https://www.locksmithyorkshire.co.uk/locksmith/leeds',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Leeds',
                    addressRegion: 'Yorkshire',
                    addressCountry: 'UK'
                  }
                }
              },
              {
                '@type': 'ListItem',
                position: 2,
                item: {
                  '@type': 'Place',
                  name: 'Sheffield Locksmith Services',
                  url: 'https://www.locksmithyorkshire.co.uk/locksmith/sheffield',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Sheffield',
                    addressRegion: 'Yorkshire',
                    addressCountry: 'UK'
                  }
                }
              },
              {
                '@type': 'ListItem',
                position: 3,
                item: {
                  '@type': 'Place',
                  name: 'Bradford Locksmith Services',
                  url: 'https://www.locksmithyorkshire.co.uk/locksmith/bradford',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Bradford',
                    addressRegion: 'Yorkshire',
                    addressCountry: 'UK'
                  }
                }
              }
            ]
          }),
        }}
      />

      {/* Breadcrumb Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.locksmithyorkshire.co.uk/'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Service Locations',
                item: 'https://www.locksmithyorkshire.co.uk/locksmith'
              }
            ]
          }),
        }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={getHeroImage()}
            alt="Locksmith Services Across Yorkshire"
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="text-center">
            <h1 className="font-bold mb-4 sm:mb-6 fluid-hero-title">
              Locksmith Services Across Yorkshire
            </h1>
            <p className="mb-6 sm:mb-8 text-blue-100 max-w-4xl mx-auto fluid-subtitle">
              Professional locksmith services available 24/7 across all Yorkshire cities. 
              Emergency lockout, residential and commercial security solutions with fast response times.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${contact.emergency.phone}`} className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">
                <PhoneIcon className="h-5 w-5 inline mr-2" />
                Emergency Call Now
              </a>
              <a href="#cities" className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center">
                View All Cities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">{cities.length}</div>
              <div className="text-sm sm:text-base text-gray-600">Cities Covered</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-sm sm:text-base text-gray-600">Emergency Service</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">15min</div>
              <div className="text-sm sm:text-base text-gray-600">Response Time</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">1000+</div>
              <div className="text-sm sm:text-base text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Locations */}
      <section id="cities" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-bold text-gray-900 mb-4 fluid-section-title">
              Our Service Locations
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto fluid-subtitle">
              Professional locksmith services available across all Yorkshire cities and towns
            </p>
          </div>

          {/* West Yorkshire */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">West Yorkshire</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {westYorkshireCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locksmith/${city.slug}`}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
                >
                  <div className="flex items-center space-x-3">
                    <MapPinIcon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{city.name}</h4>
                      <p className="text-sm text-gray-600">{city.county}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* South Yorkshire */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">South Yorkshire</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {southYorkshireCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locksmith/${city.slug}`}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
                >
                  <div className="flex items-center space-x-3">
                    <MapPinIcon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{city.name}</h4>
                      <p className="text-sm text-gray-600">{city.county}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* North Yorkshire */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">North Yorkshire</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {northYorkshireCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locksmith/${city.slug}`}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
                >
                  <div className="flex items-center space-x-3">
                    <MapPinIcon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{city.name}</h4>
                      <p className="text-sm text-gray-600">{city.county}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* East Yorkshire */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">East Yorkshire</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {eastYorkshireCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locksmith/${city.slug}`}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
                >
                  <div className="flex items-center space-x-3">
                    <MapPinIcon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{city.name}</h4>
                      <p className="text-sm text-gray-600">{city.county}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-bold text-gray-900 mb-4 fluid-section-title">
              Our Services Across Yorkshire
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto fluid-subtitle">
              Professional locksmith services available in all Yorkshire cities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Locksmith</h3>
              <p className="text-gray-600">
                24/7 emergency locksmith services for lockouts, broken keys, and urgent security needs across all Yorkshire cities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPinIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Service</h3>
              <p className="text-gray-600">
                Local locksmiths in every Yorkshire city, providing fast response times and local knowledge.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">
                All our locksmiths are fully licensed and insured, providing peace of mind across Yorkshire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 sm:py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold mb-4 fluid-section-title">
            Need a Locksmith in Yorkshire?
          </h2>
          <p className="mb-8 text-blue-100 max-w-3xl mx-auto fluid-subtitle">
            Professional locksmith services available 24/7 across all Yorkshire cities. 
            Emergency response, competitive pricing, and local expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${contact.emergency.phone}`} className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center fluid-cta">
              <PhoneIcon className="h-5 w-5 inline mr-2" />
              Emergency Call Now
            </a>
            <Link href="/" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center fluid-cta">
              Visit Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 