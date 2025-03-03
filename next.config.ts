import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["egeser.in"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
