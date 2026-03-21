import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  devIndicators: false,

  // Configure file tracing for optimal bundle sizes
  outputFileTracingRoot: __dirname,

  // Configure external packages to reduce bundle size
  serverExternalPackages: [
    "@ai-sdk/anthropic",
    "@ai-sdk/openai",
    "@ai-sdk/google",
    "@mistralai/mistralai",
  ],

  // Configure file tracing exclusions for smaller bundles
  outputFileTracingExcludes: {
    "*": [
      ".next/cache/**/*",
      ".next/static/**/*",
      "node_modules/@next/swc-*/**/*",
      "scripts/**/*",
      "public/**/*",
      "src/components/**/*",
      "src/app/**/page.tsx",
      "src/app/**/layout.tsx",
    ],
  },

  // Empty turbopack config to acknowledge we're using Turbopack (the default in Next.js 16)
  // The light-dark() CSS function works with color-scheme: light dark in globals.css
  turbopack: {},

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prototype-playground.s3.us-east-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
