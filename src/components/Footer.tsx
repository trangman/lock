import Link from 'next/link';
import Image from 'next/image';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon,
  KeyIcon,
  HomeIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';
import { siteConfig } from '@/config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { contact, company } = siteConfig;

  return (
    <footer className="bg-gray-900 text-white" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Information */}
          <div className="space-y-4">
                         <div className="flex items-center space-x-2">
               <Image 
                 src="/locksmith-yorkshire400.png" 
                 alt="Locksmith Yorkshire" 
                 width={400}
                 height={48}
                 className="h-8 w-auto"
                 priority
               />
             </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional, licensed, and insured locksmith services across Yorkshire. 
              24/7 emergency response with rapid response times.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog/emergency-lockout-what-to-do" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <PhoneIcon className="h-4 w-4 mr-2" />
                  Emergency Lockout
                </Link>
              </li>
              <li>
                <Link href="/blog/choosing-right-security-locks-home" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <HomeIcon className="h-4 w-4 mr-2" />
                  Residential Security
                </Link>
              </li>
              <li>
                <Link href="/blog/commercial-security-protecting-business" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <BuildingOfficeIcon className="h-4 w-4 mr-2" />
                  Commercial Security
                </Link>
              </li>
              <li>
                <Link href="/blog/car-lockout-solutions-prevention-emergency" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <WrenchScrewdriverIcon className="h-4 w-4 mr-2" />
                  Automotive Locksmith
                </Link>
              </li>
              <li>
                <Link href="/blog/key-cutting-services-guide" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <KeyIcon className="h-4 w-4 mr-2" />
                  Key Cutting Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/locksmith" className="text-gray-300 hover:text-white transition-colors">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog & Resources
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3 text-sm">
                             <div className="flex items-start space-x-3">
                 <PhoneIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                 <div>
                   <p className="text-gray-300">Emergency: {contact.emergency.phone}</p>
                   <p className="text-gray-300">Office: {contact.general.phone}</p>
                 </div>
               </div>
               
               <div className="flex items-start space-x-3">
                 <EnvelopeIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                 <a 
                   href={`mailto:${contact.general.email}`}
                   className="text-gray-300 hover:text-white transition-colors"
                 >
                   {contact.general.email}
                 </a>
               </div>
              
                             <div className="flex items-start space-x-3">
                 <MapPinIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                 <p className="text-gray-300">
                   {contact.address.street}<br />
                   {contact.address.city}, {contact.address.postcode}
                 </p>
               </div>
              
                             <div className="flex items-start space-x-3">
                 <ClockIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                 <div>
                   <p className="text-gray-300">24/7 Emergency Service</p>
                   <p className="text-gray-300">Office: {contact.hours.business}</p>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>&copy; {currentYear} {company.name}. All rights reserved.</p>
                             <p className="mt-1">
                 Licensed, Insured & DBS Checked | Guild of Professional Locksmiths
               </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                Blog
              </Link>
              <span className="text-gray-600">|</span>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
