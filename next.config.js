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
  output: 'export', // Export static files
  assetPrefix: '/jono_website/', // Use the repository name
  basePath: '/jono_website', // Add this line for correct routing
};

module.exports = nextConfig;
