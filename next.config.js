/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "mrjoe.com.co"
    ],
    minimumCacheTTL: 60,
  }
}

module.exports = nextConfig
