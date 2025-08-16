import type { CityData } from '@/config/cities';

export interface CityOverride {
  sponsor?: CityData['sponsor'];
  featuredListings?: CityData['featuredListings'];
}

export type CityOverridesMap = Record<string, CityOverride>;

let cachedOverrides: { ts: number; data: CityOverridesMap } | null = null;

export async function loadCityOverrides(): Promise<CityOverridesMap> {
  try {
    // Simple in-memory cache for 5 minutes
    if (cachedOverrides && Date.now() - cachedOverrides.ts < 5 * 60 * 1000) {
      return cachedOverrides.data;
    }

    const url = process.env.SPONSORS_URL || process.env.NEXT_PUBLIC_SPONSORS_URL;

    if (url) {
      const res = await fetch(url, { next: { revalidate: 300 } });
      if (res.ok) {
        const data = (await res.json()) as CityOverridesMap;
        cachedOverrides = { ts: Date.now(), data };
        return data;
      }
    }

    // Fallback to public file when URL is not configured
    const publicUrl = `${process.env.NEXT_PUBLIC_SITE_URL || ''}/sponsors.json`;
    if (publicUrl.startsWith('http')) {
      const res = await fetch(publicUrl, { next: { revalidate: 300 } });
      if (res.ok) {
        const data = (await res.json()) as CityOverridesMap;
        cachedOverrides = { ts: Date.now(), data };
        return data;
      }
    }
  } catch {
    // ignore and fall through
  }
  return {};
}

export function mergeCityWithOverrides(base: CityData, override?: CityOverride): CityData {
  if (!override) return base;
  return {
    ...base,
    sponsor: override.sponsor ?? base.sponsor,
    featuredListings: override.featuredListings ?? base.featuredListings,
  };
}


