import { getProjectBySlug } from "@/services/Project";
import { ArrowLeft, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  return (
    <div className=" h-full w-full p-4">
      <div className="border-2 border-[var(--border)] p-4 w-full h-full rounded-[30px]">
        <div className="max-w-[1130px] mx-auto h-full">
          <Link
            aria-label="To Portfolio"
            href="/projects"
            className="size-14 rounded-full border-2 border-[var(--border)] flex items-center justify-center mx-auto max-sm:mt-4 max-sm:mb-8 mt-8 mb-16"
          >
            <ArrowLeft className="text-[var(--text-primary)]" />
          </Link>
          <section className="w-full h-full space-y-16">
            <div className="space-y-8">
              <h1 className="text-4xl font-bold text-center">
                {project.title}
              </h1>
              <p className="text-center">{project.shortDescription}</p>
              <Image
                loading="eager"
                alt={project.title}
                src={project.imgMain}
                width={1200}
                height={700}
                className="aspect-video w-full h-auto p-0.5 rounded-lg transition-all shadow-lg dark:border-2 dark:border-blue-200"
              />
            </div>
            <hr />
            <ReactMarkdown className="prose dark:prose-invert w-full max-w-none">
              {project.detailedDescription}
            </ReactMarkdown>
            <hr />
            <div>
              <h3 className="font-bold text-4xl text-center mb-4">
                Các ảnh demo website
              </h3>
              <div className="space-y-8">
                {project.imgGallery.map((img) => (
                  <Image
                    loading="lazy"
                    alt={project.title}
                    src={img}
                    width={1200}
                    height={700}
                    className="aspect-video w-full h-auto p-0.5 rounded-lg transition-all shadow-lg dark:border-2 dark:border-blue-200"
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
