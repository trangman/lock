'use client';
import type { CityData } from '@/config/cities';
import { StarIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export default function FeaturedListings({ city }: { city: CityData }) {
  const items = city.featuredListings || [];
  if (items.length === 0) return null;

  return (
    <section className="py-10">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Featured locksmiths in {city.name}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it, idx) => (
          <div key={idx} className="border rounded-lg p-4 bg-white">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-gray-900">{it.name}</h4>
                {it.address && <p className="text-sm text-gray-600">{it.address}</p>}
                {typeof it.rating === 'number' && (
                  <div className="flex items-center text-sm text-gray-800 mt-1">
                    <StarIcon className="h-4 w-4 text-yellow-500 mr-1" />
                    {it.rating.toFixed(1)} {typeof it.reviews === 'number' && <span className="ml-1 text-gray-600">({it.reviews})</span>}
                  </div>
                )}
                {it.blurb && <p className="text-sm text-gray-700 mt-2">{it.blurb}</p>}
              </div>
              <a href={it.url} className="text-blue-600 hover:text-blue-700" title="Open">
                <ArrowTopRightOnSquareIcon className="h-5 w-5" />
              </a>
            </div>
            {it.phone && (
              <div className="mt-3 text-sm text-gray-900">Phone: <a className="text-blue-700" href={`tel:${it.phone}`}>{it.phone}</a></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}


