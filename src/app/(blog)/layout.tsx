import React from "react";
import { Metadata } from "next";
import { auth } from "@/actions/authAction";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/ModeToggle";
import Logo from "@/components/shared/Logo";
import { User } from "lucide-react";
import Image from "next/image";

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
    url: "https://www.thanhdev.io.vn/blogs",
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
  const user = session.data?.user;

  return (
    <div className="bg-[var(--background-primary)] min-h-svh flex flex-col gap-4">
      <header className="w-full bg-background shadow px-4">
        <div className="flex justify-between items-center gap-10 py-2 container mx-auto">
          <div className="flex items-center h-10 gap-4">
            <Logo />
            <Input className="w-[40vw]" />
            <div className="flex-shrink-0">
              <ModeToggle />
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 max-md:hidden">
            {session.success && user ? (
              <Link aria-label="Tài khoảng người dùng" href="/account">
                <Image
                  width={60}
                  height={60}
                  alt={`User ${user.name}`}
                  src={user.image || "/images/user-default.png"}
                  className="size-8 rounded-full"
                />
              </Link>
            ) : (
              <>
                <Button variant="link" asChild>
                  <Link aria-label="Đăng nhập" href="/login">
                    Đăng nhập
                  </Link>
                </Button>
                <Button variant="secondary" asChild>
                  <Link aria-label="Tạo tài khoản" href="/signup">
                    Tạo tài khoản
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </header>

      <div className="w-full px-4">
        <main className="container mx-auto flex flex-col gap-4">
          {children}
        </main>
      </div>
    </div>
  );
}
