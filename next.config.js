/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  // Ensure proper base path for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/Stealthrev' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Stealthrev' : '',
}

module.exports = nextConfig 