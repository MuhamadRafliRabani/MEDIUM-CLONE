/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "unsplash.com",
      },
    ],
  },
};

export default nextConfig;
