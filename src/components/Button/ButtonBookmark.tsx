"use client";
import { bookmarkAction } from "@/actions/postAction";
import { Bookmark } from "lucide-react";
import toast from "react-hot-toast";

export default function ButtonBookmark({ blogId }: { blogId: number }) {
  return (
    <button className="flex items-center justify-center size-10 p-2 rounded-full bg-slate-600 shadow-md hover:bg-slate-700">
      <Bookmark
        onClick={async () => {
          const res = await bookmarkAction({ blogId });
          if (res.success) {
            toast.success(res.message);
          } else {
            toast.error(res.message);
          }
        }}
        className="w-full h-full text-white"
      />
    </button>
  );
}
