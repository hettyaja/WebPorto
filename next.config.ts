import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/((?!_next|static|favicon.ico|robots.txt).*)",
  //       destination: "https://portofolio-f8be3.web.app",
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
