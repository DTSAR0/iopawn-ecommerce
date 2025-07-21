/** @type {import('next').NextConfig} */
const nextConfig = {
  // потрібно білдові Vercel, щоб motion‑бінарі не тягнулись у Edge
  serverExternalPackages: ["framer-motion"],

  images: { unoptimized: true },

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
