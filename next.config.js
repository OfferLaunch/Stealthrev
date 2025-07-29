/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  // Ensure CSS and assets load properly in static export
  assetPrefix: '',
  basePath: '',
  // Remove base path since you're using a custom domain
  // basePath: process.env.NODE_ENV === 'production' ? '/Stealthrev' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/Stealthrev' : '',
}

module.exports = nextConfig 