import React from "react";

export default async function page() {
  await new Promise((res) => setTimeout(() => res(""), 1000));
  return (
    <section>
      <h2 className="font-bold text-3xl">Các hoạt động gần đây</h2>
      <p>
        Xem lại và quản lý những hoạt động gần đây của bạn, bao gồm các bài
        viết, lượt thích và bình luận.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-6"></div>
    </section>
  );
}
