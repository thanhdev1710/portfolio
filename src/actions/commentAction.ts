"use server";

import { API_URL, API_VERSION } from "@/constants/base";
import { revalidateTag } from "next/cache";
import { auth } from "./authAction";

export async function createComment({
  blogId,
  body,
  parentId,
}: {
  blogId: number;
  body: string;
  parentId?: number;
}) {
  try {
    const values = { postId: blogId, body, parentId };
    const { data } = await auth();
    if (!data?.token) {
      throw new Error("Bạn cần phải đăng nhập");
    }
    const res = await fetch(`${API_URL}${API_VERSION}comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      throw new Error(`Failed to comment blog. Status: ${res.status}`);
    }

    const { message } = await res.json();

    revalidateTag("comment");
    return { success: true, message };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, message: error.message || "Đã xảy ra lỗi" };
    } else {
      return { success: false, message: "Đã xảy ra lỗi." };
    }
  }
}
