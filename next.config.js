/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  output: 'export', // Add this line for static export
  assetPrefix: process.env.NODE_ENV === 'production' ? '/jono_website/' : '', // Adjust paths for GitHub Pages
};

module.exports = nextConfig;
