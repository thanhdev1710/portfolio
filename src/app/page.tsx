import StartWeb from "@/components/shared/StartWeb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Welcome to Thanh's Website",
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
      url: "https://portfolio-thanhdev.vercel.app/",
    },
  ],
  openGraph: {
    title: "Thanh's Portfolio - Backend Developer | Fullstack Web Developer",
    description:
      "Explore Thanh's Portfolio, a showcase of my skills in backend development, fullstack web applications, and optimization techniques.",
    url: "https://portfolio-thanhdev.vercel.app/portfolio",
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
  return <StartWeb />;
}
