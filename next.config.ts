import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  distDir: "dist",
};

export default nextConfig;
