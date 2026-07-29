/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = nextConfig;
