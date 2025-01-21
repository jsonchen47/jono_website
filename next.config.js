/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // Disable Image Optimization for static export
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  output: 'export', // Export static files
  assetPrefix: process.env.NODE_ENV === 'production' ? '/jono_website/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/jono_website' : '',
};

module.exports = nextConfig;
