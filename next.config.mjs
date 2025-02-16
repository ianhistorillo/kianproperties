/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mediumslateblue-otter-668926.hostingersite.com",
        // port: "3000",
        // pathname: "/assets/*",
      },
    ],
  },
};

export default nextConfig;
