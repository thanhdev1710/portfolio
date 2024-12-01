import StartWeb from "@/components/shared/StartWeb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "ThanhDev - Backend Developer | Fullstack Web Developer",
  description:
    "Discover ThanhDev, a backend-focused developer specializing in scalable systems, performance optimization, and robust applications. Explore projects and blogs by ThanhDev.",
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
      url: "https://thanhdev.io.vn/",
    },
  ],
  openGraph: {
    title: "ThanhDev - Backend Developer | Fullstack Web Developer",
    description:
      "Explore ThanhDev, showcasing expertise in backend and fullstack development. Learn about projects and optimization techniques.",
    url: "https://thanhdev.io.vn/portfolio",
    siteName: "ThanhDev",
    images: [
      {
        url: "/images/website.avif",
        width: 1200,
        height: 630,
        alt: "ThanhDev - Backend Developer | Fullstack Web Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Chiithanh1",
    creator: "@Chiithanh1",
    title: "ThanhDev - Backend Developer | Fullstack Web Developer",
    description:
      "Discover ThanhDev, showcasing skills in backend and fullstack development. Explore projects and achievements.",
    images: "/images/website.avif",
  },
};

export default function page() {
  return <StartWeb />;
}
