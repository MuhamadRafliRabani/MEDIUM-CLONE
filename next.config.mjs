/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      },
      {
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "loading.io",
      },
      {
        hostname: "placehold.co",
      },
      {
        hostname: "cqhlafryyzzodifbdmia.supabase.co",
      },
      {
        hostname: "/",
      },
    ],
  },
};

export default nextConfig;
