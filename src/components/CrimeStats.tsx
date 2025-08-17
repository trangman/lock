'use client';
import { 
  ShieldCheckIcon, 
  ExclamationTriangleIcon, 
  MapPinIcon, 
  PhoneIcon, 
  GlobeAltIcon,
  LightBulbIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

interface CrimeStatsProps {
  cityName: string;
  crimeStats: {
    policeForce: string;
    crimeRate: string;
    safetyRating: string;
    commonCrimes: string[];
    safetyTips: string[];
    policeContact: {
      emergency: string;
      nonEmergency: string;
      website: string;
    };
    crimeMapUrl: string;
    neighborhoodWatch: string[];
  };
}

export default function CrimeStats({ cityName, crimeStats }: CrimeStatsProps) {
  const getSafetyColor = (rating: string) => {
    switch (rating.toLowerCase()) {
      case 'excellent':
        return 'text-green-600 bg-green-50';
      case 'very good':
        return 'text-green-700 bg-green-50';
      case 'good':
        return 'text-blue-600 bg-blue-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      case 'poor':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getCrimeRateColor = (rate: string) => {
    switch (rate.toLowerCase()) {
      case 'low':
        return 'text-green-600 bg-green-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      case 'high':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <section className="py-12 bg-gray-50" aria-labelledby="crime-stats-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 
            id="crime-stats-heading"
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
          >
            Crime Statistics & Safety Information for {cityName}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed about local crime patterns and safety measures to protect your property and family
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Statistics and Police Info */}
          <div className="space-y-6">
            {/* Safety Overview */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <ShieldCheckIcon className="h-5 w-5 text-blue-600 mr-2" />
                Safety Overview
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getSafetyColor(crimeStats.safetyRating)}`}>
                    {crimeStats.safetyRating}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Safety Rating</p>
                </div>
                <div className="text-center">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCrimeRateColor(crimeStats.crimeRate)}`}>
                    {crimeStats.crimeRate}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Crime Rate</p>
                </div>
              </div>
            </div>

            {/* Police Force Information */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <ShieldCheckIcon className="h-5 w-5 text-blue-600 mr-2" />
                {crimeStats.policeForce}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <PhoneIcon className="h-4 w-4 text-red-600 mr-2" />
                  <span className="text-sm text-gray-600">Emergency: </span>
                  <span className="text-sm font-medium text-red-600 ml-1">{crimeStats.policeContact.emergency}</span>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-600">Non-Emergency: </span>
                  <span className="text-sm font-medium text-blue-600 ml-1">{crimeStats.policeContact.nonEmergency}</span>
                </div>
                <div className="flex items-center">
                  <GlobeAltIcon className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm text-gray-600">Website: </span>
                  <Link 
                    href={crimeStats.policeContact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-green-600 hover:text-green-700 underline ml-1"
                  >
                    Visit Police Website
                  </Link>
                </div>
              </div>
            </div>

            {/* Common Crimes */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <ExclamationTriangleIcon className="h-5 w-5 text-orange-600 mr-2" />
                Common Crimes in {cityName}
              </h3>
              <ul className="space-y-2">
                {crimeStats.commonCrimes.map((crime, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    {crime}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Safety Tips and Resources */}
          <div className="space-y-6">
            {/* Safety Tips */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <LightBulbIcon className="h-5 w-5 text-yellow-600 mr-2" />
                Safety Tips for {cityName}
              </h3>
              <ul className="space-y-3">
                {crimeStats.safetyTips.map((tip, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-700">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Neighborhood Watch */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <UserGroupIcon className="h-5 w-5 text-green-600 mr-2" />
                Neighborhood Watch Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {crimeStats.neighborhoodWatch.map((area, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Consider joining your local neighborhood watch scheme for enhanced community safety
              </p>
            </div>

            {/* Crime Map Link */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <MapPinIcon className="h-5 w-5 text-purple-600 mr-2" />
                Official Crime Map
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                View detailed crime statistics and patterns in your area using the official police crime map
              </p>
              <Link 
                href={crimeStats.crimeMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors"
              >
                <MapPinIcon className="h-4 w-4 mr-2" />
                View Crime Map
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <div className="bg-blue-50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Need Enhanced Security for Your Property?
            </h3>
            <p className="text-gray-600 mb-4">
              Based on local crime patterns, we recommend upgrading your security systems. Our expert locksmiths can assess your current security and recommend improvements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${process.env.NEXT_PUBLIC_EMERGENCY_PHONE || '0800-123-4567'}`}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <PhoneIcon className="h-4 w-4 mr-2" />
                Get Security Quote
              </a>
              <Link
                href="/blog/choosing-right-security-locks-home"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                Security Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
