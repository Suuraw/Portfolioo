// next.config.js
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // Prevent fs from being bundled on client
      };
    }
    return config;
  },
};

module.exports = nextConfig;
