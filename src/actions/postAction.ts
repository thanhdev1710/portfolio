"use server";
import { API_URL, API_VERSION } from "@/constants/base";
import { revalidateTag } from "next/cache";
import { auth } from "./authAction";

export async function likeAction({
  blogId,
  status,
  commentId,
}: {
  blogId?: number;
  status: string;
  commentId?: number;
}) {
  try {
    const { data } = await auth();
    if (!data?.jwt) {
      throw new Error("Bạn cần phải đăng nhập.");
    }

    let body;

    if (commentId) {
      body = {
        commentId,
        status,
      };
    }

    if (blogId) {
      body = {
        postId: blogId,
        status,
      };
    }

    const res = await fetch(`${API_URL}${API_VERSION}like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.jwt}`,
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error(`Failed to like blog. Status: ${res.status}`);
    }

    const { message } = await res.json();

    if (commentId) {
      revalidateTag("comment");
    }
    if (blogId) {
      revalidateTag("blog");
    }
    return { success: true, message };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, message: error.message || "Đã xảy ra lỗi." };
    } else {
      return { success: false, message: "Đã xảy ra lỗi." };
    }
  }
}

export async function bookmarkAction({ blogId }: { blogId: number }) {
  try {
    const { data } = await auth();
    if (!data?.jwt) {
      throw new Error("Bạn cần phải đăng nhập");
    }

    const res = await fetch(`${API_URL}${API_VERSION}bookmark`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.jwt}`,
      },
      body: JSON.stringify({
        postId: blogId,
      }),
    });

    if (!res.ok) {
      throw new Error(`Failed to bookmark blog. Status: ${res.status}`);
    }

    const { message } = await res.json();

    revalidateTag("blog");
    return { success: true, message };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, message: error.message || "Đã xảy ra lỗi" };
    } else {
      return { success: false, message: "Đã xảy ra lỗi." };
    }
  }
}
