const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    disableStaticImages: true,
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
}

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
        imagesName: '[name].[ext]',
        inlineImageLimit: 1024,
        optimizeImagesInDev: true,
        responsive: {
          adapter: require('responsive-loader/sharp'),
          // format: 'webp', // not yet safari
          placeholder: true,
          placeholderSize: 16,
          // sizes: [320, 640, 960, 1200, 1800], // resizing won't get optimized
        },
        gifsicle: {
          interlaced: true,
          optimizationLevel: 7,
        },
      },
    ],
  ],
  nextConfig,
)
