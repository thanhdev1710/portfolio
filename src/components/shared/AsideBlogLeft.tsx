import { Tooltip } from "antd";
import { Bookmark } from "lucide-react";
import React from "react";
import ButtonALargeSmall from "../Button/ButtonALargeSmall";
import ButtonShare from "../Button/ButtonShare";
import ButtonLike from "../Button/ButtonLike";

export default function AsideBlogLeft({ blogId }: { blogId: number }) {
  return (
    <aside className="relative max-lg:hidden">
      <div className="sticky top-[20%] left-0 w-20 items-center flex flex-col gap-4">
        <Tooltip placement="right" title="Upvote">
          <ButtonLike blogId={blogId} type="like" />
        </Tooltip>

        <Tooltip placement="right" title="Downvote">
          <ButtonLike blogId={blogId} type="dislike" />
        </Tooltip>

        <Tooltip placement="right" title="Lưu lại bài viết">
          <button className="flex items-center justify-center size-10 p-2 rounded-full bg-slate-600 shadow-md hover:bg-slate-700">
            <Bookmark className="w-full h-full text-white" />
          </button>
        </Tooltip>

        <ButtonALargeSmall />

        <ButtonShare />
      </div>
    </aside>
  );
}
