/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "help.amonxu.com",
      },
    ],
  },
};

export default nextConfig;
