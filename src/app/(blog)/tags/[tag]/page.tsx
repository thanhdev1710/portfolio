import BlogComponent from "@/components/shared/BlogComponent";
import BreadcrumbCus from "@/components/shared/BreadcrumbCus";
import { PaginationBlog } from "@/components/shared/PaginationBlog";
import { GetListBlog } from "@/services/Blog";
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
          <BlogComponent key={blog.id} blog={blog} />
        ))}
      </section>
      <div className="mt-4 mb-8">
        <PaginationBlog
          href={`/tags/${tag}`}
          curPage={Number(p) || 1}
          totalPage={totalPage}
        />
      </div>
    </>
  );
}
