/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handlePromise = async (
  callback: () => Promise<string | null>,
  successMessage: string,
  redirectUrl?: string,
  router?: AppRouterInstance
) => {
  try {
    await toast.promise(
      (async () => {
        const message = await callback(); // Gọi hàm API
        if (message) throw new Error(message); // Ném lỗi nếu có `message`
      })(),
      {
        loading: "Đang xử lý...",
        success: successMessage,
        error: (err) => {
          if (err.message === "Đã xảy ra lỗi! Vui lòng đăng nhập lại.") {
            toast.error("Đã xảy ra lỗi vui lòng đăng nhập lại");
            throw new Error(err.message);
          }

          return `${err.message}`;
        }, // Hiển thị lỗi
      }
    );

    if (redirectUrl && router) return router.replace(redirectUrl); // Điều hướng nếu cần
  } catch (error) {
    console.error(error);
    throw error;
  }
};
