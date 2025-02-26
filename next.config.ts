import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Ensures better debugging
  images: {
    domains: [
      "www.vectorlogo.zone",
      "raw.githubusercontent.com",
      "global.discourse-cdn.com",
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ts$/,
      use: "ts-loader",
      exclude: /node_modules/,
    });

    return config;
  },
};

export default nextConfig;
