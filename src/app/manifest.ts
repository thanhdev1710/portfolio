import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Thanh's Portfolio - Backend & Fullstack Developer",
    short_name: "Thanh's Portfolio",
    description:
      "Explore Thanh's Portfolio, showcasing my skills in backend development, fullstack web applications, and optimization techniques.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff", // Màu nền khi tải ứng dụng
    theme_color: "#004777", // Màu chủ đạo của theme (thường là màu logo hoặc màu chính của trang web)
    icons: [
      {
        src: "/favicon.ico", // Đường dẫn đến favicon
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icons/icon-192x192.png", // Biểu tượng cho các thiết bị Android
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png", // Biểu tượng lớn cho các thiết bị khác
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
