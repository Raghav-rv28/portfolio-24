/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
