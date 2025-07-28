/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  // Remove base path since you're using a custom domain
  // basePath: process.env.NODE_ENV === 'production' ? '/Stealthrev' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/Stealthrev' : '',
}

module.exports = nextConfig 