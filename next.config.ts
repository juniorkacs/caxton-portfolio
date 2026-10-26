import type { NextConfig } from "next";

/**
 * Static export: the site builds to plain HTML/CSS/JS in `out/` and can be
 * hosted on any static host (GitHub Pages, Vercel, Netlify, Cloudflare Pages).
 * Set NEXT_PUBLIC_BASE_PATH="/<repo>" when serving from a GitHub Pages project URL.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
