import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/heyday_web',
  images: {
    unoptimized: true,
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
