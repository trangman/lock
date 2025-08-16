'use client';
import { ShieldCheckIcon, ClockIcon, StarIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

export default function TrustBadges() {
  const badges = [
    {
      icon: ShieldCheckIcon,
      title: 'Licensed & Insured',
      description: 'Fully certified locksmiths',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: ClockIcon,
      title: '15-Minute Response',
      description: 'Emergency service guarantee',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: StarIcon,
      title: '4.9/5 Rating',
      description: 'From 1000+ customers',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: CheckBadgeIcon,
      title: '24/7 Available',
      description: 'Always here when you need us',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-bold text-gray-900 mb-4 fluid-section-title">
            Why Customers Trust Locksmith Yorkshire
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto fluid-subtitle">
            Professional, reliable, and trusted locksmith services across North, East and West Yorkshire
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 ${badge.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <badge.icon className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{badge.title}</h3>
              <p className="text-sm text-gray-600">{badge.description}</p>
            </div>
          ))}
        </div>

        {/* Customer Testimonials */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">5.0</span>
            </div>
            <p className="text-gray-700 mb-4">
              &ldquo;Amazing service! They arrived within 10 minutes and fixed my lockout quickly. Very professional and reasonably priced.&rdquo;
            </p>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
              <div>
                <p className="font-semibold text-sm">Sarah M.</p>
                <p className="text-xs text-gray-500">Residential Customer</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">5.0</span>
            </div>
            <p className="text-gray-700 mb-4">
              &ldquo;Used them for our office security upgrade. Excellent work, great communication, and competitive pricing. Highly recommend!&rdquo;
            </p>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
              <div>
                <p className="font-semibold text-sm">David R.</p>
                <p className="text-xs text-gray-500">Commercial Customer</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">5.0</span>
            </div>
            <p className="text-gray-700 mb-4">
              &ldquo;Emergency call at 2 AM and they were here in 12 minutes! Professional, courteous, and fixed everything perfectly.&rdquo;
            </p>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
              <div>
                <p className="font-semibold text-sm">Michael T.</p>
                <p className="text-xs text-gray-500">Emergency Customer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Our Certifications</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-2"></div>
              <p className="text-xs text-gray-600">DBS Checked</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-2"></div>
              <p className="text-xs text-gray-600">Guild of Locksmiths</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-2"></div>
              <p className="text-xs text-gray-600">Public Liability Insurance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-2"></div>
              <p className="text-xs text-gray-600">Trading Standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 