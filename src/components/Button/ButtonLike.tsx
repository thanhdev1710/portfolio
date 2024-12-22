"use client";
import { likeAction } from "@/actions/postAction";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";

export default function ButtonLike({
  type,
  blogId,
}: {
  type: "like" | "dislike";
  blogId: number;
}) {
  return (
    <button
      onClick={async () => {
        const response = await likeAction({ blogId, status: type });
        if (response.success) {
          toast.success(response.message);
        } else {
          toast.error(response.message);
        }
      }}
      name="status"
      value={type}
      className={`flex items-center justify-center size-10 p-2 rounded-full shadow-md ${
        type === "like"
          ? "bg-blue-300 hover:bg-blue-400"
          : "bg-red-300 hover:bg-red-400"
      }`}
    >
      {type === "like" ? (
        <ArrowBigUp className="w-full h-full fill-current text-white" />
      ) : (
        <ArrowBigDown className="w-full h-full fill-current text-white" />
      )}
    </button>
  );
}
