import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ThanhDev Portfolio - Fullstack Web Developer",
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
    title: "ThanhDev Portfolio - Fullstack Web Developer",
    description:
      "Explore ThanhDev Portfolio, showcasing skills in backend and fullstack web development, performance optimization, and scalable systems.",
    url: "https://thanhdev.io.vn/portfolio", // Update with your actual URL
    siteName: "ThanhDev Portfolio",
    images: [
      {
        url: "/images/website.avif", // Ensure the image exists
        width: 1200,
        height: 630,
        alt: "ThanhDev Portfolio - Fullstack Web Developer",
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
