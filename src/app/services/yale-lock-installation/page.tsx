import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, ShieldCheckIcon, KeyIcon, HomeIcon, ClockIcon, CheckCircleIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import Header from '@/components/Header';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Yale Lock Installation Wakefield Yorkshire - Professional Fitting Service | Locksmith Yorkshire',
  description: 'Professional Yale lock installation Wakefield Yorkshire. Yale smart locks, digital locks, cylinder locks. Expert fitting across Yorkshire. BS3621 approved locks. Call today.',
  keywords: 'yale lock installation wakefield yorkshire, yale smart lock fitting, yale digital lock installation, yale cylinder locks, yale door locks yorkshire, BS3621 yale locks',
  openGraph: {
    title: 'Yale Lock Installation Wakefield Yorkshire - Professional Fitting Service',
    description: 'Professional Yale lock installation Wakefield Yorkshire. Yale smart locks, digital locks, cylinder locks. Expert fitting across Yorkshire.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.locksmithyorkshire.co.uk/services/yale-lock-installation',
  },
};

export default function YaleLockInstallationPage() {
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
            name: 'Yale Lock Installation Wakefield Yorkshire',
            description: 'Professional Yale lock installation and fitting services across Yorkshire including smart locks and digital security systems',
            provider: {
              '@type': 'LocalBusiness',
              name: company.fullName,
              telephone: contact.emergency.phone,
              areaServed: 'Yorkshire',
            },
            serviceType: 'Yale Lock Installation',
            brand: 'Yale',
            areaServed: [
              'Wakefield', 'Leeds', 'Sheffield', 'Bradford', 'Hull', 'York',
              'Halifax', 'Huddersfield', 'Doncaster', 'Rotherham', 'Barnsley'
            ],
            offers: {
              '@type': 'Offer',
              price: 'From £65',
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
              alt="Yale lock installation Wakefield Yorkshire"
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
                Yale Lock Installation Wakefield Yorkshire
              </h1>
              <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Professional Yale lock installation across Yorkshire. Smart locks, digital locks, BS3621 approved security. Expert fitting in Wakefield and all Yorkshire cities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contact.emergency.phone}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 hover:bg-gray-100 font-semibold text-lg rounded-lg transition-colors"
                >
                  <PhoneIcon className="h-6 w-6 mr-2" />
                  Call for Installation
                </a>
                <a
                  href="#yale-products"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold text-lg rounded-lg transition-colors"
                >
                  View Yale Products
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Yale Product Range */}
        <section id="yale-products" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                Yale Lock Installation Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional installation of the complete Yale lock range across Wakefield and Yorkshire
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Yale Smart Locks */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <LockClosedIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Yale Smart Locks</h3>
                <p className="text-gray-600 mb-4">
                  Latest Yale smart lock technology with smartphone control, keyless entry, and advanced security features.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Yale Conexis L1 Smart Lock</li>
                  <li>• Yale Linus Smart Lock</li>
                  <li>• Yale Keyless Connected</li>
                  <li>• App-controlled access</li>
                </ul>
              </div>

              {/* Yale Digital Locks */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <KeyIcon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Yale Digital Locks</h3>
                <p className="text-gray-600 mb-4">
                  Keypad entry systems and digital security solutions for homes and businesses across Yorkshire.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Yale Keyless Push Button</li>
                  <li>• Yale Digital Door Lock</li>
                  <li>• Touchscreen keypad entry</li>
                  <li>• Multiple user codes</li>
                </ul>
              </div>

              {/* Yale Cylinder Locks */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheckIcon className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Yale Cylinder Locks</h3>
                <p className="text-gray-600 mb-4">
                  High-security Yale cylinder locks including anti-snap, anti-pick, and BS3621 approved options.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Yale Superior Euro Cylinders</li>
                  <li>• BS3621 approved locks</li>
                  <li>• Anti-snap protection</li>
                  <li>• Insurance approved</li>
                </ul>
              </div>

              {/* Yale Deadlocks */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <HomeIcon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Yale Deadlocks</h3>
                <p className="text-gray-600 mb-4">
                  Traditional and modern Yale deadlock installation for maximum security on doors across Yorkshire.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Yale PM562 Deadlock</li>
                  <li>• Yale PM552 Auto Deadlock</li>
                  <li>• 5-lever BS3621 standard</li>
                  <li>• Insurance compliance</li>
                </ul>
              </div>

              {/* Yale Window Locks */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <LockClosedIcon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Yale Window Security</h3>
                <p className="text-gray-600 mb-4">
                  Complete range of Yale window locks and security hardware for residential and commercial properties.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Yale window stay locks</li>
                  <li>• Sash window locks</li>
                  <li>• UPVC window locks</li>
                  <li>• Child safety locks</li>
                </ul>
              </div>

              {/* Commercial Yale */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <ClockIcon className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Yale Commercial Security</h3>
                <p className="text-gray-600 mb-4">
                  Professional Yale lock installation for businesses, schools, and commercial properties across Yorkshire.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Yale access control systems</li>
                  <li>• Master key systems</li>
                  <li>• Emergency exit hardware</li>
                  <li>• High-traffic applications</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Yale */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Choose Yale Lock Installation?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Trusted Brand Heritage</h3>
                      <p className="text-gray-600">Yale has been the world's favourite lock brand for over 180 years, trusted by millions worldwide.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Insurance Approved</h3>
                      <p className="text-gray-600">All Yale locks meet and exceed insurance requirements with BS3621 approvals and Sold Secure ratings.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Advanced Technology</h3>
                      <p className="text-gray-600">From traditional mechanical locks to cutting-edge smart technology, Yale offers complete security solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Professional Installation</h3>
                      <p className="text-gray-600">Our certified Yale installers ensure perfect fitting and operation across Wakefield and all Yorkshire locations.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Wakefield Yale Lock Specialists</h3>
                  <p className="text-gray-600 text-sm">
                    As Yale approved installers serving Wakefield and Yorkshire, we stock the full range of Yale products 
                    and provide expert installation with manufacturer guarantees. From traditional deadlocks to the latest 
                    smart lock technology, we ensure your Yale locks perform perfectly in Yorkshire conditions.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Request Yale Lock Installation Quote</h3>
                <form className="space-y-4" action="/api/lead" method="post">
                  <input type="hidden" name="source" value="yale-lock-installation" />
                  <input type="hidden" name="service" value="Yale Lock Installation" />
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
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Wakefield, Yorkshire location"
                    />
                  </div>
                  <div>
                    <label htmlFor="yale-product" className="block text-sm font-medium text-gray-700 mb-1">
                      Yale Product Interest
                    </label>
                    <select
                      id="yale-product"
                      name="yale-product"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>Yale Smart Locks</option>
                      <option>Yale Digital Locks</option>
                      <option>Yale Cylinder Locks</option>
                      <option>Yale Deadlocks</option>
                      <option>Yale Window Locks</option>
                      <option>Not sure - need advice</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="property-type" className="block text-sm font-medium text-gray-700 mb-1">
                      Property Type
                    </label>
                    <select
                      id="property-type"
                      name="property-type"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>Residential - Home</option>
                      <option>Residential - Apartment</option>
                      <option>Commercial - Office</option>
                      <option>Commercial - Shop</option>
                      <option>Other</option>
                    </select>
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
                      placeholder="Tell us about your Yale lock requirements..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Request Yale Installation Quote
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
                Yale Lock Installation Across Yorkshire
              </h2>
              <p className="text-lg text-gray-600">
                Professional Yale lock installation services available throughout Yorkshire
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Wakefield', 'Leeds', 'Sheffield', 'Bradford', 'Hull', 'York',
                'Halifax', 'Huddersfield', 'Doncaster', 'Rotherham', 'Barnsley', 'Harrogate'
              ].map((city) => (
                <Link 
                  key={city}
                  href={`/locksmith/${city.toLowerCase()}`}
                  className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <span className="font-medium">Yale Locks {city}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Yale Lock Installation Wakefield Yorkshire?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Professional Yale lock fitting - smart locks, digital locks, and traditional security
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
