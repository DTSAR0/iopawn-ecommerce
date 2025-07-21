/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["framer-motion"],
  experimental: {
    
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;