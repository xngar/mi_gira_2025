import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dha2sp9ba/image/upload/**',
      },
    ],
  },

  // fin
};

export default nextConfig;
