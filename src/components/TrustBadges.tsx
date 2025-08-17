'use client';
import { 
  ShieldCheckIcon, 
  ClockIcon, 
  StarIcon, 
  CheckBadgeIcon,
  UserGroupIcon,
  CogIcon,
  HeartIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const trustBadges = [
  {
    icon: ShieldCheckIcon,
    title: "Licensed & Insured",
    description: "Fully certified locksmiths with comprehensive insurance coverage",
    color: "text-green-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    icon: ClockIcon,
    title: "15-Minute Response",
    description: "Guaranteed emergency response time across Yorkshire",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    icon: StarIcon,
    title: "4.9/5 Rating",
    description: "Excellent service rating from 1000+ satisfied customers",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600"
  },
  {
    icon: CheckBadgeIcon,
    title: "24/7 Available",
    description: "Round-the-clock emergency locksmith services",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  {
    icon: UserGroupIcon,
    title: "DBS Checked Staff",
    description: "All team members background verified for your security",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600"
  },
  {
    icon: CogIcon,
    title: "Professional Standards",
    description: "Guild of Professional Locksmiths members",
    color: "text-gray-600",
    bgColor: "bg-gray-50",
    iconColor: "text-gray-600"
  },
  {
    icon: HeartIcon,
    title: "Customer Focused",
    description: "Dedicated to providing exceptional service experience",
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600"
  },
  {
    icon: SparklesIcon,
    title: "Quality Assured",
    description: "Premium materials and workmanship guaranteed",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600"
  }
];

export default function TrustBadges() {
  return (
    <section 
      className="py-16 bg-white"
      aria-labelledby="trust-badges-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            id="trust-badges-heading"
            className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
          >
            Why Choose Locksmith Yorkshire?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We maintain the highest professional standards to ensure your security and satisfaction. 
            Every member of our team is committed to excellence in locksmith services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustBadges.map((badge, index) => {
            const IconComponent = badge.icon;
            const badgeId = `trust-badge-${index}`;
            
            return (
              <div
                key={index}
                className={`${badge.bgColor} rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2`}
                role="region"
                aria-labelledby={badgeId}
                tabIndex={0}
              >
                <div className="flex flex-col items-center">
                  <div className={`${badge.iconColor} p-3 rounded-full bg-white shadow-sm mb-4`}>
                    <IconComponent 
                      className="h-8 w-8" 
                      aria-hidden="true"
                      aria-label={`${badge.title} icon`}
                    />
                  </div>
                  
                  <h3 
                    id={badgeId}
                    className={`${badge.color} text-lg font-semibold mb-2`}
                  >
                    {badge.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Professional Standards & Certifications
            </h3>
            <p className="text-gray-600 mb-4">
              Our commitment to excellence is backed by industry recognition and continuous training. 
              Learn more about our <a href="/blog" className="text-blue-600 hover:text-blue-700 underline">security expertise</a> and <a href="/accessibility" className="text-blue-600 hover:text-blue-700 underline">accessibility standards</a>.
            </p>
            <ul className="text-sm text-gray-600 space-y-1" role="list">
              <li>• Guild of Professional Locksmiths Member</li>
              <li>• ISO 9001 Quality Management Certified</li>
              <li>• DBS Enhanced Disclosure for All Staff</li>
              <li>• Continuous Professional Development</li>
              <li>• Comprehensive Public Liability Insurance</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Ready to experience professional locksmith services?
          </p>
          <a
            href={`tel:${process.env.NEXT_PUBLIC_EMERGENCY_PHONE || '0800-123-4567'}`}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            aria-label="Call emergency locksmith service now"
          >
            Call Now for Professional Service
          </a>
        </div>
      </div>
    </section>
  );
} 