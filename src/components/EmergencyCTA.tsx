'use client';
import { useState, useEffect } from 'react';
import { PhoneIcon, XMarkIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '@/config/site';

export default function EmergencyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { contact } = siteConfig;

  useEffect(() => {
    // Show emergency CTA after 3 seconds
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    // Store dismissal in localStorage
    localStorage.setItem('emergency-cta-dismissed', 'true');
  };

  useEffect(() => {
    // Check if user has dismissed before
    const dismissed = localStorage.getItem('emergency-cta-dismissed');
    if (dismissed) {
      setIsDismissed(true);
    }
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-red-600 text-white z-50 animate-slideDown">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ExclamationTriangleIcon className="h-5 w-5 animate-pulse" />
            <div>
              <p className="font-semibold fluid-small">
                🚨 EMERGENCY LOCKOUT? 
              </p>
              <p className="text-red-100 fluid-small">
                Don&apos;t wait! Call now for immediate assistance
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <a href={`tel:${contact.emergency.phone}`} className="bg-white text-red-600 px-4 py-2 rounded-lg font-bold hover:bg-red-50 transition-colors flex items-center space-x-2 fluid-cta">
              <PhoneIcon className="h-4 w-4" />
              <span>{contact.emergency.display}</span>
            </a>
            <button
              onClick={handleDismiss}
              className="text-white hover:text-red-200 transition-colors"
              aria-label="Dismiss emergency banner"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 