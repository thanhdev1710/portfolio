import ToolBoxShow from "@/components/shared/ToolBoxShow";
import { GetBlogBySlug } from "@/services/Blog";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import ButtonShare from "@/components/Button/ButtonShare";
import BreadcrumbCus from "@/components/shared/BreadcrumbCus";
import AsideBlogLeft from "@/components/shared/AsideBlogLeft";
import AsideBlogRight from "@/components/shared/AsideBlogRight";
import { ContextChangeFontSize } from "@/context/ContextChangeFontSize";
import MarkdownChangeFontSize from "@/components/shared/MarkdownChangeFontSize";
import RecordView from "./RecordView";
import Tag from "@/components/shared/Hashtag";
import CommentsList from "@/components/Comments/Comments";
import { auth } from "@/actions/authAction";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await GetBlogBySlug({ slug });

  return {
    title: data.title,
    description: data.summary,
    openGraph: {
      title: data.title,
      description: data.summary,
      url: `https://www.thanhdev.io.vn/blogs/${slug}`,
      images: [
        {
          url: data.image || "/images/website.avif",
          width: 1200,
          height: 630,
          alt: `Image for ${data.title}`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@Chiithanh1", // Updated Twitter handle
      creator: "@Chiithanh1", // Updated Twitter handle
      title: data.title,
      description: data.summary,
      images: data.image || "/images/website.avif",
    },
  };
}

export default async function page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ p: string }>;
}) {
  const session = await auth();
  const { slug } = await params;
  const { p } = await searchParams;
  const blog = await GetBlogBySlug({ slug });

  return (
    <ContextChangeFontSize>
      <Suspense key={slug} fallback={null}>
        <RecordView slug={slug} />
      </Suspense>
      <BreadcrumbCus
        urls={[
          { label: "Trang chủ", url: "/blogs" },
          { label: "Bài viết", url: "/blogs" },
          { label: blog.title, url: `/blogs/${blog.slug}` },
        ]}
      />
      <div className="flex xl:gap-8 lg:gap-4 min-h-svh">
        <AsideBlogLeft blogId={blog.id} />
        <div id="main-content-toc" className="w-full space-y-16">
          <main className="flex flex-col gap-8">
            <header className="flex justify-between">
              <div className="flex gap-2 text-sm text-gray-400 dark:text-gray-500 mt-2">
                <div className="size-10 rounded-full flex-shrink-0 border-2 border-blue-400 p-1">
                  <Image
                    alt="Image user"
                    src={blog.imageUser || "/images/user-default.avif"}
                    width={60}
                    height={60}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <Link
                  className="text-blue-600 dark:text-blue-400 font-medium"
                  href={`/account/${blog.idUser}`}
                  aria-label="Link to account"
                >
                  {blog.nameUser}
                </Link>
              </div>
              <div className="flex flex-col">
                <div className="text-gray-400">
                  <span>
                    {format(
                      blog.updatedAt,
                      "'Đã đăng vào ngày 'dd 'tháng' MM, yyyy | hh:mm",
                      { locale: vi }
                    )}
                  </span>
                  <span> - </span>
                  <span>{blog.duration} phút đọc</span>
                </div>
                <ToolBoxShow
                  numBookmark={blog.countBookmark}
                  numView={blog.countView}
                  numVoteDown={blog.countDislike}
                  numVoteUp={blog.countLike}
                  numMess={blog.countComment}
                  sizeIcon={20}
                  sizeText={20}
                />
              </div>
            </header>
            <section>
              <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
              <MarkdownChangeFontSize str={blog.content} />

              {blog.image && (
                <Image
                  alt={`Ảnh ${blog.title}`}
                  src={blog.image}
                  width={1000}
                  height={600}
                  sizes="60vw"
                  className="object-cover w-full h-auto aspect-video rounded-xl shadow"
                />
              )}
            </section>
            <footer>
              <div>
                <h2 className="text-4xl font-bold mb-4">Tóm tắt</h2>
                <MarkdownChangeFontSize str={blog.summary} />
              </div>
              <div className="flex gap-4 mt-8">
                {blog.tags.map((tag) => (
                  <Tag title="tags" key={tag} label={tag} url={tag} />
                ))}
              </div>
              <p className="my-4 text-gray-400">All rights reserved</p>
              <ButtonShare placement="top" className="flex-row justify-end" />
            </footer>
          </main>
          <section>
            <h2 className="font-bold text-2xl">Bài viết liên quan</h2>
          </section>
          <section>
            <h2 className="font-bold text-2xl">Bài viết liên quan</h2>
          </section>
          <section>
            <h2 className="font-bold text-2xl">Bình luận</h2>
            <div className="mt-4">
              <CommentsList
                userId={Number(session.data?.user.id)}
                slug={slug}
                p={Number(p) || 1}
                blogId={blog.id}
              />
            </div>
          </section>
        </div>
        <AsideBlogRight />
      </div>
    </ContextChangeFontSize>
  );
}
