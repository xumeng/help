/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "help.gegegugu.com",
      },
    ],
  },
};

export default nextConfig;
