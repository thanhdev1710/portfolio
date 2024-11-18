import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Thanh's projects, showcasing a range of web development work, including backend systems, fullstack applications, and performance optimization. Discover the technologies and solutions I've built.",
  keywords: [
    "Thanh",
    "projects",
    "web development",
    "backend development",
    "fullstack applications",
    "React",
    "Next.js",
    "PostgreSQL",
    "Redis",
    "performance optimization",
    "backend systems",
    "Node.js",
    "API development",
    "software engineering",
  ],
  authors: [
    {
      name: "ThanhDev",
      url: "https://portfolio-thanhdev.vercel.app/",
    },
  ],
  openGraph: {
    title: "Projects - ThanhDev | Backend Developer | Fullstack Web Developer",
    description:
      "Explore a collection of Thanh's projects, from backend systems to fullstack web applications. See how I optimize performance and build scalable solutions with cutting-edge technologies.",
    url: "https://portfolio-thanhdev.vercel.app/projects",
    siteName: "Thanh's Portfolio",
    images: [
      {
        url: "/images/website.avif", // Thay đổi URL thumbnail nếu có
        width: 1200,
        height: 630,
        alt: "Thanh's Projects - Backend Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle", // Thay bằng tên người dùng Twitter của bạn
    creator: "@yourtwitterhandle", // Thay bằng tên người dùng Twitter của bạn
    title: "Projects - ThanhDev | Backend Developer | Fullstack Web Developer",
    description:
      "Explore Thanh's web development projects, focusing on backend systems, fullstack applications, and performance optimization. Learn about the technologies used and the solutions built.",
    images: "/images/website.avif", // Thay bằng hình ảnh của bạn
  },
};

const data: {
  title: string;
  description: string;
  img: string;
  href: string;
}[] = [];

console.log(data);

export default function page() {
  return (
    <div className="h-full w-full p-4">
      <div className="border-2 border-[var(--border)] p-4 w-full h-full rounded-[30px]">
        <div className="max-w-[1130px] mx-auto h-full">
          <Link
            aria-label="To Portfolio"
            href="/portfolio"
            className="size-14 rounded-full border-2 border-[var(--border)] flex items-center justify-center mx-auto max-sm:mt-4 max-sm:mb-8 mt-8 mb-16"
          >
            <X className="text-[var(--text-primary)]" />
          </Link>
          <div className="grid grid-cols-2 gap-4 w-full h-full max-md:grid-cols-1">
            {Array.from({ length: 6 }).map((item, i) => (
              <div
                key={i}
                className="card-customer h-full w-full overflow-hidden !bg-transparent !border-none"
              >
                <div className="aspect-[3/2] w-full h-auto rounded-2xl mb-2 bg-red-400"></div>
                <div className="flex items-center justify-between p-4">
                  <div>
                    <h3>Galaxy Cinema Clone</h3>
                    <p>dasdaskdnas,dsn,das</p>
                  </div>
                  <Button aria-label="Visit">
                    <ExternalLink /> Visit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
