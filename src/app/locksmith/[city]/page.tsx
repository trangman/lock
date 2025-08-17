import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getCityBySlug, getAllCities, getHeroImage, type CityData } from '@/config/cities';
import { loadCityOverrides, mergeCityWithOverrides } from '@/lib/sponsorOverrides';
import { siteConfig } from '@/config/site';
import { PhoneIcon, ClockIcon, MapPinIcon, ShieldCheckIcon, KeyIcon, LockClosedIcon, HomeIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import AdvertiseBlock from '@/components/AdvertiseBlock';
import SponsorBlock from '@/components/SponsorBlock';
import FeaturedListings from '@/components/FeaturedListings';
import Header from '@/components/Header';
import CrimeStats from '@/components/CrimeStats';

interface CityPageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  const cities = getAllCities();
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    return {
      title: 'City Not Found',
    };
  }

  return {
    title: city.seo.title,
    description: city.seo.description,
    keywords: city.seo.keywords,
    openGraph: {
      title: city.seo.title,
      description: city.seo.description,
      type: 'website',
    },
    alternates: {
      canonical: `https://www.locksmithyorkshire.co.uk/locksmith/${city.slug}`,
    },
  };
}

function haversineDistanceKm(a: CityData, b: CityData): number {
  const toRad = (v: number) => (v * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(b.coordinates.lat - a.coordinates.lat);
  const dLon = toRad(b.coordinates.lng - a.coordinates.lng);
  const lat1 = toRad(a.coordinates.lat);
  const lat2 = toRad(b.coordinates.lat);
  const h =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return 2 * R * Math.asin(Math.sqrt(h));
}

function getNearbyCities(current: CityData, limit = 6, radiusKm = 60): CityData[] {
  const others = getAllCities().filter((c) => c.slug !== current.slug);
  const withDistance = others
    .map((c) => ({ city: c, dist: haversineDistanceKm(current, c) }))
    .filter((x) => x.dist <= radiusKm)
    .sort((a, b) => a.dist - b.dist)
    .slice(0, limit)
    .map((x) => x.city);
  return withDistance;
}

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: citySlug } = await params;
  const baseCity = getCityBySlug(citySlug)!;
  const overrides = await loadCityOverrides();
  const city = mergeCityWithOverrides(baseCity, overrides[citySlug]);
  const { contact, services } = siteConfig;

  if (!city) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />
      
      <div className="min-h-screen">
      {/* JSON-LD */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: siteConfig.company.name,
          url: `https://www.locksmithyorkshire.co.uk/locksmith/${city.slug}`,
          telephone: contact.emergency.phone,
          areaServed: city.name,
          address: {
            '@type': 'PostalAddress',
            addressRegion: city.county,
            addressCountry: 'UK',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: city.coordinates.lat,
            longitude: city.coordinates.lng,
          },
          openingHours: ['Mo-Su 00:00-23:59'],
          priceRange: '££',
          sameAs: [
            siteConfig.social.facebook,
            siteConfig.social.twitter,
            siteConfig.social.instagram,
            siteConfig.social.linkedin,
          ],
          makesOffer: [
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: services.emergency.name },
            },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.locksmithyorkshire.co.uk/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Locksmith',
              item: 'https://www.locksmithyorkshire.co.uk/locksmith',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: city.name,
              item: `https://www.locksmithyorkshire.co.uk/locksmith/${city.slug}`,
            },
          ],
        }}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={getHeroImage(city)}
            alt={`Locksmith Services in ${city.name}`}
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-bold mb-4 sm:mb-6 fluid-hero-title">
                {city.seo.h1}
              </h1>
              <p className="mb-6 sm:mb-8 text-blue-100 fluid-subtitle">
                Professional locksmith services in {city.name} available 24/7. Emergency lockout, residential and commercial security solutions with fast response times.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href={`tel:${contact.emergency.phone}`} className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">
                  <PhoneIcon className="h-5 w-5 inline mr-2" />
                  Emergency Call Now
                </a>
                <a href="#services" className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center">
                  Our Services
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Why Choose Locksmith Yorkshire in {city.name}?</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center">
                    <ClockIcon className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-blue-200 flex-shrink-0" />
                                         <span className="text-sm sm:text-base">{contact.hours.emergency}</span>
                  </div>
                  <div className="flex items-center">
                    <ShieldCheckIcon className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-blue-200 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-blue-200 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Local to {city.name}</span>
                  </div>
                  <div className="flex items-center">
                    <KeyIcon className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-blue-200 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Competitive Pricing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-bold text-gray-900 mb-4 fluid-section-title">
              Locksmith Services in {city.name}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto px-4 fluid-subtitle">
              Professional locksmith services for {city.name} and surrounding areas
            </p>
          </div>

                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
             {/* Emergency Locksmith */}
             <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
               <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                 <PhoneIcon className="h-6 w-6 text-red-600" />
               </div>
               <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{services.emergency.name}</h3>
               <p className="text-gray-600 mb-4 text-sm sm:text-base">
                 {services.emergency.description}
               </p>
               <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                 <p><strong>Response:</strong> {services.emergency.response}</p>
                 <p><strong>Available:</strong> {services.emergency.available}</p>
                 <p><strong>From:</strong> {services.emergency.price}</p>
               </div>
             </div>

             {/* Residential Locksmith */}
             <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                 <HomeIcon className="h-6 w-6 text-blue-600" />
               </div>
               <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{services.residential.name}</h3>
               <p className="text-gray-600 mb-4 text-sm sm:text-base">
                 {services.residential.description}
               </p>
               <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                 <p><strong>Response:</strong> {services.residential.response}</p>
                 <p><strong>Available:</strong> {services.residential.available}</p>
                 <p><strong>From:</strong> {services.residential.price}</p>
               </div>
             </div>

             {/* Commercial Locksmith */}
             <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
               <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                 <BuildingOfficeIcon className="h-6 w-6 text-green-600" />
               </div>
               <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{services.commercial.name}</h3>
               <p className="text-gray-600 mb-4 text-sm sm:text-base">
                 {services.commercial.description}
               </p>
               <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                 <p><strong>Response:</strong> {services.commercial.response}</p>
                 <p><strong>Available:</strong> {services.commercial.available}</p>
                 <p><strong>From:</strong> {services.commercial.price}</p>
               </div>
             </div>

             {/* Automotive Locksmith */}
             <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
               <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                 <LockClosedIcon className="h-6 w-6 text-purple-600" />
               </div>
               <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{services.automotive.name}</h3>
               <p className="text-gray-600 mb-4 text-sm sm:text-base">
                 {services.automotive.description}
               </p>
               <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                 <p><strong>Response:</strong> {services.automotive.response}</p>
                 <p><strong>Available:</strong> {services.automotive.available}</p>
                 <p><strong>From:</strong> {services.automotive.price}</p>
               </div>
             </div>

             {/* Security Systems */}
             <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
               <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                 <ShieldCheckIcon className="h-6 w-6 text-yellow-600" />
               </div>
               <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{services.security.name}</h3>
               <p className="text-gray-600 mb-4 text-sm sm:text-base">
                 {services.security.description}
               </p>
               <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                 <p><strong>Response:</strong> {services.security.response}</p>
                 <p><strong>Available:</strong> {services.security.available}</p>
                 <p><strong>From:</strong> {services.security.price}</p>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Crime Statistics Section - Only show if crime stats are available */}
      {city.crimeStats && (
        <CrimeStats 
          cityName={city.name} 
          crimeStats={city.crimeStats} 
        />
      )}

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="font-bold text-gray-900 mb-6 fluid-section-title">
                Locksmith Services in {city.name}
              </h2>
              <div className="space-y-4 text-gray-600 fluid-body">
                {city.seo.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-600">Emergency Service</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">1000+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">15min</div>
                  <div className="text-xs sm:text-sm text-gray-600">Response Time</div>
                </div>
              </div>
              {/* Postcodes Coverage */}
              {city.postcodes && city.postcodes.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Postcodes We Cover in {city.name}</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-3">
                      Our {city.name} locksmith service covers all local postcodes:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {city.postcodes.map((postcode) => (
                        <span key={postcode} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                          {postcode}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Local Landmarks */}
              {city.landmarks && city.landmarks.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Key Locations in {city.name}</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-3">
                      We provide rapid locksmith response near these {city.name} landmarks:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {city.landmarks.map((landmark) => (
                        <li key={landmark} className="flex items-center text-sm">
                          <MapPinIcon className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                          {landmark}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Neighborhoods */}
              {city.neighborhoods && city.neighborhoods.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Areas of {city.name} We Serve</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-3">
                      Local locksmith services across all {city.name} neighborhoods:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {city.neighborhoods.map((neighborhood) => (
                        <span key={neighborhood} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                          {neighborhood}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Nearby Areas */}
              <div className="mt-10">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Nearby areas we also cover</h3>
                <ul className="flex flex-wrap gap-2">
                  {getNearbyCities(city).map((nearby) => (
                    <li key={nearby.slug}>
                      <a
                        className="text-blue-600 hover:text-blue-700 underline text-sm"
                        href={`/locksmith/${nearby.slug}`}
                      >
                        Locksmith {nearby.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Why Choose Us in {city.name}?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Licensed & Insured</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">All our locksmiths are fully licensed and insured for your peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Local to {city.name}</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Local locksmiths you can trust, available when you need us most.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Competitive Pricing</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Transparent pricing with no hidden fees or surprise charges.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Quality Guarantee</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">All our work comes with a comprehensive guarantee.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-bold text-gray-900 mb-4 fluid-section-title">
              Contact Locksmith Yorkshire in {city.name}
            </h2>
            <p className="text-gray-600 fluid-subtitle">
              Get in touch for professional locksmith services in {city.name}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Get In Touch</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center">
                  <PhoneIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-3 sm:mr-4 flex-shrink-0" />
                  <div>
                                         <p className="font-semibold text-gray-900 text-sm sm:text-base">Emergency Service</p>
                    <p className="text-gray-600 text-sm sm:text-base">{contact.emergency.phone}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-3 sm:mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Service Hours</p>
                                         <p className="text-gray-600 text-sm sm:text-base">{contact.hours.business}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-3 sm:mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Service Area</p>
                    <p className="text-gray-600 text-sm sm:text-base">{city.name} and surrounding areas</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Emergency Services Available in {city.name}:</h4>
                <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                  <li>• Locked out of home or car</li>
                  <li>• Broken key extraction</li>
                  <li>• Emergency lock replacement</li>
                  <li>• Security system malfunctions</li>
                  <li>• Lost key replacement</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Request a Quote for {city.name}</h3>
              <form className="space-y-4" action="/api/lead" method="post">
                {/* Honeypot */}
                <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />
                <input type="hidden" name="source" value="city-contact-form" />
                <input type="hidden" name="city" value={city.name} />
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Required
                  </label>
                                     <select
                     id="service"
                     name="service"
                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                   >
                     <option>Select a service</option>
                     <option>{services.emergency.name}</option>
                     <option>{services.residential.name}</option>
                     <option>{services.commercial.name}</option>
                     <option>{services.automotive.name}</option>
                     <option>{services.security.name}</option>
                   </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    placeholder="Describe your requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

        {/* Monetization: Sponsor / Featured / Advertise */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <SponsorBlock city={city} />
          <FeaturedListings city={city} />
          {/* Hide Advertise block when a sponsor is active */}
          {!city.sponsor?.active && <AdvertiseBlock city={city.name} />}
        </div>
      </div>
    </div>
  );
} 