/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.viblo.asia", pathname: "/*" },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/yidiElectro/**",
      },
    ],
  },
};

export default nextConfig;
