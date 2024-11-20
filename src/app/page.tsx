import StartWeb from "@/components/shared/StartWeb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Welcome to ThanhDev's Portfolio",
  description:
    "Welcome to ThanhDev's Portfolio. I am a backend-focused developer specializing in scalable systems, performance optimization, and robust applications. Discover my projects and blog.",
  keywords: [
    "ThanhDev",
    "portfolio",
    "backend developer",
    "fullstack developer",
    "web developer",
    "Thanh",
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
    title: "ThanhDev's Portfolio - Backend Developer | Fullstack Web Developer",
    description:
      "Explore ThanhDev's Portfolio, a showcase of skills in backend development, fullstack web applications, and optimization techniques.",
    url: "https://thanhdev.vercel.app/portfolio",
    siteName: "ThanhDev's Portfolio",
    images: [
      {
        url: "/images/website.avif",
        width: 1200,
        height: 630,
        alt: "ThanhDev's Portfolio - Backend Developer | Fullstack Web Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle", // Thay bằng tên người dùng Twitter của bạn
    creator: "@yourtwitterhandle", // Thay bằng tên người dùng Twitter của bạn
    title: "ThanhDev's Portfolio - Backend Developer | Fullstack Web Developer",
    description:
      "Explore ThanhDev's Portfolio, showcasing backend and fullstack development skills. Learn about projects and achievements.",
    images: "/images/website.avif", // Thay bằng hình ảnh của bạn
  },
};

export default function page() {
  return <StartWeb />;
}
