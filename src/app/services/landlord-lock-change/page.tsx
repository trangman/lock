import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, HomeIcon, KeyIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Header from '@/components/Header';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Landlord Lock Change Service Yorkshire - Property Management Security | Locksmith Yorkshire',
  description: 'Professional landlord lock change service Yorkshire. Tenant changeover, property management, bulk lock changes. Fast, reliable service for Yorkshire property managers. DBS checked, licensed.',
  keywords: 'landlord lock change service yorkshire, property management locksmith, tenant changeover locks, rental property security, landlord locksmith yorkshire, property lock change, tenant lock replacement',
  openGraph: {
    title: 'Landlord Lock Change Service Yorkshire - Property Management Security',
    description: 'Professional landlord lock change service Yorkshire. Tenant changeover, property management, bulk lock changes. Fast, reliable service for Yorkshire property managers.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.locksmithyorkshire.co.uk/services/landlord-lock-change',
  },
};

export default function LandlordLockChangePage() {
  const { contact, company } = siteConfig;

  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Landlord Lock Change Service Yorkshire',
            description: 'Professional lock change services for landlords and property managers across Yorkshire',
            provider: {
              '@type': 'LocalBusiness',
              name: company.fullName,
              telephone: contact.emergency.phone,
              areaServed: 'Yorkshire',
            },
            serviceType: 'Locksmith Service',
            areaServed: [
              'Leeds', 'Sheffield', 'Bradford', 'Hull', 'York', 'Wakefield', 
              'Halifax', 'Huddersfield', 'Doncaster', 'Rotherham', 'Barnsley'
            ],
            offers: {
              '@type': 'Offer',
              price: 'From £35',
              priceCurrency: 'GBP',
              availability: 'https://schema.org/InStock',
            },
          }),
        }}
      />

      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="/headers/default.webp"
              alt="Landlord lock change service Yorkshire"
              fill
              className="object-cover opacity-50"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/40"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Landlord Lock Change Service Yorkshire
              </h1>
              <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Professional property management locksmith services. Tenant changeover, bulk lock changes, and rental property security across Yorkshire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contact.emergency.phone}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 hover:bg-gray-100 font-semibold text-lg rounded-lg transition-colors"
                >
                  <PhoneIcon className="h-6 w-6 mr-2" />
                  Call for Quote
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold text-lg rounded-lg transition-colors"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                Landlord Lock Change Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive locksmith services designed specifically for Yorkshire landlords and property management companies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Tenant Changeover */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <KeyIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tenant Changeover Service</h3>
                <p className="text-gray-600 mb-4">
                  Complete lock change service between tenancies. New locks, keys, and security assessment for incoming tenants.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Lock replacement or rekeying</li>
                  <li>• Multiple key sets provided</li>
                  <li>• Security assessment included</li>
                  <li>• Certificate of work</li>
                </ul>
              </div>

              {/* Bulk Property Services */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <HomeIcon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Bulk Property Management</h3>
                <p className="text-gray-600 mb-4">
                  Discounted rates for multiple properties. Master key systems and consistent security standards across your portfolio.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Volume discounts available</li>
                  <li>• Master key systems</li>
                  <li>• Scheduled maintenance</li>
                  <li>• Priority response times</li>
                </ul>
              </div>

              {/* Emergency Locksmith */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <ClockIcon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Property Access</h3>
                <p className="text-gray-600 mb-4">
                  24/7 emergency locksmith service for urgent property access needs. Locked-out tenants and property emergencies.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 24/7 availability</li>
                  <li>• 15-minute response time</li>
                  <li>• Tenant lockout assistance</li>
                  <li>• Property emergency access</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Yorkshire Landlords Choose Our Lock Change Service
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">DBS Checked Locksmiths</h3>
                      <p className="text-gray-600">All our locksmiths are DBS checked and vetted, ensuring safety and trust for your tenants.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Landlord Experience</h3>
                      <p className="text-gray-600">Extensive experience working with landlords, letting agents, and property management companies across Yorkshire.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Competitive Pricing</h3>
                      <p className="text-gray-600">Volume discounts for multiple properties and regular customers. Transparent pricing with no hidden fees.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Documentation & Compliance</h3>
                      <p className="text-gray-600">Complete work certificates, invoicing for multiple properties, and compliance with housing regulations.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get a Quote for Your Properties</h3>
                <form className="space-y-4" action="/api/lead" method="post">
                  <input type="hidden" name="source" value="landlord-lock-change" />
                  <input type="hidden" name="service" value="Landlord Lock Change Service" />
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
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
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your phone number"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="properties" className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Properties
                    </label>
                    <select
                      id="properties"
                      name="properties"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>1 property</option>
                      <option>2-5 properties</option>
                      <option>6-10 properties</option>
                      <option>11-20 properties</option>
                      <option>20+ properties</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Property location(s)"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Request Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Areas */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Landlord Lock Change Service Coverage
              </h2>
              <p className="text-lg text-gray-600">
                Professional locksmith services for landlords across all Yorkshire cities and towns
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Leeds', 'Sheffield', 'Bradford', 'Hull', 'York', 'Wakefield',
                'Halifax', 'Huddersfield', 'Doncaster', 'Rotherham', 'Barnsley', 'Harrogate'
              ].map((city) => (
                <Link 
                  key={city}
                  href={`/locksmith/${city.toLowerCase()}`}
                  className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <span className="font-medium">{city}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Landlord Lock Change Service Yorkshire?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact us today for professional property management locksmith services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contact.emergency.phone}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold text-lg rounded-lg transition-colors"
              >
                <PhoneIcon className="h-6 w-6 mr-2" />
                Call {contact.emergency.phone}
              </a>
              <a
                href="mailto:info@locksmithyorkshire.co.uk"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold text-lg rounded-lg transition-colors"
              >
                Email for Quote
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
