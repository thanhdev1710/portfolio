import BreadcrumbCus from "@/components/shared/BreadcrumbCus";
import ToolBoxShow from "@/components/shared/ToolBoxShow";
import { GetListBlog } from "@/services/Blog";
import Link from "next/link";
import { format } from "date-fns";
import Image from "next/image";
import { PaginationBlog } from "@/components/shared/PaginationBlog";
import { Button } from "@/components/ui/button";
import Tag from "@/components/shared/Hashtag";
import tag from "antd/es/tag";

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
                <span>{blog.duration} phút đọc</span>
              </div>
              <h3 className="text-lg line-clamp-2">
                <Link href={`/blogs/${blog.slug}`} aria-label="Link to blog">
                  {blog.title}
                </Link>
              </h3>
              <div className="flex gap-8">
                <div className="flex gap-2 items-center">
                  <Button
                    asChild
                    variant="default"
                    className="bg-blue-400 text-white hover:bg-blue-500"
                  >
                    <Link href="/tags">Hashtag</Link>
                  </Button>
                  <div className="flex gap-2">
                    {blog.tags.map((tag) => (
                      <Tag title="tags" key={tag} label={tag} url={tag} />
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <Button
                    asChild
                    variant="default"
                    className="bg-purple-400 text-white hover:bg-purple-500"
                  >
                    <Link href="/categories">Thể loại</Link>
                  </Button>
                  <div className="flex gap-2">
                    {blog.categories.map((category) => (
                      <Tag
                        title="categories"
                        key={category}
                        label={category}
                        url={category}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <ToolBoxShow
                numMess={blog.countComment}
                numBookmark={blog.countBookmark}
                numView={blog.countView}
                numVoteUp={blog.countLike}
                numVoteDown={blog.countDislike}
                sizeIcon={16}
                sizeText={16}
              />
            </div>
          </article>
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
