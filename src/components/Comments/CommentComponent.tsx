"use client";
import { createComment } from "@/actions/commentAction";
import { likeAction } from "@/actions/postAction";
import { Comment } from "@/interfaces/Comment";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CommentComponent({
  comment,
  userId,
  parentId,
}: {
  comment: Comment;
  userId?: number;
  parentId: number;
}) {
  const [visibleReplies, setVisibleReplies] = useState(2); // Bắt đầu hiển thị 2 bình luận
  const [showReplyInput, setShowReplyInput] = useState(false); // Hiển thị input trả lời
  const [replyText, setReplyText] = useState(""); // Nội dung trả lời

  // Hàm để tải thêm 5 bình luận mỗi lần
  const loadMoreReplies = () => setVisibleReplies(visibleReplies + 2);

  // Hàm để gửi trả lời (có thể gửi dữ liệu tới backend trong tương lai)
  const handleReplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (replyText.trim()) {
      const body = {
        blogId: comment.postId,
        body: replyText,
        parentId: parentId,
      };
      const res = await createComment(body);
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }

      // Thực hiện gửi dữ liệu trả lời (gửi lên backend nếu cần)
      setReplyText(""); // Reset input sau khi gửi
      setShowReplyInput(false); // Ẩn input sau khi gửi
    }
  };

  // Kiểm tra nếu comment.replies tồn tại trước khi sử dụng
  const replies = comment.replies || []; // Nếu không có replies, trả về mảng rỗng

  return (
    <div
      className={`rounded-lg p-4 shadow my-2 ${comment.parentId ? "ml-5" : ""}`}
    >
      <div className="flex items-center space-x-3">
        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center font-bold p-1">
          <Image
            alt="Ảnh người dùng"
            src={comment.user_img || "/images/user-default.png"}
            width={100}
            height={100}
            className="rounded-full object-cover w-full h-full"
          />
        </div>
        <span className="font-semibold">{comment.user_name}</span>
        <span className="text-xs ">
          {new Date(comment.updatedAt).toLocaleString("vi")}
        </span>
      </div>

      <p className="mt-2 ">{comment.body}</p>

      {replies.length > 0 && (
        <div className="mt-4 border-l-2 border-gray-400 pl-4 space-y-4">
          {replies.slice(0, visibleReplies).map((reply) => (
            <CommentComponent
              userId={userId}
              key={reply.id}
              comment={reply}
              parentId={comment.id}
            />
          ))}
        </div>
      )}

      <div className="mt-4 flex gap-4 items-center">
        {!showReplyInput ? (
          <button
            className="text-sm text-blue-400 hover:underline"
            onClick={() => setShowReplyInput(true)}
          >
            Trả lời
          </button>
        ) : (
          <form onSubmit={handleReplySubmit} className="space-y-2">
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows={3}
              placeholder="Nhập câu trả lời của bạn..."
            />
            <div className="flex justify-end space-x-2">
              <button
                type="submit"
                className="text-sm text-blue-400 hover:underline"
              >
                Gửi
              </button>
              <button
                type="button"
                className="text-sm text-gray-500 hover:underline"
                onClick={() => setShowReplyInput(false)}
              >
                Hủy
              </button>
            </div>
          </form>
        )}
        <div className="flex gap-3 items-center">
          <button
            onClick={async () => {
              const res = await likeAction({
                status: "like",
                commentId: comment.id,
              });
              if (res.success) {
                toast.success(res.message);
              } else {
                toast.error(res.message);
              }
            }}
            className={`flex gap-1 items-center  text-white rounded-md p-1 ${
              userId && comment.likeUserIds.includes(userId)
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-blue-300 hover:bg-blue-400"
            }`}
          >
            <ThumbsUp
              className={`size-4 ${
                userId && comment.likeUserIds.includes(userId)
                  ? "fill-current"
                  : ""
              }`}
            />
            <span className="text-xs">{comment.countLike}</span>
          </button>
          <button
            onClick={async () => {
              const res = await likeAction({
                status: "dislike",
                commentId: comment.id,
              });
              if (res.success) {
                toast.success(res.message);
              } else {
                toast.error(res.message);
              }
            }}
            className={`flex gap-1 items-center  text-white rounded-md p-1 ${
              userId && comment.dislikeUserIds.includes(userId)
                ? "bg-red-500 hover:bg-red-600"
                : "bg-red-300 hover:bg-red-400"
            }`}
          >
            <ThumbsDown
              className={`size-4 ${
                userId && comment.dislikeUserIds.includes(userId)
                  ? "fill-current"
                  : ""
              }`}
            />
            <span className="text-xs">{comment.countDislike}</span>
          </button>
        </div>
      </div>

      {replies.length > 2 && visibleReplies < replies.length && (
        <div className="mt-4 flex justify-center">
          <button
            className="text-sm text-blue-400 hover:underline"
            onClick={loadMoreReplies}
          >
            Xem thêm
          </button>
        </div>
      )}
    </div>
  );
}
