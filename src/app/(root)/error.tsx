"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import { ShootingStars } from "@/components/shared/shooting-stars";
import { StarsBackground } from "@/components/shared/stars-background";
import toast from "react-hot-toast";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Gửi thông báo lỗi
    toast.error("Lỗi kết nối đến máy chủ. Vui lòng thử lại sau.");
  }, [error]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      <StarsBackground />
      <ShootingStars />

      <div className="z-20 text-center mb-6 px-4 sm:px-8">
        <h1 className="text-6xl sm:text-7xl font-extrabold text-gradient mb-8 lg:block hidden">
          💥💥💥 Lỗi 💥💥💥
        </h1>
        <h1 className="text-6xl sm:text-7xl font-extrabold text-gradient mb-4 lg:hidden block">
          Lỗi 💥
        </h1>
        <h2 className="text-5xl sm:text-6xl font-extrabold text-gradient mb-4">
          Đã xảy ra sự cố!
        </h2>
        <p className="text-lg sm:text-xl mb-6">
          Rất tiếc, đã có lỗi xảy ra trong quá trình xử lý yêu cầu của bạn. Vui
          lòng thử lại hoặc liên hệ bộ phận hỗ trợ nếu vấn đề vẫn tiếp diễn.
        </p>
        <button
          onClick={() => {
            location.reload();
          }}
          className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-full shadow-lg transform hover:scale-105 transition duration-300"
        >
          Thử lại
        </button>
      </div>
    </div>
  );
}
