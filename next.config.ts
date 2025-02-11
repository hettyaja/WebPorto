import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Disable Image Optimization for static export
  },
  async redirects() {
    return [
      {
        source: "/:path*", // Redirect all paths
        destination: "https://your-firebase-app.web.app/:path*", // Firebase domain
        permanent: true, // 308 Permanent Redirect
      },
    ];
  },
};

export default nextConfig;
