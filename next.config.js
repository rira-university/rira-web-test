const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
}

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
      },
    ],
  ],
  nextConfig,
)
