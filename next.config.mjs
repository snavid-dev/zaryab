/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zariab.cyborgtech.co',
        pathname: '/wp-content/uploads/**', // Allow all images from this path
      },
    ],
  },
};

export default nextConfig;
