import BreadcrumbCus from "@/components/shared/BreadcrumbCus";
import ToolBoxShow from "@/components/shared/ToolBoxShow";
import { GetListBlog } from "@/services/Blog";
import Link from "next/link";
import { format } from "date-fns";
import Image from "next/image";
import { PaginationBlog } from "@/components/shared/PaginationBlog";
import { Button } from "@/components/ui/button";
import Tag from "@/components/shared/Hashtag";
import BlogComponent from "@/components/shared/BlogComponent";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ p: string; q: string }>;
}) {
  const { p, q } = await searchParams;
  const {
    data: listBlog,
    totalPage,
    totalItem,
  } = await GetListBlog({
    page: Number(p) || 1,
    search: q,
  });

  if (totalItem === 0) {
    return (
      <>
        <BreadcrumbCus
          urls={[
            { label: "Trang chủ", url: "/blogs" },
            { label: "Bài viết", url: "/blogs" },
          ]}
        />
        <h1>
          Hiện tại chưa có bài viết nào, hãy bắt đầu thêm nội dung mới để trang
          này trở nên sinh động hơn!
        </h1>
      </>
    );
  }

  return (
    <>
      <BreadcrumbCus
        urls={[
          { label: "Trang chủ", url: "/blogs" },
          { label: "Bài viết", url: "/blogs" },
        ]}
      />
      <section className="flex flex-col gap-4">
        {listBlog.map((blog) => (
          <BlogComponent blog={blog} />
        ))}
      </section>
      <div className="mt-4 mb-8">
        <PaginationBlog
          href="/blogs"
          curPage={Number(p) || 1}
          totalPage={totalPage}
        />
      </div>
    </>
  );
}
