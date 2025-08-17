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

                {/* Internal Links Section for SEO */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Learn More About Our Services
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Discover comprehensive guides and expert advice on locksmith services and home security
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Emergency Services</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Learn what to do in emergency lockout situations and how we can help.
                  </p>
                  <a href="/blog/emergency-lockout-what-to-do" className="text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                    Emergency Lockout Guide →
                  </a>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Home Security</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Expert advice on choosing the right security locks for your home.
                  </p>
                  <a href="/blog/choosing-right-security-locks-home" className="text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                    Home Security Guide →
                  </a>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Automotive Services</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Car lockout solutions and automotive locksmith services.
                  </p>
                  <a href="/blog/car-lockout-solutions-prevention-emergency" className="text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                    Car Lockout Guide →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Crime Statistics & Safety Information */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Local Crime Statistics & Safety Information
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Stay informed about crime patterns in your area and access official police resources for enhanced security awareness
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* West Yorkshire Cities */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Leeds Crime Statistics</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    View official crime data, safety ratings, and police contact information for Leeds.
                  </p>
                  <div className="space-y-2">
                    <a href="https://www.police.uk/area/your-area/west-yorkshire-police/leeds/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      Official Crime Map →
                    </a>
                    <a href="https://www.westyorkshire.police.uk/your-area/leeds" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      West Yorkshire Police Leeds →
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Bradford Crime Statistics</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Check crime rates, safety ratings, and police contact details for Bradford.
                  </p>
                  <div className="space-y-2">
                    <a href="https://www.police.uk/area/your-area/west-yorkshire-police/bradford/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      Official Crime Map →
                    </a>
                    <a href="https://www.westyorkshire.police.uk/your-area/bradford" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      West Yorkshire Police Bradford →
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Wakefield Crime Statistics</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Access crime statistics, safety information, and police resources for Wakefield.
                  </p>
                  <div className="space-y-2">
                    <a href="https://www.police.uk/area/your-area/west-yorkshire-police/wakefield/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      Official Crime Map →
                    </a>
                    <a href="https://www.westyorkshire.police.uk/your-area/wakefield" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      West Yorkshire Police Wakefield →
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Halifax Crime Statistics</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    View crime patterns, safety information, and police resources for Halifax.
                  </p>
                  <div className="space-y-2">
                    <a href="https://www.police.uk/area/your-area/west-yorkshire-police/halifax/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      Official Crime Map →
                    </a>
                    <a href="https://www.westyorkshire.police.uk/your-area/halifax" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      West Yorkshire Police Halifax →
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Huddersfield Crime Statistics</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Check crime rates, safety ratings, and police contact details for Huddersfield.
                  </p>
                  <div className="space-y-2">
                    <a href="https://www.police.uk/area/your-area/west-yorkshire-police/huddersfield/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      Official Crime Map →
                    </a>
                    <a href="https://www.westyorkshire.police.uk/your-area/huddersfield" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      West Yorkshire Police Huddersfield →
                    </a>
                  </div>
                </div>
                
                {/* South Yorkshire Cities */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Sheffield Crime Statistics</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Access crime statistics, safety information, and police resources for Sheffield.
                  </p>
                  <div className="space-y-2">
                    <a href="https://www.police.uk/area/your-area/south-yorkshire-police/sheffield/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      Official Crime Map →
                    </a>
                    <a href="https://www.southyorkshire.police.uk/your-area/sheffield" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      South Yorkshire Police Sheffield →
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Doncaster Crime Statistics</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    View crime patterns, safety information, and police resources for Doncaster.
                  </p>
                  <div className="space-y-2">
                    <a href="https://www.police.uk/area/your-area/south-yorkshire-police/doncaster/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      Official Crime Map →
                    </a>
                    <a href="https://www.southyorkshire.police.uk/your-area/doncaster" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      South Yorkshire Police Doncaster →
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Rotherham Crime Statistics</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Check crime rates, safety ratings, and police contact details for Rotherham.
                  </p>
                  <div className="space-y-2">
                    <a href="https://www.police.uk/area/your-area/south-yorkshire-police/rotherham/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      Official Crime Map →
                    </a>
                    <a href="https://www.southyorkshire.police.uk/your-area/rotherham" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      South Yorkshire Police Rotherham →
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Barnsley Crime Statistics</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Access crime statistics, safety information, and police resources for Barnsley.
                  </p>
                  <div className="space-y-2">
                    <a href="https://www.police.uk/area/your-area/south-yorkshire-police/barnsley/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      Official Crime Map →
                    </a>
                    <a href="https://www.southyorkshire.police.uk/your-area/barnsley" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      South Yorkshire Police Barnsley →
                    </a>
                  </div>
                </div>
                
                {/* North Yorkshire Cities */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">York Crime Statistics</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Access crime data, safety ratings, and police contact information for York.
                  </p>
                  <div className="space-y-2">
                    <a href="https://www.police.uk/area/your-area/north-yorkshire-police/york/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      Official Crime Map →
                    </a>
                    <a href="https://www.northyorkshire.police.uk/your-area/york" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      North Yorkshire Police York →
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Scarborough Crime Statistics</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    View crime patterns, safety information, and police resources for Scarborough.
                  </p>
                  <div className="space-y-2">
                    <a href="https://www.police.uk/area/your-area/north-yorkshire-police/scarborough/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      Official Crime Map →
                    </a>
                    <a href="https://www.northyorkshire.police.uk/your-area/scarborough" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      North Yorkshire Police Scarborough →
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Harrogate Crime Statistics</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Check crime rates, safety ratings, and police contact details for Harrogate.
                  </p>
                  <div className="space-y-2">
                    <a href="https://www.police.uk/area/your-area/north-yorkshire-police/harrogate/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      Official Crime Map →
                    </a>
                    <a href="https://www.northyorkshire.police.uk/your-area/harrogate" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      North Yorkshire Police Harrogate →
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Whitby Crime Statistics</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Access crime statistics, safety information, and police resources for Whitby.
                  </p>
                  <div className="space-y-2">
                    <a href="https://www.police.uk/area/your-area/north-yorkshire-police/whitby/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      Official Crime Map →
                    </a>
                    <a href="https://www.northyorkshire.police.uk/your-area/whitby" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      North Yorkshire Police Whitby →
                    </a>
                  </div>
                </div>
                
                {/* East Yorkshire Cities */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Hull Crime Statistics</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    View crime patterns, safety information, and police resources for Hull.
                  </p>
                  <div className="space-y-2">
                    <a href="https://www.police.uk/area/your-area/humberside-police/kingston-upon-hull/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      Official Crime Map →
                    </a>
                    <a href="https://www.humberside.police.uk/your-area/hull" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      Humberside Police Hull →
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Beverley Crime Statistics</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Check crime rates, safety ratings, and police contact details for Beverley.
                  </p>
                  <div className="space-y-2">
                    <a href="https://www.police.uk/area/your-area/humberside-police/beverley/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      Official Crime Map →
                    </a>
                    <a href="https://www.humberside.police.uk/your-area/beverley" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      Humberside Police Beverley →
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Bridlington Crime Statistics</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Access crime statistics, safety information, and police resources for Bridlington.
                  </p>
                  <div className="space-y-2">
                    <a href="https://www.police.uk/area/your-area/humberside-police/bridlington/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      Official Crime Map →
                    </a>
                    <a href="https://www.humberside.police.uk/your-area/bridlington" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      Humberside Police Bridlington →
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Goole Crime Statistics</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    View crime patterns, safety information, and police resources for Goole.
                  </p>
                  <div className="space-y-2">
                    <a href="https://www.police.uk/area/your-area/humberside-police/goole/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      Official Crime Map →
                    </a>
                    <a href="https://www.humberside.police.uk/your-area/goole" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      Humberside Police Goole →
                    </a>
                  </div>
                </div>
                
                {/* Additional Towns */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Pontefract Crime Statistics</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Check crime rates, safety ratings, and police contact details for Pontefract.
                  </p>
                  <div className="space-y-2">
                    <a href="https://www.police.uk/area/your-area/west-yorkshire-police/pontefract/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      Official Crime Map →
                    </a>
                    <a href="https://www.westyorkshire.police.uk/your-area/pontefract" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      West Yorkshire Police Pontefract →
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Dewsbury Crime Statistics</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Access crime statistics, safety information, and police resources for Dewsbury.
                  </p>
                  <div className="space-y-2">
                    <a href="https://www.police.uk/area/your-area/west-yorkshire-police/dewsbury/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      Official Crime Map →
                    </a>
                    <a href="https://www.westyorkshire.police.uk/your-area/dewsbury" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      West Yorkshire Police Dewsbury →
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Middlesbrough Crime Statistics</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    View crime patterns, safety information, and police resources for Middlesbrough.
                  </p>
                  <div className="space-y-2">
                    <a href="https://www.police.uk/area/your-area/cleveland-police/middlesbrough/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      Official Crime Map →
                    </a>
                    <a href="https://www.cleveland.police.uk/your-area/middlesbrough" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      Cleveland Police Middlesbrough →
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">All Yorkshire Areas</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Find crime statistics and police information for all Yorkshire cities and towns.
                  </p>
                  <div className="space-y-2">
                    <a href="https://www.police.uk/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      National Crime Map →
                    </a>
                    <a href="https://www.gov.uk/report-crime" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                      Report Crime Online →
                    </a>
                  </div>
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