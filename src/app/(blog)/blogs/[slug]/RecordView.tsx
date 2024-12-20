"use client";

import { API_URL, API_VERSION } from "@/constants/base";
import { useEffect } from "react";

export default function RecordView({ slug }: { slug: string }) {
  useEffect(() => {
    const recordView = async () => {
      const res = await fetch(`${API_URL}${API_VERSION}posts/${slug}`, {
        method: "PATCH",
        credentials: "include",
      });
      console.log(res.statusText);
    };

    recordView();
  }, [slug]); // Đảm bảo chạy lại khi slug thay đổi

  return null;
}
