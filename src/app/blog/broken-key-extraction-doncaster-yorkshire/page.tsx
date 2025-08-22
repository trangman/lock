import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, WrenchScrewdriverIcon, KeyIcon, ClockIcon, ExclamationTriangleIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Header from '@/components/Header';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Broken Key Extraction Doncaster Yorkshire - Emergency Key Removal Service | Locksmith Yorkshire',
  description: 'Expert broken key extraction Doncaster Yorkshire. Emergency key removal from locks. 24/7 service across Yorkshire. Professional key extraction without damage. Call now!',
  keywords: 'broken key extraction doncaster yorkshire, key stuck in lock doncaster, emergency key removal yorkshire, key extraction service, broken key locksmith doncaster, snapped key removal',
  openGraph: {
    title: 'Broken Key Extraction Doncaster Yorkshire - Emergency Key Removal Service',
    description: 'Expert broken key extraction Doncaster Yorkshire. Emergency key removal from locks. 24/7 service across Yorkshire.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.locksmithyorkshire.co.uk/blog/broken-key-extraction-doncaster-yorkshire',
  },
};

export default function BrokenKeyExtractionPage() {
  const { contact, company } = siteConfig;

  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Broken Key Extraction Doncaster Yorkshire - Emergency Key Removal Service',
            description: 'Complete guide to broken key extraction in Doncaster and Yorkshire, including emergency services and professional removal techniques.',
            author: {
              '@type': 'Organization',
              name: company.fullName,
            },
            publisher: {
              '@type': 'Organization',
              name: company.fullName,
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.locksmithyorkshire.co.uk/locksmith-yorkshire400.png',
              },
            },
            datePublished: '2024-12-10',
            dateModified: '2024-12-10',
            articleSection: 'Locksmith Services',
            keywords: 'broken key extraction, doncaster, yorkshire, emergency locksmith, key removal',
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
              alt="Broken key extraction Doncaster Yorkshire"
              fill
              className="object-cover opacity-50"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/40"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Broken Key Extraction Doncaster Yorkshire
              </h1>
              <p className="text-xl sm:text-2xl mb-8 text-blue-100">
                Emergency key removal service across Yorkshire. Professional broken key extraction without lock damage. Available 24/7 in Doncaster and surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contact.emergency.phone}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold text-lg rounded-lg transition-colors"
                >
                  <PhoneIcon className="h-6 w-6 mr-2" />
                  Emergency Call
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 font-medium">
                A broken key stuck in a lock is one of the most frustrating locksmith emergencies. Whether it&apos;s your front door, car, or office lock, a snapped key can leave you stranded and stressed. Our professional broken key extraction service in Doncaster, Yorkshire provides fast, reliable solutions that get you back inside without damaging your locks.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Why Keys Break in Locks
              </h2>
              
              <p className="mb-6">
                Understanding why keys break can help you prevent future incidents. In Doncaster and across Yorkshire, several factors contribute to key breakage:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Causes of Broken Keys</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong>Worn Keys:</strong> Regular use gradually wears down the metal, especially on older keys</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong>Excessive Force:</strong> Trying to force a stiff lock can snap keys under pressure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong>Yorkshire Weather:</strong> Cold temperatures make metal brittle and prone to snapping</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong>Lock Problems:</strong> Stiff or damaged locks put extra stress on keys during operation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong>Poor Quality Keys:</strong> Cheap duplicate keys are more likely to break under stress</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Professional Broken Key Extraction in Doncaster
              </h2>
              
              <p className="mb-6">
                Our Doncaster broken key extraction service uses professional tools and techniques to remove broken keys without damaging your locks. We serve Doncaster city centre, Bentley, Edenthorpe, Bessacarr, Cantley, and all surrounding South Yorkshire areas.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <WrenchScrewdriverIcon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Extraction Tools</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Professional extraction pliers</li>
                    <li>• Broken key extractors</li>
                    <li>• Hook and rake tools</li>
                    <li>• Magnetic extractors</li>
                    <li>• Specialized locksmith picks</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <ClockIcon className="h-8 w-8 text-green-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Quick Response</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 15-minute emergency response</li>
                    <li>• 24/7 availability</li>
                    <li>• Mobile service to your location</li>
                    <li>• No call-out charges</li>
                    <li>• Transparent pricing</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                What NOT to Do When Your Key Breaks
              </h2>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
                <div className="flex items-start">
                  <ExclamationTriangleIcon className="h-6 w-6 text-red-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-800 mb-2">Avoid These Common Mistakes:</h3>
                    <ul className="space-y-2 text-red-700">
                      <li>• Using pliers or tweezers - can push the key deeper</li>
                      <li>• Applying super glue to extract the key - will damage the lock</li>
                      <li>• Using needles or small tools - risk breaking them off too</li>
                      <li>• Continuing to turn or force the broken key</li>
                      <li>• Using WD-40 or lubricants without professional advice</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Our Broken Key Extraction Process
              </h2>
              
              <p className="mb-6">
                When you call our Doncaster broken key extraction service, here&apos;s what you can expect:
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1 flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
                    <p className="text-gray-600">Our locksmith examines the broken key situation, determines the best extraction method, and provides a clear quote.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1 flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Preparation</h3>
                    <p className="text-gray-600">We prepare the lock and select the appropriate extraction tools based on the key type and break location.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1 flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Extraction</h3>
                    <p className="text-gray-600">Using professional tools, we carefully extract the broken key piece without damaging the lock mechanism.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1 flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Testing & Replacement</h3>
                    <p className="text-gray-600">We test the lock operation and can cut replacement keys on-site if needed.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Coverage Areas in Yorkshire
              </h2>
              
              <p className="mb-6">
                Our broken key extraction service covers Doncaster and surrounding areas throughout South Yorkshire:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {[
                  'Doncaster City Centre',
                  'Bentley',
                  'Edenthorpe', 
                  'Bessacarr',
                  'Cantley',
                  'Armthorpe',
                  'Balby',
                  'Hyde Park',
                  'Wheatley',
                  'Intake',
                  'Rossington',
                  'Tickhill'
                ].map((area) => (
                  <div key={area} className="bg-gray-50 rounded-lg p-3 text-center">
                    <span className="font-medium text-gray-900">{area}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Preventing Future Key Breakages
              </h2>
              
              <p className="mb-6">
                While our broken key extraction service is always available, prevention is better than cure. Here are some tips to avoid key breakage in Doncaster&apos;s climate:
              </p>

              <div className="bg-yellow-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Prevention Tips</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <KeyIcon className="h-5 w-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Keep locks lubricated, especially during Yorkshire winters</span>
                  </li>
                  <li className="flex items-start">
                    <KeyIcon className="h-5 w-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Replace worn keys before they become too thin</span>
                  </li>
                  <li className="flex items-start">
                    <KeyIcon className="h-5 w-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Use gentle, steady pressure when turning stiff locks</span>
                  </li>
                  <li className="flex items-start">
                    <KeyIcon className="h-5 w-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Warm keys in cold weather before use</span>
                  </li>
                  <li className="flex items-start">
                    <KeyIcon className="h-5 w-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Have locks serviced annually to maintain smooth operation</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Why Choose Our Doncaster Service?
              </h2>
              
              <p className="mb-6">
                When you need broken key extraction in Doncaster, Yorkshire, choose our professional service for:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Local Expertise</h3>
                      <p className="text-gray-600 text-sm">Extensive experience with Doncaster properties and Yorkshire weather conditions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">No Lock Damage</h3>
                      <p className="text-gray-600 text-sm">Professional extraction without damaging your existing locks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">24/7 Availability</h3>
                      <p className="text-gray-600 text-sm">Emergency broken key extraction available around the clock</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Competitive Pricing</h3>
                      <p className="text-gray-600 text-sm">Transparent, fair pricing with no hidden charges</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Licensed & Insured</h3>
                      <p className="text-gray-600 text-sm">Fully licensed locksmiths with comprehensive insurance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Key Replacement</h3>
                      <p className="text-gray-600 text-sm">On-site key cutting and replacement services available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Emergency CTA */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Emergency Broken Key Extraction in Doncaster?
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Professional key removal service - available 24/7 across Yorkshire
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contact.emergency.phone}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 hover:bg-gray-100 font-semibold text-lg rounded-lg transition-colors"
              >
                <PhoneIcon className="h-6 w-6 mr-2" />
                Emergency Call {contact.emergency.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Locksmith Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/emergency-lockout-what-to-do" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Lockout: What to Do</h3>
                <p className="text-gray-600">Complete guide to handling lockout emergencies across Yorkshire.</p>
              </Link>
              <Link href="/blog/key-cutting-services-guide" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Key Cutting Services Guide</h3>
                <p className="text-gray-600">Everything you need to know about professional key cutting services.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
