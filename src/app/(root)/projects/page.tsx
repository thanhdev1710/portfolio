import VideoCustom from "@/components/shared/VideoCustom";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getAllProject } from "@/services/Project";
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
                <div className="flex items-center justify-between gap-4 px-4 mt-4">
                  <div>
                    <h2 className="font-bold text-lg line-clamp-1 mb-2">
                      {project.title}
                    </h2>
                    <p className="font-light text-sm line-clamp-2">
                      {project.shortDescription}
                    </p>
                  </div>

                  <Button variant="default" asChild aria-label="Visit">
                    <Link
                      aria-label="Link to website"
                      href={`/projects/${project.slug}`}
                    >
                      <ExternalLink /> Visit
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
                        : "bg-yellow-500 text-black"
                    }`}
                  >
                    <span>{project.status}</span>
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
