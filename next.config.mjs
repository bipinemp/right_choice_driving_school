/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.bookingtimes.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
