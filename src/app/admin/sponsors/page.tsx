'use client';
import { useEffect, useMemo, useState } from 'react';
import { yorkshireCities } from '@/config/cities';

export default function AdminSponsorsPage() {
  const [filter, setFilter] = useState('');
  const cities = useMemo(() => yorkshireCities, []);
  const filtered = useMemo(
    () => cities.filter((c) => c.name.toLowerCase().includes(filter.toLowerCase()) || c.slug.includes(filter.toLowerCase())),
    [cities, filter]
  );

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // Optionally guard this route; for now it's a simple read-only admin listing.
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold mb-6">City sponsors & featured listings</h1>
      <p className="text-sm text-gray-600 mb-4">
        This is a simple read-only view of the current `cities.ts` data. To update a sponsor or featured listing,
        edit the `sponsor` or `featuredListings` fields for a city in `src/config/cities.ts` and redeploy.
      </p>
      <div className="mb-4">
        <input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter by city name or slug..."
          className="px-3 py-2 border rounded-lg w-full max-w-md"
        />
      </div>

      <div className="space-y-4">
        {filtered.map((city) => (
          <div key={city.slug} className="border rounded-lg p-4 bg-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-gray-900">{city.name}</h2>
                <p className="text-xs text-gray-600">/{city.slug}</p>
              </div>
              <div className="text-xs text-gray-600">{city.county}</div>
            </div>

            <div className="mt-3">
              <h3 className="text-sm font-semibold">Sponsor</h3>
              {city.sponsor?.active ? (
                <div className="text-sm text-gray-800">
                  <div><span className="font-medium">Name:</span> {city.sponsor.name}</div>
                  {city.sponsor.url && <div><span className="font-medium">URL:</span> {city.sponsor.url}</div>}
                  {city.sponsor.phone && <div><span className="font-medium">Phone:</span> {city.sponsor.phone}</div>}
                  {typeof city.sponsor.rating === 'number' && (
                    <div><span className="font-medium">Rating:</span> {city.sponsor.rating} ({city.sponsor.reviews ?? 0} reviews)</div>
                  )}
                  {city.sponsor.since && <div><span className="font-medium">Since:</span> {city.sponsor.since}</div>}
                </div>
              ) : (
                <div className="text-sm text-gray-600">No active sponsor</div>
              )}
            </div>

            <div className="mt-3">
              <h3 className="text-sm font-semibold">Featured listings ({city.featuredListings?.length ?? 0})</h3>
              {(city.featuredListings ?? []).length > 0 ? (
                <ul className="list-disc ml-5 text-sm text-gray-800">
                  {city.featuredListings!.map((it, idx) => (
                    <li key={idx}>
                      <span className="font-medium">{it.name}</span>
                      {it.rating ? ` — ${it.rating}★` : ''}
                      {it.reviews ? ` (${it.reviews})` : ''}
                      {it.url ? ` — ${it.url}` : ''}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-sm text-gray-600">No featured listings</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


