/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  output: "export",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    config.module.rules.push({
      test: /\.s?css$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    });
    return config;
  },
};

const withImages = require("next-images");
module.exports = withImages();

module.exports = nextConfig;
