import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve the app from a sub-path when deployed behind a base path
  basePath: '/ktmpp',
  // Ensure static assets are served from the same base path
  assetPrefix: '/ktmpp',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "neupgroup.com",
      },
    ],
  },
};

export default nextConfig;
