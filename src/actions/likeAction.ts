"use server";
import { API_URL, API_VERSION } from "@/constants/base";
import { revalidateTag } from "next/cache";
import { auth } from "./authAction";

export async function likeAction({
  blogId,
  status,
}: {
  blogId: number;
  status: string;
}) {
  try {
    const { data } = await auth();
    if (!data?.jwt) {
      throw new Error("Bạn cần phải đăng nhập.");
    }

    const res = await fetch(`${API_URL}${API_VERSION}like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.jwt}`,
      },
      body: JSON.stringify({
        postId: blogId,
        status,
      }),
    });

    if (!res.ok) {
      throw new Error(`Failed to like post. Status: ${res.status}`);
    }

    const { message } = await res.json();

    revalidateTag("like");
    return { success: true, message };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, message: error.message || "Đã xảy ra lỗi." };
    } else {
      return { success: false, message: "Đã xảy ra lỗi." };
    }
  }
}
