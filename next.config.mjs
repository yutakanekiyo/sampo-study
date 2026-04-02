/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    minimumCacheTTL: 2592000, // 30日
  },
}

export default nextConfig
