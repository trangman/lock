import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only essential settings
  reactStrictMode: true,
  
  // Basic image optimization
  images: {
    unoptimized: true, // Disable image optimization for Netlify
  },
};

export default nextConfig;
