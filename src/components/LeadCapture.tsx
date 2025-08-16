'use client';
import { useState, useEffect } from 'react';
import { XMarkIcon, PhoneIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

interface LeadCaptureProps {
  type: 'exit-intent' | 'scroll-trigger' | 'time-delay';
  title: string;
  subtitle: string;
  offer: string;
}

export default function LeadCapture({ type, title, subtitle, offer }: LeadCaptureProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Emergency Locksmith'
  });
  const [startTs] = useState<number>(() => Date.now());
  const [honeypot, setHoneypot] = useState('');

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (type === 'time-delay') {
      timer = setTimeout(() => {
        setIsVisible(true);
      }, 10000); // 10 seconds
    } else if (type === 'scroll-trigger') {
      const handleScroll = () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercent > 70 && !isVisible) {
          setIsVisible(true);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else if (type === 'exit-intent') {
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 0 && !isVisible) {
          setIsVisible(true);
        }
      };

      document.addEventListener('mouseleave', handleMouseLeave);
      return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }

    return () => clearTimeout(timer);
  }, [type, isVisible]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const timeToSubmitSec = Math.round((Date.now() - startTs) / 1000);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'lead-capture-modal',
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
          referrer: typeof document !== 'undefined' ? document.referrer : '',
          userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
          timeToSubmitSec,
          honeypot,
        }),
      });
      if (!res.ok) throw new Error('Webhook failed');
      setIsSubmitted(true);
      setTimeout(() => {
        setIsVisible(false);
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error('Lead submit error', err);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        {!isSubmitted ? (
          <>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 fluid-section-title">{title}</h3>
              <p className="text-gray-600 mb-4 fluid-subtitle">{subtitle}</p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                <p className="text-yellow-800 font-semibold text-sm">{offer}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field */}
              <input
                type="text"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service Needed
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Emergency Locksmith</option>
                  <option>Residential Locksmith</option>
                  <option>Commercial Locksmith</option>
                  <option>Lock Installation</option>
                  <option>Key Cutting</option>
                  <option>Security Consultation</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors fluid-cta"
              >
                Get Free Quote Now
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to be contacted by Locksmith Yorkshire
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-4">
              We&apos;ve received your request and will contact you within 15 minutes.
            </p>
            <p className="text-sm text-gray-500">
              For urgent emergencies, call us immediately at{' '}
              <a href="tel:0800-123-4567" className="text-blue-600 font-semibold">
                0800-123-4567
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 