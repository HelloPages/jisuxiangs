/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  eslint: {
    // 在构建过程中忽略ESLint错误
    ignoreDuringBuilds: true,
  },
  /* config options here */
};

module.exports = nextConfig; 