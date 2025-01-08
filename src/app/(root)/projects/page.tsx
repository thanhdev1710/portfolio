import VideoCustom from "@/components/shared/VideoCustom";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ExternalLink, Info, X } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore ThanhDev's projects showcasing a range of web development work using the PERN stack (PostgreSQL, Express.js, React, Node.js), including backend systems, fullstack applications, and performance optimization.",
  keywords: [
    "ThanhDev",
    "projects",
    "web development",
    "PERN stack",
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
    "ThanhDev portfolio",
  ],
  authors: [
    {
      name: "ThanhDev",
      url: "https://thanhdev.io.vn/",
    },
  ],
  openGraph: {
    title: "Projects | ThanhDev - Fullstack Web Development with PERN",
    description:
      "Explore ThanhDev's collection of projects developed using the PERN stack (PostgreSQL, Express.js, React, Node.js). Learn about the cutting-edge technologies and solutions ThanhDev has built.",
    url: "https://thanhdev.io.vn/projects",
    siteName: "ThanhDev Portfolio",
    images: [
      {
        url: "/images/website.avif",
        width: 1200,
        height: 630,
        alt: "Projects | ThanhDev - Fullstack Web Development with PERN",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Chiithanh1",
    creator: "@Chiithanh1",
    title: "ThanhDev Projects - Fullstack Web Development with PERN",
    description:
      "Explore ThanhDev's web development projects built with the PERN stack (PostgreSQL, Express.js, React, Node.js). Learn about the technologies used and the solutions ThanhDev has developed.",
    images: "/images/website.avif",
  },
};

const data: {
  title: string;
  description: string;
  video: string;
  href: string;
  status: "Active" | "No Funding" | "In Development";
}[] = [
  {
    title: "YiDiMoVi - Your Free Streaming Platform",
    description:
      "YiDiMoVi is a free online movie streaming platform, offering an extensive library of films with a user-friendly and immersive interface for movie enthusiasts.",
    video:
      "https://ik.imagekit.io/yidiElectro/video/YiDiMoVi.mp4?updatedAt=1733062886229",
    href: "https://yididev.online/",
    status: "Active",
  },
  {
    title: "SoulNest - A Social Network for Connections",
    description:
      "SoulNest is a modern social network designed to foster meaningful connections, share moments, and build communities in a beautifully crafted digital space.",
    video:
      "https://ik.imagekit.io/yidiElectro/video/SoulNest.mp4?updatedAt=1733062886229",
    href: "",
    status: "In Development",
  },
  {
    title: "Portfolio - Showcasing My Expertise",
    description:
      "Explore my personal portfolio, a sleek and professional website highlighting my skills, projects, and journey as a fullstack developer.",
    video:
      "https://ik.imagekit.io/yidiElectro/video/Portfolio.mp4?updatedAt=1733062886229",
    href: "https://thanhdev.io.vn/",
    status: "Active",
  },
  {
    title: "GalaxyCinemaClone - Your Movie Theater Experience",
    description:
      "GalaxyCinemaClone replicates the ultimate movie theater booking experience with advanced features, seamless design, and real-time seat selection.",
    video:
      "https://ik.imagekit.io/yidiElectro/video/GalaxyCinemaClone.mp4?updatedAt=1733062886229",
    href: "",
    status: "No Funding",
  },
  {
    title: "ElectricCar - Revolutionizing Car Sales",
    description:
      "ElectricCar is an innovative platform dedicated to showcasing and selling electric vehicles, emphasizing sustainability and cutting-edge technology.",
    video:
      "https://ik.imagekit.io/yidiElectro/video/ElectricCar.mp4?updatedAt=1733062886229",
    href: "https://car.yididev.online/app",
    status: "Active",
  },
  {
    title: "AdminCinema - Cinema Management Dashboard",
    description:
      "AdminCinema is a robust and intuitive admin dashboard for managing cinema operations, offering tools for scheduling, ticketing, and analytics.",
    video:
      "https://ik.imagekit.io/yidiElectro/video/AdminCinema.mp4?updatedAt=1733062886229",
    href: "",
    status: "No Funding",
  },
];

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
          <div className="grid grid-cols-2 gap-6 w-full h-full max-md:grid-cols-1">
            {data.map((item, i) => (
              <div
                key={i}
                className="card-customer h-full w-full !bg-transparent !border-none p-2"
              >
                <VideoCustom video={item.video} />
                <div className="flex items-center justify-between gap-4 px-4 mt-4">
                  <div>
                    <h3 className="font-semibold text-lg line-clamp-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="font-light text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  {item.href ? (
                    <Button variant="default" asChild aria-label="Visit">
                      <Link aria-label="Link to website" href={item.href}>
                        <ExternalLink /> Visit
                      </Link>
                    </Button>
                  ) : (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="inline-flex items-center justify-center p-2 bg-transparent rounded-md cursor-pointer">
                            <Info />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>This project is under development</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
                <div className="absolute top-3 right-4 text-sm bg-opacity-80 p-2 rounded-lg">
                  <div
                    className={`status-tag px-3 py-1 text-center rounded-full font-semibold ${
                      item.status === "Active"
                        ? "bg-green-500 text-white"
                        : item.status === "No Funding"
                        ? "bg-red-500 text-white"
                        : "bg-yellow-500 text-black"
                    }`}
                  >
                    <span>{item.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
