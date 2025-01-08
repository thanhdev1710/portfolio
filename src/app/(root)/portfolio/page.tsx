import { Flex1 } from "@/components/Flex/Flex1";
import { Flex2 } from "@/components/Flex/Flex2";
import { Flex3 } from "@/components/Flex/Flex3";
import FlexASide from "@/components/Flex/FlexASide";
import FlexResponsive from "@/components/Flex/FlexResponsive";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Welcome to ThanhDev Portfolio. I am a fullstack web developer with a focus on backend development, performance optimization, and building scalable systems. Explore my projects and blog on technologies like React, Next.js, PostgreSQL, Redis, and more.",
  keywords: [
    "ThanhDev",
    "portfolio",
    "fullstack developer",
    "backend developer",
    "web developer",
    "PERN stack",
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
      url: "https://thanhdev.io.vn/", // Update with your actual URL
    },
  ],
  openGraph: {
    title: "Portfolio | ThanhDev - Fullstack Web Development with PERN",
    description:
      "Explore ThanhDev Portfolio, showcasing skills in backend and fullstack web development, performance optimization, and scalable systems.",
    url: "https://thanhdev.io.vn/portfolio", // Update with your actual URL
    siteName: "ThanhDev Portfolio",
    images: [
      {
        url: "/images/website.avif", // Ensure the image exists
        width: 1200,
        height: 630,
        alt: "Portfolio | ThanhDev - Fullstack Web Development with PERN",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Chiithanh1", // Correct Twitter handle
    creator: "@Chiithanh1", // Correct Twitter handle
    title: "ThanhDev Portfolio - Fullstack Web Developer",
    description:
      "Explore ThanhDev Portfolio, showcasing backend and fullstack development skills. Learn about projects and achievements.",
    images: "/images/website.avif", // Ensure the image link is correct
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
