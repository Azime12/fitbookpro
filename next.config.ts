import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
   images: {
    domains: ['images.unsplash.com'], // <-- add your external domains here
  }
  /* config options here */
};

export default nextConfig;
