'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '@/config/site';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsMenuOpen(false);
      setIsDropdownOpen(false);
      buttonRef.current?.focus();
    }
  };

  // Handle menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      // Focus first menu item when opening
      setTimeout(() => {
        const firstMenuItem = menuRef.current?.querySelector('a, button');
        if (firstMenuItem instanceof HTMLElement) {
          firstMenuItem.focus();
        }
      }, 100);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header 
      className="bg-white shadow-lg sticky top-0 z-50"
      role="banner"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
            aria-label={`${siteConfig.company.name} - Go to homepage`}
          >
            <Image
              src="/locksmith-yorkshire400.png"
              alt={`${siteConfig.company.name} Logo`}
              width={400}
              height={48}
              className="h-8 w-auto sm:h-10 md:h-12"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav 
            className="hidden md:flex space-x-8"
            role="navigation"
            aria-label="Main navigation menu"
          >
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-current={typeof window !== 'undefined' && window.location.pathname === '/' ? 'page' : undefined}
            >
              Home
            </Link>
            
            <div className="relative">
              <button
                onClick={toggleDropdown}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleDropdown();
                  }
                }}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                aria-label="Services menu"
              >
                Services
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="services-menu"
                >
                  <Link
                    href="/?service=emergency"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                    role="menuitem"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Emergency Locksmith
                  </Link>
                  <Link
                    href="/?service=residential"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                    role="menuitem"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Residential Locksmith
                  </Link>
                  <Link
                    href="/?service=commercial"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                    role="menuitem"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Commercial Locksmith
                  </Link>
                </div>
              )}
            </div>
            
            <Link
              href="/locksmith"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-current={typeof window !== 'undefined' && window.location.pathname === '/locksmith' ? 'page' : undefined}
            >
              Locations
            </Link>
            
            <Link
              href="/blog"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-current={typeof window !== 'undefined' && window.location.pathname.startsWith('/blog') ? 'page' : undefined}
            >
              Blog
            </Link>
          </nav>

          {/* Emergency Contact */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${siteConfig.contact.emergency.phone}`}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
              aria-label={`Emergency locksmith service - Call ${siteConfig.contact.emergency.phone}`}
            >
              <PhoneIcon className="h-4 w-4 mr-2" aria-hidden="true" />
              Emergency
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            onKeyDown={handleKeyDown}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div 
          ref={menuRef}
          id="mobile-menu"
          className="md:hidden"
          role="navigation"
          aria-label="Mobile navigation menu"
          onKeyDown={handleKeyDown}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
              aria-current={typeof window !== 'undefined' && window.location.pathname === '/' ? 'page' : undefined}
            >
              Home
            </Link>
            
            <Link
              href="/?service=emergency"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Emergency Locksmith
            </Link>
            
            <Link
              href="/?service=residential"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Residential Locksmith
            </Link>
            
            <Link
              href="/?service=commercial"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Commercial Locksmith
            </Link>
            
            <Link
              href="/locksmith"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
              aria-current={typeof window !== 'undefined' && window.location.pathname === '/locksmith' ? 'page' : undefined}
            >
              Locations
            </Link>
            
            <Link
              href="/blog"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
              aria-current={typeof window !== 'undefined' && window.location.pathname.startsWith('/blog') ? 'page' : undefined}
            >
              Blog
            </Link>
            
            <a
              href={`tel:${siteConfig.contact.emergency.phone}`}
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:bg-red-700"
              onClick={() => setIsMenuOpen(false)}
              aria-label={`Emergency locksmith service - Call ${siteConfig.contact.emergency.phone}`}
            >
              <PhoneIcon className="inline h-5 w-5 mr-2" aria-hidden="true" />
              Emergency Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
