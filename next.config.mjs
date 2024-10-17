/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "local",
        port: "",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
