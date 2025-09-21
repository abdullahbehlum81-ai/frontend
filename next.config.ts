import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
      },
    ],
  formats: ["image/avif", "image/webp"],
},
  productionBrowserSourceMaps: false,
  compress: true,
  experimental: {
    scrollRestoration: true,
    optimizePackageImports: [
      "react-hook-form",
      "yup",
      "react-select",
      "clsx",
      "sass",
      "react-icons",
      "swiper",
      "nextjs-toploader",
      "@hookform/resolvers",
    ],

  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },
};

export default nextConfig;
