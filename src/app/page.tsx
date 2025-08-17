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
            '@type': 'Organization',
            name: company.fullName,
            url: 'https://www.locksmithyorkshire.co.uk/',
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
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={getHeroImage()}
            alt="Professional Locksmith Services"
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
                Professional Locksmith Services
              </h1>
              <p className="mb-6 sm:mb-8 text-blue-100 fluid-subtitle">
                {company.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href={`tel:${contact.emergency.phone}`} className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">
                  <PhoneIcon className="h-5 w-5 inline mr-2" />
                  Emergency Call Now
                </a>
                <a href="#services" className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center">
                  Our Services
                </a>
                <Link href="/locksmith" className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center">
                  All Cities
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Why Choose {company.name}?</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center">
                    <ClockIcon className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-blue-200 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{contact.service.hours}</span>
                  </div>
                  <div className="flex items-center">
                    <ShieldCheckIcon className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-blue-200 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-blue-200 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Local & Reliable</span>
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

      {/* Trust Badges Section */}
      <TrustBadges />

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-bold text-gray-900 mb-4 fluid-section-title">
              Our Professional Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto px-4 fluid-subtitle">
              We provide comprehensive locksmith services for residential and commercial properties
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
              <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                {services.emergency.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
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
              <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                {services.residential.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
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
              <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                {services.commercial.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>

            {/* Lock Installation */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <LockClosedIcon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{services.installation.name}</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                {services.installation.description}
              </p>
              <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                {services.installation.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>

            {/* Key Cutting */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <KeyIcon className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{services.keyCutting.name}</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                {services.keyCutting.description}
              </p>
              <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                {services.keyCutting.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>

            {/* Security Consultation */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheckIcon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{services.consultation.name}</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                {services.consultation.description}
              </p>
              <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                {services.consultation.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="font-bold text-gray-900 mb-6 fluid-section-title">
                About {company.name}
              </h2>
              <p className="text-gray-600 mb-6 fluid-body">
                With over {company.experience} years of experience in the locksmith industry, {company.name} has been providing 
                reliable, professional, and affordable locksmith services to residential and commercial clients 
                throughout the UK.
              </p>
              <p className="text-gray-600 mb-6 fluid-body">
                Our team of certified locksmiths is available 24/7 to handle any emergency situation, 
                from lockouts to broken keys. We pride ourselves on our quick response times, 
                competitive pricing, and commitment to customer satisfaction.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">{company.experience}</div>
                  <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-600">Emergency Service</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">{company.customers}</div>
                  <div className="text-xs sm:text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">{company.responseTime}</div>
                  <div className="text-xs sm:text-sm text-gray-600">Response Time</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Why Choose Us?</h3>
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
                <div className="flex items-start">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Local & Reliable</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Local locksmiths you can trust, available when you need us most.</p>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Get in touch for professional locksmith services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Get In Touch</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center">
                  <PhoneIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-3 sm:mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">{contact.emergency.label}</p>
                    <p className="text-gray-600 text-sm sm:text-base">{contact.emergency.display}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-3 sm:mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Service Hours</p>
                    <p className="text-gray-600 text-sm sm:text-base">{contact.service.hours}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-3 sm:mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Service Area</p>
                    <p className="text-gray-600 text-sm sm:text-base">{contact.service.area}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Emergency Services Available:</h4>
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
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Request a Quote</h3>
              <form
                className="space-y-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget as HTMLFormElement;
                  const formData = new FormData(form);
                  const payload = Object.fromEntries(formData.entries());
                  await fetch('/api/lead', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      name: payload.name,
                      email: payload.email,
                      phone: payload.phone,
                      service: payload.service,
                      message: payload.message,
                      source: 'home-contact-form',
                      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
                      referrer: typeof document !== 'undefined' ? document.referrer : '',
                      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
                      timeToSubmitSec: null,
                      honeypot: payload.website || '',
                    }),
                  });
                }}
              >
                {/* Honeypot */}
                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
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
                    <option>{services.installation.name}</option>
                    <option>{services.keyCutting.name}</option>
                    <option>{services.consultation.name}</option>
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

      {/* Monetization: Advertise for businesses */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <AdvertiseBlock />
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-4">{company.name}</h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                {company.tagline}
              </p>
              <div className="flex space-x-4">
                <a href={`tel:${contact.emergency.phone}`} className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors">
                  Emergency Call
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#services" className="hover:text-white transition-colors">{services.emergency.name}</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">{services.residential.name}</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">{services.commercial.name}</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">{services.installation.name}</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">{services.keyCutting.name}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>Emergency: {contact.emergency.display}</li>
                <li>Service: {contact.service.hours}</li>
                <li>Area: {contact.service.area}</li>
                <li>Licensed & Insured</li>
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4">Emergency Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>• Locked out of home</li>
                <li>• Locked out of car</li>
                <li>• Broken key extraction</li>
                <li>• Emergency lock replacement</li>
                <li>• Security system issues</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
            <p>&copy; 2024 {company.name}. All rights reserved. Licensed and insured locksmith services.</p>
          </div>
        </div>
      </footer>

      {/* Lead Generation Components */}
      <LiveChat />
      
      {/* Exit Intent Lead Capture */}
      <LeadCapture
        type="exit-intent"
        title={leadGen.exitIntent.title}
        subtitle={leadGen.exitIntent.subtitle}
        offer={leadGen.exitIntent.offer}
      />
    </div>
  );
}
