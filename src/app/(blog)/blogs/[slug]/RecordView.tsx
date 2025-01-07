"use client";

import { API_URL, API_VERSION } from "@/constants/base";
import { useEffect } from "react";

export default function RecordView({ slug }: { slug: string }) {
  useEffect(() => {
    const recordView = async () => {
      await fetch(`${API_URL}${API_VERSION}posts/${slug}`, {
        method: "PATCH",
        credentials: "include",
      });
    };
    recordView();
  }, []);

  return null;
}
