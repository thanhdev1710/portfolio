import BlogComponent from "@/components/shared/BlogComponent";
import BreadcrumbCus from "@/components/shared/BreadcrumbCus";
import { PaginationBlog } from "@/components/shared/PaginationBlog";
import { GetListBlog } from "@/services/Blog";
import React from "react";

export default async function page({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ p: string; q: string }>;
}) {
  const { category } = await params;
  const { p, q } = await searchParams;
  const { data: listBlog, totalPage } = await GetListBlog({
    page: Number(p) || 1,
    search: q,
    category,
  });
  return (
    <>
      <BreadcrumbCus
        urls={[
          { label: "Trang chủ", url: "/blogs" },
          { label: "Hashtag", url: "/tags" },
          { label: category, url: "/tags/" + category },
        ]}
      />
      <section className="flex flex-col gap-4">
        {listBlog.map((blog) => (
          <BlogComponent blog={blog} />
        ))}
      </section>
      <div className="mt-4 mb-8">
        <PaginationBlog
          href={`/categories/${category}`}
          curPage={Number(p) || 1}
          totalPage={totalPage}
        />
      </div>
    </>
  );
}
