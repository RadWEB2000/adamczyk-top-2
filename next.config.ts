import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    cssChunking:true,
    inlineCss: true,
  },
  trailingSlash: false,
  
};

export default nextConfig;
