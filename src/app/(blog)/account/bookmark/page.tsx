import React from "react";

export default async function page() {
  await new Promise((res) => setTimeout(() => res(""), 1000));
  return (
    <section>
      <h2 className="font-bold text-3xl">Các bài viết đã lưu</h2>
      <p>
        Dễ dàng theo dõi và quản lý những bài viết mà bạn yêu thích, tất cả đều
        được lưu trữ tại đây.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-6"></div>
    </section>
  );
}
