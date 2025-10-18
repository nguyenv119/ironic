const nextConfig = {
  basePath: "/ironic",
  assetPrefix: "/ironic/",
  images: { unoptimized: true },
  output: "export",
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
