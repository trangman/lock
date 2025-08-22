import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, WrenchScrewdriverIcon, KeyIcon, ShieldCheckIcon, ClockIcon, CheckCircleIcon, HomeIcon } from '@heroicons/react/24/outline';
import Header from '@/components/Header';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'UPVC Door Lock Repair Yorkshire - Expert Multi-Point Lock Fixes | Locksmith Yorkshire',
  description: 'Professional UPVC door lock repair Yorkshire. Multi-point lock problems, stuck doors, faulty mechanisms. Same-day repairs across Leeds, Sheffield, Bradford, Hull, York. Expert service.',
  keywords: 'upvc door lock repair yorkshire, multi point lock repair, upvc door mechanism repair, stuck upvc door repair, upvc lock replacement yorkshire, door lock fix yorkshire',
  openGraph: {
    title: 'UPVC Door Lock Repair Yorkshire - Expert Multi-Point Lock Fixes',
    description: 'Professional UPVC door lock repair Yorkshire. Multi-point lock problems, stuck doors, faulty mechanisms. Same-day repairs across all Yorkshire cities.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.locksmithyorkshire.co.uk/services/upvc-door-lock-repair',
  },
};

export default function UPVCDoorLockRepairPage() {
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
            name: 'UPVC Door Lock Repair Yorkshire',
            description: 'Professional UPVC door lock repair and multi-point locking system services across Yorkshire',
            provider: {
              '@type': 'LocalBusiness',
              name: company.fullName,
              telephone: contact.emergency.phone,
              areaServed: 'Yorkshire',
            },
            serviceType: 'UPVC Door Lock Repair',
            areaServed: [
              'Leeds', 'Sheffield', 'Bradford', 'Hull', 'York', 'Wakefield', 
              'Halifax', 'Huddersfield', 'Doncaster', 'Rotherham', 'Barnsley'
            ],
            offers: {
              '@type': 'Offer',
              price: 'From £45',
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
              alt="UPVC door lock repair Yorkshire"
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
                UPVC Door Lock Repair Yorkshire
              </h1>
              <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Expert UPVC door lock repair across Yorkshire. Multi-point lock problems, stuck doors, faulty mechanisms. Same-day service available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contact.emergency.phone}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 hover:bg-gray-100 font-semibold text-lg rounded-lg transition-colors"
                >
                  <PhoneIcon className="h-6 w-6 mr-2" />
                  Call for Repair
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

        {/* Common UPVC Problems */}
        <section id="services" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                Common UPVC Door Lock Problems We Fix
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Expert UPVC door lock repair Yorkshire covering all common multi-point locking system issues
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Stuck Door */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <HomeIcon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Door Won&apos;t Lock or Unlock</h3>
                <p className="text-gray-600 mb-4">
                  Multi-point locking mechanism problems causing doors to stick or fail to secure properly.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Handle not lifting properly</li>
                  <li>• Key won&apos;t turn in cylinder</li>
                  <li>• Door misaligned with frame</li>
                  <li>• Locking points not engaging</li>
                </ul>
              </div>

              {/* Broken Mechanism */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <WrenchScrewdriverIcon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Faulty Multi-Point Mechanism</h3>
                <p className="text-gray-600 mb-4">
                  Internal mechanism failures in UPVC door multi-point locking systems requiring expert repair or replacement.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Gearbox mechanism broken</li>
                  <li>• Springs and cams worn out</li>
                  <li>• Roller or mushroom cams damaged</li>
                  <li>• Center case replacement needed</li>
                </ul>
              </div>

              {/* Weather Damage */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheckIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Weather-Related Problems</h3>
                <p className="text-gray-600 mb-4">
                  Yorkshire weather causing UPVC door expansion, warping, and lock mechanism failures.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Door expansion in summer heat</li>
                  <li>• Winter contraction issues</li>
                  <li>• Rain water damage to mechanism</li>
                  <li>• Frost affecting lock operation</li>
                </ul>
              </div>

              {/* Key Problems */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <KeyIcon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Key and Cylinder Issues</h3>
                <p className="text-gray-600 mb-4">
                  Euro cylinder problems, snapped keys, and worn key cutting affecting UPVC door operation.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Snapped key in lock</li>
                  <li>• Worn euro cylinder</li>
                  <li>• Key not turning smoothly</li>
                  <li>• Anti-snap cylinder upgrade</li>
                </ul>
              </div>

              {/* Handle Problems */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <WrenchScrewdriverIcon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Handle and Spindle Faults</h3>
                <p className="text-gray-600 mb-4">
                  Door handle problems preventing proper operation of UPVC multi-point locking systems.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Handle won&apos;t lift or lower</li>
                  <li>• Loose or wobbly handle</li>
                  <li>• Broken spindle mechanism</li>
                  <li>• Handle spring problems</li>
                </ul>
              </div>

              {/* Emergency Service */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <ClockIcon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency UPVC Repairs</h3>
                <p className="text-gray-600 mb-4">
                  24/7 emergency UPVC door lock repair service when you&apos;re locked out or security is compromised.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Locked out of property</li>
                  <li>• Door won&apos;t close/secure</li>
                  <li>• Break-in damage repair</li>
                  <li>• Same-day emergency fixes</li>
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
                  Expert UPVC Door Lock Repair Yorkshire
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">UPVC Specialists</h3>
                      <p className="text-gray-600">Extensive experience with all UPVC door brands and multi-point locking mechanisms across Yorkshire.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Same-Day Service</h3>
                      <p className="text-gray-600">Most UPVC door lock repairs completed same-day with parts carried in our vans for immediate fixes.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">All Yorkshire Coverage</h3>
                      <p className="text-gray-600">Serving Leeds, Sheffield, Bradford, Hull, York, and all Yorkshire towns with local UPVC repair experts.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Guaranteed Work</h3>
                      <p className="text-gray-600">All UPVC door lock repairs come with our comprehensive guarantee for parts and workmanship.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Yorkshire Weather & UPVC Doors</h3>
                  <p className="text-gray-600 text-sm">
                    Yorkshire&apos;s variable climate is particularly hard on UPVC doors. Our technicians understand how local weather 
                    patterns affect door alignment and locking mechanisms, providing solutions that work year-round in Yorkshire conditions.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get UPVC Door Lock Repair Quote</h3>
                <form className="space-y-4" action="/api/lead" method="post">
                  <input type="hidden" name="source" value="upvc-door-lock-repair" />
                  <input type="hidden" name="service" value="UPVC Door Lock Repair" />
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
                      placeholder="Your Yorkshire location"
                    />
                  </div>
                  <div>
                    <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-1">
                      UPVC Door Problem
                    </label>
                    <select
                      id="problem"
                      name="problem"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>Door won&apos;t lock/unlock</option>
                      <option>Handle not working</option>
                      <option>Key won&apos;t turn</option>
                      <option>Door sticking</option>
                      <option>Mechanism broken</option>
                      <option>Other problem</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">
                      Urgency
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>Emergency - locked out</option>
                      <option>Urgent - same day</option>
                      <option>Within 2-3 days</option>
                      <option>Within a week</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Describe the problem in more detail..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Request Repair Quote
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
                UPVC Door Lock Repair Across Yorkshire
              </h2>
              <p className="text-lg text-gray-600">
                Professional UPVC door lock repair services available in all Yorkshire cities and towns
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
                  <span className="font-medium">UPVC Repair {city}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need UPVC Door Lock Repair Yorkshire?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Expert UPVC multi-point lock repair - same day service available
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
