"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import { ShootingStars } from "@/components/shared/shooting-stars";
import { StarsBackground } from "@/components/shared/stars-background";
import toast from "react-hot-toast";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Hiển thị thông báo lỗi qua toast
    toast.error(`Error: ${error.message || "An unexpected error occurred"}`);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-black text-white fixed top-0 left-0 min-h-screen h-full w-full">
      <StarsBackground />
      <ShootingStars />

      <div className="z-20 text-center mb-6 px-4 sm:px-8">
        <h1 className="text-6xl sm:text-7xl font-extrabold text-gradient mb-8 lg:block hidden">
          💥💥💥 Error 💥💥💥
        </h1>
        <h1 className="text-6xl sm:text-7xl font-extrabold text-gradient mb-4 lg:hidden block">
          Error 💥
        </h1>
        <h2 className="text-5xl sm:text-6xl font-extrabold text-gradient mb-4">
          {error.message}
        </h2>
        <p className="text-lg sm:text-xl mb-6">
          If the problem persists, please contact support or try again later.
        </p>
        <button
          onClick={reset}
          className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-full shadow-lg transform hover:scale-105 transition duration-300"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
