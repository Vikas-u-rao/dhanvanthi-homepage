import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Turn off typescript build errors if they block launch (though we'll ensure it compiles cleanly)
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
