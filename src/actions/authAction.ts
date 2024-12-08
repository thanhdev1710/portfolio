/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { decode, JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: any) {
  const cookieStore = await cookies();
  const body = JSON.stringify(formData);

  try {
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
      throw new Error(message);
    }

    const { token } = await res.json();

    // Lưu token vào cookie
    cookieStore.set("auth_token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
      secure: true,
      sameSite: "lax",
      path: "/",
    });

    return redirect("/blog");
  } catch (error) {
    console.error(error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Đã xảy ra lỗi. Vui lòng thử lại!"
    );
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
      throw new Error(message);
    }

    const { token } = await res.json();

    // Lưu token vào cookie
    cookieStore.set("auth_token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
      secure: true,
      sameSite: "lax",
      path: "/",
    });

    return redirect("/blog");
  } catch (error) {
    console.error(error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Đã xảy ra lỗi. Vui lòng thử lại!"
    );
  }
}

export async function auth() {
  const cookieStore = await cookies();
  const auth_token = cookieStore.get("auth_token");
  const token = auth_token?.value;

  if (!token) return null;

  const user = decode(token) as JwtPayload;
  if (user.exp && user.id) {
    const now = Number((Date.now() / 1000).toFixed(0));
    if (now < user.exp) {
      return user.id;
    }
  }

  return null;
}

export async function logout() {
  (await cookies()).delete("auth_token");
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
      throw new Error(message);
    }
  } catch (error) {
    console.error(error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Đã xảy ra lỗi. Vui lòng thử lại!"
    );
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
      throw new Error(message);
    }

    return redirect("/login");
  } catch (error) {
    console.error(error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Đã xảy ra lỗi. Vui lòng thử lại!"
    );
  }
}
