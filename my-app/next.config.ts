import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output a static site for GitHub Pages.
  output: "export",
  // Ensure static assets are handled correctly
  assetPrefix: process.env.NODE_ENV === 'production' ? '/tangram.tools/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/tangram.tools' : '',
  // Ensure images are optimized
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
