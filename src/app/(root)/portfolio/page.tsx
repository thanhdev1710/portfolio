import { Flex1 } from "@/components/Flex/Flex1";
import { Flex2 } from "@/components/Flex/Flex2";
import { Flex3 } from "@/components/Flex/Flex3";
import FlexASide from "@/components/Flex/FlexASide";
import FlexResponsive from "@/components/Flex/FlexResponsive";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Welcome to Thanh's Portfolio. I am a backend-focused developer, specializing in building scalable systems, optimizing performance, and creating robust applications. Explore my projects and blog.",
  keywords: [
    "Thanh",
    "portfolio",
    "backend developer",
    "fullstack developer",
    "web developer",
    "career journey",
    "optimization",
    "experience",
    "React",
    "Next.js",
    "PostgreSQL",
    "Redis",
  ],
  authors: [
    {
      name: "ThanhDev",
      url: "https://thanhdev.vercel.app/",
    },
  ],
  openGraph: {
    title: "Thanh's Portfolio - Backend Developer | Fullstack Web Developer",
    description:
      "Explore Thanh's Portfolio, a showcase of my skills in backend development, fullstack web applications, and optimization techniques.",
    url: "https://thanhdev.vercel.app/portfolio",
    siteName: "Thanh's Portfolio",
    images: [
      {
        url: "/images/website.avif",
        width: 1200,
        height: 630,
        alt: "Thanh's Portfolio - Backend Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle", // Thay bằng tên người dùng Twitter của bạn
    creator: "@yourtwitterhandle", // Thay bằng tên người dùng Twitter của bạn
    title: "Thanh's Portfolio - Backend Developer | Fullstack Web Developer",
    description:
      "Explore Thanh's Portfolio, showcasing my backend and fullstack development skills. Learn about my projects and achievements.",
    images: "/images/website.avif", // Thay bằng hình ảnh của bạn
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
