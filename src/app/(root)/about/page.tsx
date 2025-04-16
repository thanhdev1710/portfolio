import { Slider } from "@/components/shared/Slider";
import SliderWhatIsTheBest from "@/components/shared/SliderWhatIsTheBest";
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "About ThanhDev - Fullstack Developer",
  description:
    "Get to know ThanhDev, a fullstack developer with a passion for building scalable systems, optimizing performance, and creating robust web applications. Learn about my journey, expertise, and what drives me.",
  keywords: [
    "ThanhDev",
    "about ThanhDev",
    "fullstack developer",
    "web developer",
    "career journey",
    "optimization",
    "experience",
    "React",
    "Next.js",
    "PostgreSQL",
    "Redis",
    "software engineering",
  ],
  authors: [
    {
      name: "ThanhDev",
      url: "https://thanhdev.io.vn/",
    },
  ],
  openGraph: {
    title: "About",
    description:
      "Explore ThanhDev's journey, a developer specializing in fullstack web applications, system optimization, and creating scalable solutions. Get a closer look at my story and what motivates me.",
    url: "https://thanhdev.io.vn/about",
    siteName: "ThanhDev Portfolio",
    images: [
      {
        url: "/images/website.avif",
        width: 1200,
        height: 630,
        alt: "About | ThanhDev - Fullstack Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Chiithanh1",
    creator: "@Chiithanh1",
    title: "About | ThanhDev - Fullstack Web Developer",
    description:
      "Learn more about ThanhDev, a fullstack developer passionate about creating scalable systems and optimizing performance. Get insights into my journey and expertise.",
    images: "/images/website.avif",
  },
};

const experience: { title: string; date: string }[] = [];

export default function page() {
  return (
    <div className="h-full w-full p-4">
      <div className="border-2 border-[var(--border)] p-4 w-full h-full rounded-[30px]">
        <div className="max-w-[1130px] mx-auto h-full">
          <Link
            aria-label="Tới trang portfolio"
            href="/portfolio"
            className="size-14 rounded-full border-2 border-[var(--border)] flex items-center justify-center mx-auto max-sm:mt-4 max-sm:mb-8 mt-8 mb-16"
          >
            <X className="text-[var(--text-primary)]" />
          </Link>
          <div className="w-full h-[850px] max-[970px]:h-[910px] max-[830px]:h-[1000px] max-md:h-full flex max-md:flex-col gap-4">
            <section className="w-[50%] max-md:w-full h-full flex flex-col gap-4">
              <article className="card-customer p-6 flex items-center justify-center">
                <div className="w-full">
                  <h1 className="text-3xl font-medium mb-6 border-b border-[var(--border)] pb-4">
                    Tôi là ai?
                  </h1>
                  <div className="mb-6">
                    <h3 className="text-sm tracking-widest font-medium text-[var(--text-secondary)] mb-2 uppercase">
                      Hành trình của tôi
                    </h3>
                    <p className="text-[clamp(16px,1.5vw,18px)] font-medium leading-loose">
                      Tôi bắt đầu hành trình của mình với niềm đam mê khám phá
                      công nghệ, luôn tò mò về cách các hệ thống hoạt động phía
                      sau hậu trường. Dần dần, tôi yêu thích phát triển backend
                      và tập trung vào việc xây dựng các hệ thống mở rộng tốt
                      với PostgreSQL, Redis, Express.js, Gin (Go), và Next.js.
                      Tôi cũng thường tối ưu hiệu năng và giải các bài toán phức
                      tạp để tạo nên những ứng dụng bền vững.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-sm tracking-widest font-medium text-[var(--text-secondary)] mb-2 uppercase">
                      Mục tiêu hiện tại
                    </h3>
                    <p className="text-[clamp(16px,1.5vw,18px)] font-medium leading-loose">
                      Hiện tại, tôi đang tập trung xây dựng các hệ thống backend
                      hiệu suất cao với Express.js, PostgreSQL, Redis và Gin
                      (Go). Đồng thời, tôi cũng phát triển giao diện người dùng
                      mượt mà với React và Next.js. Tôi không ngừng học hỏi để
                      luôn dẫn đầu trong lĩnh vực phát triển phần mềm.
                    </p>
                  </div>
                </div>
              </article>
              <article className="card-customer p-6 flex items-center justify-center">
                <div className="w-full">
                  <h3
                    className={`${
                      experience.length === 0 && "text-center"
                    } text-sm tracking-widest font-medium text-[var(--text-secondary)] mb-4 uppercase`}
                  >
                    Kinh nghiệm
                  </h3>
                  <div className="flex w-full flex-col items-center justify-center gap-4">
                    {experience.length > 0 ? (
                      experience.map((exp) => (
                        <p
                          key={exp.title}
                          className="text-lg w-full font-medium leading-loose flex justify-center items-center gap-4 max-[970px]:flex-col max-[970px]:items-start max-[970px]:gap-0"
                        >
                          <span className="shrink-0">{exp.title}</span>
                          <div className="w-full h-0.5 bg-[var(--border)] max-[970px]:hidden"></div>
                          <span className="text-[var(--text-secondary)] shrink-0">
                            {exp.date}
                          </span>
                        </p>
                      ))
                    ) : (
                      <p className="text-lg font-medium text-center">
                        Mục kinh nghiệm đang được cập nhật. Hãy quay lại sau
                        nhé!
                      </p>
                    )}
                  </div>
                </div>
              </article>
            </section>
            <section className="w-[50%] max-md:w-full h-full flex flex-col gap-4">
              <article className="card-customer p-6 flex items-center justify-center">
                <div className="w-full">
                  <h3 className="text-sm tracking-widest font-medium text-[var(--text-secondary)] mb-4 uppercase">
                    Điều gì là tuyệt nhất?
                  </h3>
                  <SliderWhatIsTheBest />
                </div>
              </article>
              <article className="card-customer !h-[260px] shrink-0 p-6 flex items-center justify-center">
                <div className="w-full">
                  <h3 className="text-3xl font-medium mb-10 relative z-10">
                    Công nghệ tôi sử dụng
                  </h3>
                  <Slider />
                </div>
              </article>
              <article className="card-customer p-6 flex items-center justify-center">
                <div className="w-full">
                  <h3 className="text-sm tracking-widest font-medium text-[var(--text-secondary)] mb-4 uppercase">
                    Cập nhật thường xuyên
                  </h3>
                  <p className="text-[clamp(16px,1.5vw,18px)] font-medium leading-loose mb-6">
                    Theo dõi blog của tôi để đọc các bài viết về phát triển
                    Fullstack, tối ưu hiệu năng và nhiều chủ đề kỹ thuật khác.
                  </p>
                  <Button aria-label="Truy cập Blog" asChild>
                    <Link aria-label="Truy cập Blog" href="/blogs">
                      <ExternalLink />
                      Truy cập Blog
                    </Link>
                  </Button>
                </div>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
