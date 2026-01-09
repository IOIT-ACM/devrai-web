import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://picsum.photos/id/**"),
      new URL("https://cdn.sanity.io/**"),
    ],
  },
  crossOrigin: "anonymous",
};

export default nextConfig;
