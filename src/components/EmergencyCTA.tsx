'use client';
import { PhoneIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '@/config/site';

export default function EmergencyCTA() {
  return (
    <section 
      className="bg-gradient-to-r from-red-600 to-red-700 text-white py-4"
      role="banner"
      aria-label="Emergency locksmith service banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-2 sm:mb-0">
            <ExclamationTriangleIcon 
              className="h-5 w-5 mr-2 text-yellow-300" 
              aria-hidden="true"
            />
            <span className="text-sm font-medium">
              <span className="sr-only">Emergency Service Available: </span>
              24/7 Emergency Locksmith Service
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm">
              <span className="sr-only">Response time: </span>
              15-Minute Response Guarantee
            </span>
            
            <a
              href={`tel:${siteConfig.contact.emergency.phone}`}
              className="inline-flex items-center px-4 py-2 bg-white text-red-700 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
              aria-label={`Emergency locksmith service - Call ${siteConfig.contact.emergency.phone} now`}
            >
              <PhoneIcon className="h-4 w-4 mr-2" aria-hidden="true" />
              <span className="sr-only">Call emergency number: </span>
              {siteConfig.contact.emergency.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 