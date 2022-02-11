const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    disableStaticImages: true,
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            esModule: false,
            limit: 1024,
            name: '[name].[ext]',
            outputPath: (url, resourcePath, context) => {
              const relativePath = path.relative(
                path.join(context, 'public'),
                resourcePath,
              )

              return `static/${relativePath.replaceAll(
                path.sep,
                path.posix.sep,
              )}`
            },
          },
        },
      ],
    })

    return config
  },
}

module.exports = nextConfig
