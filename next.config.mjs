/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "azure-lobster-898138.hostingersite.com",
        // port: "3000",
        // pathname: "/assets/*",
      },
    ],
  },
};

export default nextConfig;
