import VideoCustom from "@/components/shared/VideoCustom";
import { Button } from "@/components/ui/button";
import { getAllProject } from "@/services/Project";
import { ExternalLink, X } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Dự án",
  description:
    "Khám phá các dự án phát triển web của ThanhDev, bao gồm hệ thống backend, ứng dụng fullstack và các giải pháp tối ưu hiệu suất.",
  keywords: [
    "ThanhDev",
    "dự án",
    "phát triển web",
    "backend",
    "ứng dụng fullstack",
    "React",
    "Next.js",
    "PostgreSQL",
    "Redis",
    "tối ưu hiệu năng",
    "hệ thống backend",
    "Node.js",
    "phát triển API",
    "kỹ sư phần mềm",
    "portfolio ThanhDev",
  ],
  authors: [
    {
      name: "ThanhDev",
      url: "https://thanhdev.io.vn/",
    },
  ],
  openGraph: {
    title: "Dự án | ThanhDev - Phát triển Web Fullstack",
    description:
      "Khám phá bộ sưu tập dự án được xây dựng bởi ThanhDev, tập trung vào phát triển backend, ứng dụng fullstack và tối ưu hệ thống.",
    url: "https://thanhdev.io.vn/projects",
    siteName: "Portfolio ThanhDev",
    images: [
      {
        url: "/images/website.avif",
        width: 1200,
        height: 630,
        alt: "Dự án | ThanhDev - Phát triển Web Fullstack",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Chiithanh1",
    creator: "@Chiithanh1",
    title: "Dự án ThanhDev - Phát triển Web Fullstack",
    description:
      "Khám phá các dự án phát triển web của ThanhDev với trọng tâm là backend, ứng dụng fullstack và hiệu suất hệ thống.",
    images: "/images/website.avif",
  },
};

export async function generateStaticParams() {
  const listProject = await getAllProject();

  return listProject.data.map((project) => ({
    slug: project.slug,
  }));
}

export default async function page() {
  const listProject = await getAllProject();
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
          <section className="grid grid-cols-2 gap-6 w-full h-full max-md:grid-cols-1">
            {listProject.data.map((project) => (
              <article
                key={project.slug}
                className="card-customer h-full w-full !bg-transparent !border-none p-2"
              >
                <VideoCustom video={project.video} />
                <div className="flex flex-col gap-4 px-4 mt-4">
                  <div>
                    <h2 className="font-bold text-lg line-clamp-1 mb-2">
                      {project.title}
                    </h2>
                    <p className="font-light text-sm line-clamp-2">
                      {project.shortDescription}
                    </p>
                  </div>

                  <Button variant="default" asChild aria-label="Chi tiết">
                    <Link
                      aria-label="Link to website"
                      href={`/projects/${project.slug}`}
                    >
                      <ExternalLink /> Khám phá ngay
                    </Link>
                  </Button>
                </div>
                <div className="absolute top-3 right-4 text-sm bg-opacity-80 p-2 rounded-lg">
                  <div
                    className={`status-tag px-3 py-1 text-center rounded-full font-semibold ${
                      project.status === "active"
                        ? "bg-green-500 text-white"
                        : project.status === "no-funding"
                        ? "bg-red-500 text-white"
                        : "bg-yellow-500 text-white"
                    }`}
                  >
                    <span>
                      {project.status === "active"
                        ? "Đang hoạt động"
                        : project.status === "no-funding"
                        ? "Không có kinh phí"
                        : "Đang phát triển"}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
