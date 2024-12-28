/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['zh'],  // 只保留中文
    defaultLocale: 'zh',
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '(?!tou\\.notion\\.cm)',
          },
        ],
        destination: 'https://tou.notion.cm/:path*',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['tou.notion.cm'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  }
}

module.exports = nextConfig
