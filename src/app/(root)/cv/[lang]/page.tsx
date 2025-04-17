import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV của ThanhDev - Lập trình viên Fullstack",
  description:
    "Khám phá CV của ThanhDev, lập trình viên fullstack chuyên nghiệp với kinh nghiệm phát triển ứng dụng web, tối ưu hệ thống và phát triển giải pháp có khả năng mở rộng. Tìm hiểu thêm về kỹ năng và hành trình sự nghiệp của tôi.",
  keywords: [
    "ThanhDev",
    "CV ThanhDev",
    "lập trình viên fullstack",
    "nhà phát triển web",
    "React",
    "Next.js",
    "PostgreSQL",
    "Redis",
    "kỹ sư phần mềm",
    "CV lập trình viên",
    "hành trình sự nghiệp",
  ],
  authors: [
    {
      name: "ThanhDev",
      url: "https://thanhdev.io.vn/",
    },
  ],
  openGraph: {
    title: "CV của ThanhDev - Lập trình viên Fullstack",
    description:
      "Khám phá CV của ThanhDev, lập trình viên fullstack với các kỹ năng phát triển ứng dụng web, tối ưu hệ thống và giải pháp mở rộng. Hiểu rõ hơn về kỹ năng và hành trình sự nghiệp của tôi.",
    url: "https://thanhdev.io.vn/cv",
    siteName: "ThanhDev Portfolio",
    images: [
      {
        url: "/images/website.avif",
        width: 1200,
        height: 630,
        alt: "CV của ThanhDev - Lập trình viên Fullstack",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Chiithanh1",
    creator: "@Chiithanh1",
    title: "CV của ThanhDev - Lập trình viên Fullstack",
    description:
      "Khám phá CV của ThanhDev, lập trình viên fullstack với đam mê tối ưu hiệu suất và phát triển hệ thống có khả năng mở rộng. Tìm hiểu về các kỹ năng và hành trình sự nghiệp của tôi.",
    images: "/images/website.avif",
  },
};

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "vn" }];
}

export default async function page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-10">
      <h1 className="text-4xl font-extrabold text-center mb-8">CV của tôi</h1>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-6 space-x-4">
        <Link
          href="/cv/en"
          className={`px-6 py-2 text-xl font-semibold rounded-t-lg transition-all duration-300 ${
            lang === "en"
              ? "bg-white text-black shadow-lg"
              : "bg-gray-800 text-gray-300"
          }`}
        >
          CV Tiếng Anh
        </Link>
        <Link
          href="/cv/vn"
          className={`px-6 py-2 text-xl font-semibold rounded-t-lg transition-all duration-300 ${
            lang === "vn"
              ? "bg-white text-black shadow-lg"
              : "bg-gray-800 text-gray-300"
          }`}
        >
          CV Tiếng Việt
        </Link>
      </div>

      {/* Content Area */}
      <div className="w-full max-w-5xl mx-auto">
        {/* Kiểm tra query parameter `lang` */}

        <p className="text-gray-300 text-center mb-6">
          Xem hoặc tải xuống CV {lang === "en" ? "tiếng Anh" : "tiếng Việt"} của
          tôi. Phù hợp cho các vị trí lập trình viên fullstack và backend.
        </p>
        <div className="aspect-[4/3] md:aspect-[16/9] bg-white rounded-2xl shadow-2xl overflow-hidden mb-6">
          <iframe
            src={
              lang === "en"
                ? "https://drive.google.com/file/d/1SJ-_r86fz--JWuYSEGcRh1ogqEipgjSQ/preview"
                : "https://drive.google.com/file/d/1Jx5AnOKaGux09bys7s8P2w6BezlC6Hse/preview"
            }
            width="100%"
            height="100%"
            className="w-full h-full"
          ></iframe>
        </div>
        <Link
          href={
            lang === "en"
              ? "https://drive.google.com/uc?export=download&id=1SJ-_r86fz--JWuYSEGcRh1ogqEipgjSQ"
              : "https://drive.google.com/uc?export=download&id=1Jx5AnOKaGux09bys7s8P2w6BezlC6Hse"
          }
          download
          className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
        >
          Tải xuống CV {lang === "en" ? "Tiếng Anh" : "Tiếng Việt"}
        </Link>
      </div>
    </div>
  );
}
