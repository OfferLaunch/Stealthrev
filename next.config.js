/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export to enable proper client-side rendering
  // output: 'export',
  // trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig 