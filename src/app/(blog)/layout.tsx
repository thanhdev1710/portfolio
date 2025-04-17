import React from "react";
import { Metadata } from "next";
import { auth } from "@/actions/authAction";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/ModeToggle";
import Logo from "@/components/shared/Logo";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog | ThanhDev - Chia sẻ hành trình phát triển phần mềm",
  description:
    "Chào mừng bạn đến với blog của tôi, nơi tôi chia sẻ kinh nghiệm, góc nhìn và mẹo vặt về công nghệ web, tối ưu hiệu suất và các phương pháp phát triển hiện đại.",
  keywords: [
    "ThanhDev",
    "blog",
    "lập trình viên fullstack",
    "phát triển web",
    "tối ưu hiệu suất",
    "Node.js",
    "React",
    "PostgreSQL",
    "Redis",
    "kinh nghiệm",
    "mẹo nghề nghiệp",
    "phát triển API",
  ],
  authors: [
    {
      name: "ThanhDev",
      url: "https://www.thanhdev.io.vn",
    },
  ],
  openGraph: {
    title: "Blog ThanhDev | Phát triển Web & Chia sẻ Kinh nghiệm",
    description:
      "Khám phá blog của ThanhDev, nơi chia sẻ trải nghiệm thực tế trong phát triển web, tối ưu hiệu suất và những bài học hữu ích.",
    url: "https://www.thanhdev.io.vn/blogs",
    images: [
      {
        url: "/images/website.avif",
        width: 1200,
        height: 630,
        alt: "Blog ThanhDev - Góc nhìn lập trình và tối ưu hệ thống",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Chiithanh1",
    creator: "@Chiithanh1",
    title: "Blog ThanhDev | Phát triển Web & Chia sẻ Kinh nghiệm",
    description:
      "Khám phá blog ThanhDev, nơi chia sẻ kinh nghiệm phát triển web, tối ưu hiệu suất và các phương pháp lập trình hiệu quả.",
    images: "/images/website.avif",
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
              <Link aria-label="User account" href="/account">
                <Image
                  width={60}
                  height={60}
                  alt={`User ${user.name}`}
                  src={user.image || "/images/user-default.avif"}
                  className="size-8 rounded-full"
                />
              </Link>
            ) : (
              <>
                <Button variant="link" asChild>
                  <Link aria-label="Login" href="/login">
                    Login
                  </Link>
                </Button>
                <Button variant="secondary" asChild>
                  <Link aria-label="Sign up" href="/signup">
                    Sign up
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
