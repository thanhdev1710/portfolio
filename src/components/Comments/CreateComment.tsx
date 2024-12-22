"use client";

import { createComment } from "@/actions/commentAction";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CreateComment({ blogId }: { blogId: number }) {
  const [body, setBody] = useState("");
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await createComment({ blogId, body });
        if (res.success) {
          setBody("");
          toast.success(res.message);
        } else {
          toast.error(res.message);
        }
      }}
      className="mt-4"
    >
      <textarea
        className="w-full p-2 border rounded"
        rows={4}
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Nhập bình luận..."
      />
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Gửi bình luận
      </button>
    </form>
  );
}
