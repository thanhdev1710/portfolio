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
    "Learn more about ThanhDev, a backend-focused developer passionate about building scalable systems, optimizing performance, and creating robust web applications. Explore my journey, achievements, and expertise.",
  keywords: [
    "ThanhDev",
    "about ThanhDev",
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
      url: "https://thanhdev.io.vn/",
    },
  ],
  openGraph: {
    title: "About ThanhDev - Backend Developer | Fullstack Web Developer",
    description:
      "Get to know ThanhDev, a skilled backend developer with experience in fullstack development and system optimization. Discover my story, expertise, and what drives me.",
    url: "https://thanhdev.io.vn/about", // Ensure this is the correct URL for the About page
    siteName: "ThanhDev Portfolio",
    images: [
      {
        url: "/images/website.avif", // Change URL if a different thumbnail is used
        width: 1200,
        height: 630,
        alt: "ThanhDev About Page - Backend Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Chiithanh1", // Updated Twitter handle
    creator: "@Chiithanh1", // Updated Twitter handle
    title: "About ThanhDev - Backend Developer | Fullstack Web Developer",
    description:
      "Get to know ThanhDev, a backend-focused developer who specializes in building scalable systems and optimizing performance. Learn about my journey and expertise.",
    images: "/images/website.avif", // Update if a different image is used
  },
};

const experience: { title: string; date: string }[] = [];

export default function page() {
  return (
    <div className="h-full w-full p-4">
      <div className="border-2 border-[var(--border)] p-4 w-full h-full rounded-[30px]">
        <div className="max-w-[1130px] mx-auto h-full">
          <Link
            aria-label="To portfolio"
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
                    What I&apos;m about?
                  </h1>
                  <div className="mb-6">
                    <h3 className="text-sm tracking-widest font-medium text-[var(--text-secondary)] mb-2 uppercase">
                      My story
                    </h3>
                    <p className="text-[clamp(16px,1.5vw,18px)] font-medium leading-loose">
                      I started my journey as a curious tech enthusiast, always
                      eager to understand how systems work behind the scenes.
                      Over time, my passion grew for backend development, diving
                      into building scalable systems with technologies like
                      PostgreSQL, Redis, and Next.js. I love optimizing
                      performance and solving complex challenges that lead to
                      robust applications.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-sm tracking-widest font-medium text-[var(--text-secondary)] mb-2 uppercase">
                      My Current Focus
                    </h3>
                    <p className="text-[clamp(16px,1.5vw,18px)] font-medium leading-loose">
                      I’m currently focused on building high-performance backend
                      systems and creating seamless user experiences with React
                      and Next.js. Always learning and improving to stay ahead
                      in the field.
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
                    Experience
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
                        My experience section is currently being updated. Stay
                        tuned for more!
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
                    What is the best?
                  </h3>
                  <SliderWhatIsTheBest />
                </div>
              </article>
              <article className="card-customer !h-[260px] shrink-0 p-6 flex items-center justify-center">
                <div className="w-full">
                  <h3 className="text-3xl font-medium mb-10 relative z-10">
                    Stack I Use
                  </h3>
                  <Slider />
                </div>
              </article>
              <article className="card-customer p-6 flex items-center justify-center">
                <div className="w-full">
                  <h3 className="text-sm tracking-widest font-medium text-[var(--text-secondary)] mb-4 uppercase">
                    Stay Updated
                  </h3>
                  <p className="text-[clamp(16px,1.5vw,18px)] font-medium leading-loose mb-6">
                    Follow my blog for insights on Full Stack Development,
                    performance optimization, and more. Stay tuned for regular
                    updates!
                  </p>
                  <Button aria-label="Visit Blog" asChild>
                    <Link aria-label="Visit Blog" href="/blog">
                      <ExternalLink />
                      Visit Blog
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
