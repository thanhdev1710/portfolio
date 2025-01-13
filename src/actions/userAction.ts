"use server";
import { API_URL, API_VERSION } from "@/constants/base";
import { auth } from "./authAction";
import { revalidateTag } from "next/cache";

export const updateMeName = async ({ name }: { name: string }) => {
  const url = `${API_URL}${API_VERSION}users/updateMe`;
  const session = await auth();
  // Tạo FormData
  const formData = new FormData();
  formData.append("name", name);

  try {
    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${session.data?.token}`,
      },
      body: formData,
    });

    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }

    revalidateTag("user");
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

export const updateMeImage = async ({ image }: { image: File }) => {
  const url = `${API_URL}${API_VERSION}users/updateMe`;
  const session = await auth();
  const formData = new FormData();
  formData.append("image", image);

  try {
    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${session.data?.token}`,
      },
      body: formData,
    });

    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }

    revalidateTag("user");
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};
