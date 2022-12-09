const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  exportPathMap: async (defaultPathMap) => {
    return defaultPathMap;
  },
  images: {
    loader: 'akamai',
    path: '',
  },
};

module.exports = nextConfig;
