import { Flex1 } from "@/components/Flex/Flex1";
import { Flex2 } from "@/components/Flex/Flex2";
import { Flex3 } from "@/components/Flex/Flex3";
import FlexASide from "@/components/Flex/FlexASide";
import FlexResponsive from "@/components/Flex/FlexResponsive";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Chào mừng đến với Portfolio của ThanhDev. Tôi là lập trình viên fullstack với định hướng backend, tối ưu hiệu suất và xây dựng hệ thống có khả năng mở rộng. Khám phá các dự án và bài viết về React, Next.js, PostgreSQL, Redis và nhiều công nghệ khác.",
  keywords: [
    "ThanhDev",
    "portfolio",
    "fullstack developer",
    "backend developer",
    "web developer",
    "React",
    "Next.js",
    "PostgreSQL",
    "Redis",
    "Node.js",
    "performance optimization",
    "scalable systems",
    "software engineering",
  ],
  authors: [
    {
      name: "ThanhDev",
      url: "https://thanhdev.io.vn/",
    },
  ],
  openGraph: {
    title: "Portfolio | ThanhDev - Fullstack Web Developer",
    description:
      "Khám phá portfolio của ThanhDev, thể hiện kỹ năng trong phát triển backend, ứng dụng fullstack, tối ưu hiệu suất và xây dựng hệ thống mở rộng.",
    url: "https://thanhdev.io.vn/portfolio",
    siteName: "ThanhDev Portfolio",
    images: [
      {
        url: "/images/website.avif",
        width: 1200,
        height: 630,
        alt: "Portfolio | ThanhDev - Fullstack Web Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Chiithanh1",
    creator: "@Chiithanh1",
    title: "ThanhDev Portfolio - Fullstack Web Developer",
    description:
      "Khám phá portfolio của ThanhDev, nơi chia sẻ các dự án web với trọng tâm backend và kỹ thuật tối ưu hệ thống.",
    images: "/images/website.avif",
  },
};

export default function page() {
  return (
    <div className="h-full w-full p-4">
      <div className="border-2 border-[var(--border)] p-4 w-full h-full rounded-[30px] flex xl:flex-row flex-col gap-4">
        <section className="min-h-svh w-full xl:w-[76%] flex flex-col gap-4">
          <Flex1 />
          <Flex2 />
          <FlexResponsive />
          <Flex3 />
        </section>
        <FlexASide />
      </div>
    </div>
  );
}
