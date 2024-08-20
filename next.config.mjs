/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
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
        hostname: "cqhlafryyzzodifbdmia.supabase.co",
      },
      {
        hostname: "i.pinimg.com",
      },
    ],
  },
};

export default nextConfig;
