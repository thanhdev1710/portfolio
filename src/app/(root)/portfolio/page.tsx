import { Flex1 } from "@/components/Flex/Flex1";
import { Flex2 } from "@/components/Flex/Flex2";
import { Flex3 } from "@/components/Flex/Flex3";
import FlexASide from "@/components/Flex/FlexASide";
import FlexResponsive from "@/components/Flex/FlexResponsive";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ThanhDev Portfolio - Backend & Fullstack Developer",
  description:
    "Welcome to ThanhDev Portfolio. I am a backend-focused developer, specializing in building scalable systems, optimizing performance, and creating robust applications. Explore my projects and blog.",
  keywords: [
    "ThanhDev",
    "portfolio",
    "backend developer",
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
      url: "https://thanhdev.vercel.app/",
    },
  ],
  openGraph: {
    title: "ThanhDev Portfolio - Backend Developer | Fullstack Web Developer",
    description:
      "Explore ThanhDev Portfolio, a showcase of skills in backend development, fullstack web applications, and optimization techniques.",
    url: "https://thanhdev.vercel.app/portfolio",
    siteName: "ThanhDev Portfolio",
    images: [
      {
        url: "/images/website.avif",
        width: 1200,
        height: 630,
        alt: "ThanhDev Portfolio - Backend Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Chiithanh1", // Updated Twitter handle
    creator: "@Chiithanh1", // Updated Twitter handle
    title: "ThanhDev Portfolio - Backend Developer | Fullstack Web Developer",
    description:
      "Explore ThanhDev Portfolio, showcasing backend and fullstack development skills. Learn about projects and achievements.",
    images: "/images/website.avif", // Updated image URL if needed
  },
};

export default function page() {
  return (
    <div className="h-full w-full p-4">
      <div className="border-2 border-[var(--border)] p-4 w-full h-full rounded-[30px] flex xl:flex-row flex-col gap-4">
        <section className="min-h-svh w-full xl:w-[76%] flex flex-col gap-4">
          <Flex1 />
          <Flex2 />
          <FlexResponsive />
          <Flex3 />
        </section>
        <FlexASide />
      </div>
    </div>
  );
}
