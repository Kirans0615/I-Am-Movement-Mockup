import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/I-Am-Movement-Mockup",
  assetPrefix: "/I-Am-Movement-Mockup/",
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    unoptimized: true, // Required for static export — Next.js Image Optimization needs a server
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**",
      },
    ],
  },
};

export default nextConfig;
