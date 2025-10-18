const isProd = process.env.NODE_ENV === "production";
const usePages = isProd || process.env.GH_PAGES === "true";
const nextConfig = {
  basePath: usePages ? "/ironic" : undefined,
  assetPrefix: usePages ? "/ironic/" : undefined,
  images: { unoptimized: usePages },
  output: usePages ? "export" : undefined,
  trailingSlash: usePages,
  eslint: { ignoreDuringBuilds: true },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
