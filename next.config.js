/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};
