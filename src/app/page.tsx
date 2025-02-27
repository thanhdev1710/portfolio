import StartWeb from "@/components/shared/StartWeb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "ThanhDev - Fullstack Web Developer",
  description:
    "Explore ThanhDev's portfolio as a fullstack web developer. Learn about projects and skills in building web applications using the PERN stack (PostgreSQL, Express.js, React, Node.js).",
  keywords: [
    "ThanhDev",
    "portfolio",
    "fullstack developer",
    "web developer",
    "Thanh",
    "learning journey",
    "PERN stack",
    "React",
    "Next.js",
    "PostgreSQL",
    "Express.js",
    "Node.js",
    "Redis",
  ],
  authors: [
    {
      name: "ThanhDev",
      url: "https://thanhdev.io.vn/",
    },
  ],
  openGraph: {
    title: "ThanhDev - Fullstack Web Developer",
    description:
      "Explore ThanhDev's portfolio, showcasing projects and learning experiences as a fullstack web developer using the PERN stack.",
    url: "https://thanhdev.io.vn/portfolio",
    siteName: "ThanhDev",
    images: [
      {
        url: "/images/website.avif",
        width: 1200,
        height: 630,
        alt: "ThanhDev - Fullstack Web Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Chiithanh1",
    creator: "@Chiithanh1",
    title: "ThanhDev - Fullstack Web Developer",
    description:
      "Check out ThanhDev's portfolio, with projects showcasing web development skills and learning experiences with the PERN stack.",
    images: "/images/website.avif",
  },
};

export default function page() {
  fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_API_VERSION}visit`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        page: "portfolio",
      }),
    }
  );
  return <StartWeb />;
}
