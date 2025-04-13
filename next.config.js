/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['t.me'],
  },
  async rewrites() {
    return [
      {
        source: '/telegram',
        destination: 'https://t.me/Amelit_bot',
      },
    ]
  },
}

module.exports = nextConfig 