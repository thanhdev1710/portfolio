import React from "react";
import { Metadata } from "next";
import { auth } from "@/actions/authAction";

export const metadata: Metadata = {
  title: "Blog | ThanhDev - Sharing My Backend Development Journey",
  description:
    "Welcome to my blog where I share my experience, insights, and tips about backend development, web technologies, and performance optimization.",
  keywords: [
    "ThanhDev",
    "blog",
    "backend developer",
    "fullstack developer",
    "web development",
    "performance optimization",
    "Node.js",
    "React",
    "PostgreSQL",
    "Redis",
    "experience",
    "career tips",
    "backend systems",
    "API development",
  ],
  authors: [
    {
      name: "ThanhDev",
      url: "https://www.thanhdev.io.vn",
    },
  ],
  openGraph: {
    title: "ThanhDev Blog | Backend Development & Insights",
    description:
      "Explore ThanhDev blog, sharing experiences in backend development, performance optimization, and best practices.",
    url: "https://www.thanhdev.io.vn/blog",
    images: [
      {
        url: "/images/thumbnail-blog.jpg",
        width: 1200,
        height: 630,
        alt: "ThanhDev Blog - Backend Development Insights",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Chiithanh1", // Updated Twitter handle
    creator: "@Chiithanh1", // Updated Twitter handle
    title: "ThanhDev Blog | Backend Development & Insights",
    description:
      "Explore ThanhDev blog, sharing experiences in backend development, performance optimization, and best practices.",
    images: "/images/thumbnail-blog.jpg",
  },
};

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  console.log(session);

  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
