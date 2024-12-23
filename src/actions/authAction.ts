/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { decode, JwtPayload } from "jsonwebtoken";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies } from "next/headers";

function setTokenCookie(token: string, cookieStore: ReadonlyRequestCookies) {
  // Lưu token vào cookie
  cookieStore.set("jwt", token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    secure: true,
    sameSite: "lax",
    path: "/",
  });
}

function pleaseLogin(error: any) {
  const { message } = error;

  if (
    [
      "User recently changed password! Please log in again",
      "The user belonging to this token does no longer exist.",
      "You are not logged in! Please log in to get access.",
    ].includes(message)
  ) {
    logout();
    return "Đã xảy ra lỗi! Vui lòng đăng nhập lại.";
  }
}

export async function login(formData: any) {
  console.log("run");

  try {
    const cookieStore = await cookies();
    const body = JSON.stringify(formData);
    console.log("run");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_API_VERSION}users/login`,
      {
        method: "POST",
        body,
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    if (!res.ok) {
      const error = await res.json();
      const message = String(error.message).toLowerCase().includes("password")
        ? "Mật khẩu không đúng"
        : String(error.message).toLowerCase().includes("email")
        ? "Tài khoản này không tồn tại"
        : "Đăng nhập thất bại. Vui lòng thử lại!";
      return { success: false, message };
    }
    console.log(res);

    const { token } = await res.json();
    setTokenCookie(token, cookieStore);
    return { success: true, message: "Đăng nhập thành công!" };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, message: error.message };
    } else {
      return { success: false, message: "Đã xảy ra lỗi" };
    }
  }
}

export async function signup(formData: any) {
  const cookieStore = await cookies();
  const body = JSON.stringify(formData);

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_API_VERSION}users/signup`,
      {
        method: "POST",
        body,
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    if (!res.ok) {
      const error = await res.json();
      const message = String(error.message).includes("users_email_key")
        ? "Tài khoản này đã tồn tại"
        : "Đăng ký thất bại. Vui lòng thử lại!";
      return { success: false, message };
    }

    const { token } = await res.json();
    setTokenCookie(token, cookieStore);
    return { success: true, message: "Đăng ký thành công!" };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, message: error.message };
    } else {
      return { success: false, message: "Đã xảy ra lỗi" };
    }
  }
}

export async function auth() {
  const cookieStore = await cookies();
  const jwt = cookieStore.get("jwt");
  const token = jwt?.value;

  if (!token) return { success: false, message: "Người dùng chưa đăng nhập." };

  try {
    const user = decode(jwt?.value) as JwtPayload;

    if (user.exp && user.id) {
      const now = Number((Date.now() / 1000).toFixed(0));
      if (now < user.exp) {
        return { success: true, data: { id: user.id, jwt: token } };
      }
    }

    return { success: false, message: "Phiên đăng nhập đã hết hạn." };
  } catch {
    return { success: false, message: "Token không hợp lệ." };
  }
}

export async function logout() {
  try {
    (await cookies()).delete("jwt");
  } catch (error) {
    throw error;
  }
}

export async function forgot(formData: any) {
  const body = JSON.stringify(formData);

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_API_VERSION}users/forgotPassword`,
      {
        method: "POST",
        body,
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    if (!res.ok) {
      const error = await res.json();
      const message =
        error.message === "There is no user with this email address"
          ? "Tài khoản này không tồn tại"
          : "Đã xảy ra lỗi. Vui lòng thử lại!";
      return { success: false, message };
    }

    return { success: true, message: "Email khôi phục đã được gửi!" };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, message: error.message };
    } else {
      return { success: false, message: "Đã xảy ra lỗi" };
    }
  }
}

export async function resetPassword(formData: any, token: string) {
  const body = JSON.stringify(formData);

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_API_VERSION}users/resetPassword/${token}`,
      {
        method: "PATCH",
        body,
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    if (!res.ok) {
      const error = await res.json();
      const message =
        error.message === "Token is invalid or has expired"
          ? "Mã không hợp lệ hoặc đã hết hạn!"
          : "Đã xảy ra lỗi. Vui lòng thử lại!";
      return { success: false, message };
    }

    return { success: true, message: "Mật khẩu đã được đặt lại thành công!" };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, message: error.message };
    } else {
      return { success: false, message: "Đã xảy ra lỗi" };
    }
  }
}

export async function updatePassword(formData: any) {
  const cookieStore = await cookies();
  const body = JSON.stringify(formData);

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_API_VERSION}users/updatePassword`,
      {
        method: "PATCH",
        body,
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${cookieStore.get("jwt")?.value}`,
        },
      }
    );

    if (!res.ok) {
      const error = await res.json();

      let message =
        error.message === "Your current password is wrong"
          ? "Mật khẩu hiện tại của bạn không đúng"
          : "Đã xảy ra lỗi. Vui lòng thử lại!";
      message = pleaseLogin(error) || message;
      return { success: false, message };
    }

    const { token } = await res.json();
    setTokenCookie(token, cookieStore);
    return { success: true, message: "Mật khẩu đã được cập nhật!" };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, message: error.message };
    } else {
      return { success: false, message: "Đã xảy ra lỗi" };
    }
  }
}
