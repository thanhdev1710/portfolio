import BreadcrumbCus from "@/components/shared/BreadcrumbCus";
import Hashtag from "@/components/shared/Hashtag";
import { PaginationBlog } from "@/components/shared/PaginationBlog";
import ToolBoxShow from "@/components/shared/ToolBoxShow";
import { GetListBlog } from "@/services/Blog";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function page({
  params,
  searchParams,
}: {
  params: Promise<{ tag: string }>;
  searchParams: Promise<{ p: string; q: string }>;
}) {
  const { tag } = await params;
  const { p, q } = await searchParams;
  const { data: listBlog, totalPage } = await GetListBlog({
    page: Number(p) || 1,
    search: q,
    tag,
  });
  return (
    <>
      <BreadcrumbCus
        urls={[
          { label: "Trang chủ", url: "/blogs" },
          { label: "Hashtag", url: "/tags" },
          { label: tag, url: "/tags/" + tag },
        ]}
      />
      <section className="flex flex-col gap-4">
        {listBlog.map((blog) => (
          <article
            key={blog.id}
            className="h-full w-full bg-background rounded-lg p-4 flex gap-4 shadow"
          >
            <div className="size-10 rounded-full flex-shrink-0 border-2 border-blue-400 p-1">
              <Image
                alt="Image user"
                src={blog.imageUser || "/images/user-default.png"}
                width={60}
                height={60}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex gap-2 text-sm text-gray-400 dark:text-gray-500 mt-2">
                <Link
                  className="text-blue-600 dark:text-blue-400 font-medium"
                  href={`/user/${blog.idUser}`}
                  aria-label="Link to user"
                >
                  {blog.nameUser}
                </Link>
                <span>{format(blog.updatedAt, "dd-MM-yy | hh:mm")}</span>
                <span>-</span>
                <span>2 phút đọc</span>
              </div>
              <h3 className="text-lg line-clamp-2">
                <Link href={`/blogs/${blog.slug}`} aria-label="Link to blog">
                  {blog.title}
                </Link>
              </h3>
              <div className="flex gap-4">
                {blog.tags.map((tag) => (
                  <Hashtag key={tag} label={tag} url={tag} />
                ))}
              </div>

              <ToolBoxShow
                numBookmark={1}
                numMess={2}
                numView={3}
                numVoteUp={4}
                numVoteDown={5}
                sizeIcon={16}
                sizeText={16}
              />
            </div>
          </article>
        ))}
      </section>
      <div className="mt-4 mb-8">
        <PaginationBlog curPage={Number(p) || 1} totalPage={totalPage} />
      </div>
    </>
  );
}
