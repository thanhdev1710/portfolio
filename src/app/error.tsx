"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        Oops! Đã xảy ra lỗi.
      </h1>
      <p className="text-lg mb-2">Xin lỗi bạn, có vẻ như đã xảy ra một lỗi.</p>
      <p className="mb-8 text-red-700 text-sm">( {error.message} )</p>
      <Button
        className="mb-4 !bg-red-700 text-white font-bold"
        variant="secondary"
        onClick={() => reset()}
      >
        Thử lại
      </Button>
      <Link
        className="px-4 py-2 border-2 rounded-lg font-bold text-red-700 border-red-700 transition-all hover:bg-red-700 hover:text-white"
        href="/"
      >
        Quay lại trang chủ
      </Link>
    </main>
  );
}
