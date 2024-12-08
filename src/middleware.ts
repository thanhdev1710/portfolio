import { NextRequest, NextResponse } from "next/server";
import { auth } from "./actions/authAction";

export async function middleware(req: NextRequest) {
  // Lấy thông tin session từ request (có thể là từ cookie hoặc JWT token)
  const session = await auth();

  // Nếu không có session, redirect đến trang login
  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Nếu có session, tiếp tục với request
  return NextResponse.next();
}

// Định nghĩa route cần áp dụng middleware
export const config = {
  matcher: ["/dashboard", "/profile", "/settings"], // Các route cần kiểm tra đăng nhập
};
