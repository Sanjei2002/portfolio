import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "Dev_DogTag";

const nextConfig: NextConfig = {
  output: isProd ? "export" : undefined,
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
