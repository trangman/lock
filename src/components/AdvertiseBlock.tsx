'use client';
import { useState } from 'react';
import { MegaphoneIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function AdvertiseBlock({ city }: { city?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          service: 'Advertising enquiry',
          city: city || '',
          source: 'advertise-block',
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
          referrer: typeof document !== 'undefined' ? document.referrer : '',
          userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
          timeToSubmitSec: null,
          honeypot: payload.website || '',
        }),
      });
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }



  return (
    <section className="py-10 bg-yellow-50 border border-yellow-200 rounded-xl">
      <div className="px-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
            <MegaphoneIcon className="h-6 w-6 text-yellow-700" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Advertise Your Business{city ? ` in ${city}` : ''}
            </h3>
            <p className="text-sm text-gray-700 mt-1">Get featured on our locksmith directory and reach more customers</p>
            <p className="text-sm text-gray-800 mt-1 font-medium">Competitive pricing for local businesses</p>
            <ul className="mt-3 text-sm text-gray-700 list-disc ml-5">
              <li>Featured placement on city pages</li>
              <li>Direct contact from potential customers</li>
              <li>Professional business listing</li>
              <li>Local SEO benefits</li>
            </ul>
          </div>
        </div>

        {!submitted ? (
          <>
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-3">
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
              <input
                name="name"
                placeholder="Business owner name"
                className="px-3 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input
                name="phone"
                placeholder="Phone"
                className="px-3 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="px-3 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-700 disabled:opacity-50"
              >
                {loading ? 'Sending…' : 'Get ad info'}
              </button>
            </form>

          </>
        ) : (
          <div className="mt-6 flex items-center text-green-700 gap-2">
            <CheckCircleIcon className="h-5 w-5" />
            <span className="text-sm">Thanks — we’ll contact you with pricing and availability.</span>
          </div>
        )}
      </div>
    </section>
  );
}


