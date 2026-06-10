import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve the app from a sub-path when deployed behind a base path
  // Ensure static assets are served from the same base path
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
