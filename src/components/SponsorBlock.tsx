'use client';
import { StarIcon, PhoneIcon } from '@heroicons/react/24/solid';
import type { CityData } from '@/config/cities';

export default function SponsorBlock({ city }: { city: CityData }) {
  const s = city.sponsor;
  if (!s?.active) return null;

  return (
    <section className="py-8 bg-blue-50 border border-blue-200 rounded-xl">
      <div className="px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase text-blue-700">Sponsored locksmith for {city.name}</div>
            <h3 className="text-xl font-bold text-gray-900 mt-1">{s.name}</h3>
            {s.description && <p className="text-sm text-gray-700 mt-1 max-w-2xl">{s.description}</p>}
            <div className="flex items-center gap-2 mt-2 text-sm text-gray-800">
              {typeof s.rating === 'number' && (
                <span className="flex items-center">
                  <StarIcon className="h-4 w-4 text-yellow-500 mr-1" />
                  {s.rating.toFixed(1)}
                  {typeof s.reviews === 'number' && <span className="ml-1 text-gray-600">({s.reviews} reviews)</span>}
                </span>
              )}
              {s.address && <span className="text-gray-600">• {s.address}</span>}
              {s.since && <span className="text-gray-600">• Partner since {s.since}</span>}
            </div>
          </div>
          <div className="flex items-center gap-3">
            {s.phone && (
              <a href={`tel:${s.phone}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 flex items-center gap-2">
                <PhoneIcon className="h-4 w-4" />
                Call {s.displayPhone || s.phone}
              </a>
            )}
            {s.url && (
              <a href={s.url} className="px-4 py-2 rounded-lg border border-blue-300 text-blue-700 hover:bg-blue-100 font-semibold">
                Visit Website
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


