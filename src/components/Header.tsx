'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PhoneIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '@/config/site';
import EmergencyCTA from '@/components/EmergencyCTA';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { contact } = siteConfig;

  return (
    <>
      {/* Emergency CTA Banner */}
      <EmergencyCTA />

      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-xl sm:text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  {siteConfig.company.name}
                </Link>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <nav className="flex space-x-8">
                <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Services</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
                <Link href="/locksmith" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">All Cities</Link>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Desktop Emergency Button */}
              <a href={`tel:${contact.emergency.phone}`} className="hidden sm:inline-flex bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors">
                <PhoneIcon className="h-3 w-3 sm:h-4 sm:w-4 inline mr-1" />
                <span className="hidden sm:inline">Emergency: {contact.emergency.display}</span>
                <span className="sm:hidden">Call Now</span>
              </a>
              
              {/* Mobile menu button */}
              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <a
                  href="#services"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <Link
                  href="/locksmith"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  All Cities
                </Link>
                <a
                  href={`tel:${contact.emergency.phone}`}
                  className="block px-3 py-2 text-base font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <PhoneIcon className="h-4 w-4 inline mr-2" />
                  Emergency Call
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
