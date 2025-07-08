import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: { ref: true }
          }
        ],
        as: '*.js'
      }
    }
  }
}

export default nextConfig
