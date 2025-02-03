import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Disable Image Optimization for static export
  },
};

export default nextConfig;
