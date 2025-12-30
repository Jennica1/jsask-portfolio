/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      canvas: false, // Disable the canvas dependency for the browser
    };
    return config;
   
  },
    turbopack: {},
};

export default nextConfig;
