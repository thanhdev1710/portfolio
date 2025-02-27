import { getBookmarks } from "@/services/Bookmark";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function page() {
  const bookmarks = await getBookmarks();
  return (
    <section>
      <h2 className="font-bold text-3xl">Các bài viết đã lưu</h2>
      <p>
        Dễ dàng theo dõi và quản lý những bài viết mà bạn yêu thích, tất cả đều
        được lưu trữ tại đây.
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 mt-6">
        {bookmarks.data.map((bookmark) => (
          <Link
            href={bookmark.slug}
            key={bookmark.slug}
            className="overflow-hidden w-full rounded-lg shadow-md dark:bg-blue-500 bg-blue-300 dark:text-white text-black"
          >
            <Image
              alt={bookmark.title}
              src={bookmark.image || "/images/website.avif"}
              width={600}
              height={400}
              className="aspect-[3/2] object-cover w-full h-auto"
            />
            <div className="p-4">
              <h3 className="font-bold text-2xl inline-block mb-2">
                {bookmark.title}
              </h3>
              <p className="text-sm line-clamp-3">{bookmark.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
