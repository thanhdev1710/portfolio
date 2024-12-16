import { Tooltip } from "antd";
import { ArrowBigUp, ArrowBigDown, Bookmark } from "lucide-react";
import React from "react";
import ButtonALargeSmall from "../Button/ButtonALargeSmall";
import ButtonShare from "../Button/ButtonShare";

export default function AsideBlogLeft() {
  return (
    <aside className="relative max-lg:hidden">
      <div className="sticky top-[20%] left-0 w-20 items-center flex flex-col gap-4">
        <Tooltip placement="right" title="Upvote">
          <button className="flex items-center justify-center size-10 p-2 rounded-full bg-blue-300 shadow-md hover:bg-blue-400">
            <ArrowBigUp className="w-full h-full fill-current text-white" />
          </button>
        </Tooltip>

        <Tooltip placement="right" title="Downvote">
          <button className="flex items-center justify-center size-10 p-2 rounded-full bg-red-300 shadow-md hover:bg-red-400">
            <ArrowBigDown className="w-full h-full fill-current text-white" />
          </button>
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
