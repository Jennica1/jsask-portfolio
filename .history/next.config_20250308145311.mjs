import withTM from 'next-transpile-modules';

/** @type {import('next').NextConfig} */
const nextConfig = withTM({
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      canvas: false,
    };
    return config;
  },
  transpileModules: ['pdfjs-dist'],
});

export default nextConfig;
