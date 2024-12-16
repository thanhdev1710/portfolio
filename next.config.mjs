/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.viblo.asia", pathname: "/*" },
    ],
  },
};

export default nextConfig;
