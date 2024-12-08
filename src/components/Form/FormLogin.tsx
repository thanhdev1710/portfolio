/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { forgot, login, resetPassword, signup } from "@/actions/authAction";

const FormSchemaSignUp = z
  .object({
    name: z
      .string({ message: "Bắt buộc" })
      .min(10, { message: "Tên không được ít hơn 10 ký tự." })
      .max(100, { message: "Tên không được quá 100 ký tự." }),
    email: z
      .string({ message: "Bắt buộc" })
      .email({ message: "Email không đúng" })
      .min(1, { message: "Email là bắt buộc" }),
    password: z
      .string({ message: "Bắt buộc" })
      .min(16, { message: "Mật khẩu phải có ít nhất 16 ký tự." })
      .max(50, { message: "Mật khẩu không được quá 50 ký tự." })
      .refine(
        (password) =>
          /[A-Z]/.test(password) &&
          /[a-z]/.test(password) &&
          /[0-9]/.test(password) &&
          /[!@#$%^&*(),.?":{}|<>]/.test(password),
        {
          message:
            "Mật khẩu phải bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.",
        }
      ),
    passwordConfirm: z
      .string({ message: "Bắt buộc" })
      .min(1, { message: "Xác nhận mật khẩu là bắt buộc" }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Mật khẩu phải khớp.",
  });

const FormSchemaLogin = z.object({
  email: z
    .string({ message: "Bắt buộc" })
    .email({ message: "Email không đúng" }),
  password: z
    .string({ message: "Bắt buộc" })
    .min(16, { message: "Mật khẩu phải có ít nhất 16 ký tự." })
    .max(50, { message: "Mật khẩu không được quá 50 ký tự." })
    .refine(
      (password) =>
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[!@#$%^&*(),.?":{}|<>]/.test(password),
      {
        message:
          "Mật khẩu phải bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.",
      }
    ),
});

const FormSchemaForgot = z.object({
  email: z
    .string({ message: "Bắt buộc" })
    .email({ message: "Email không đúng" }),
});

const FormSchemaReset = z
  .object({
    password: z
      .string({ message: "Bắt buộc" })
      .min(16, { message: "Mật khẩu phải có ít nhất 16 ký tự." })
      .max(50, { message: "Mật khẩu không được quá 50 ký tự." })
      .refine(
        (password) =>
          /[A-Z]/.test(password) &&
          /[a-z]/.test(password) &&
          /[0-9]/.test(password) &&
          /[!@#$%^&*(),.?":{}|<>]/.test(password),
        {
          message:
            "Mật khẩu phải bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.",
        }
      ),
    passwordConfirm: z
      .string({ message: "Bắt buộc" })
      .min(1, { message: "Xác nhận mật khẩu là bắt buộc" }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Mật khẩu phải khớp.",
  });

export default function FormLogin({
  token,
  formState,
}: {
  token?: string;
  formState: "login" | "signup" | "forgot" | "reset";
}) {
  const FormSchema =
    formState === "login"
      ? FormSchemaLogin
      : formState === "signup"
      ? FormSchemaSignUp
      : formState === "forgot"
      ? FormSchemaForgot
      : FormSchemaReset;
  const listField =
    formState === "login"
      ? ["email", "password"]
      : formState === "signup"
      ? ["name", "email", "password", "passwordConfirm"]
      : formState === "forgot"
      ? ["email"]
      : ["password", "passwordConfirm"];
  const [isEye, setIsEye] = useState("");
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (formState === "login") {
      await toast.promise(
        login(data),
        {
          loading: "Đang đăng nhập...",
          success: "Đăng nhập thành công!",
          error: (err) => `${err.message}`,
        },
        {
          duration: 4000,
        }
      );
    } else if (formState === "signup") {
      await toast.promise(
        signup(data),
        {
          loading: "Đang đăng ký...",
          success: "Đăng ký thành công!",
          error: (err) => `${err.message}`,
        },
        {
          duration: 4000,
        }
      );
    } else if (formState === "forgot") {
      await toast.promise(
        forgot(data),
        {
          loading: "Đang gửi email...",
          success: "Vui lòng kiểm tra email!",
          error: (err) => `${err.message}`,
        },
        {
          duration: 4000,
        }
      );
    } else if (formState === "reset" && token) {
      await toast.promise(
        resetPassword(data, token),
        {
          loading: "Đang cập nhật mật khẩu...",
          success: "Cập nhật mật khẩu thành công!",
          error: (err) => `${err.message}`,
        },
        { duration: 4000 }
      );
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 px-8 py-6 bg-white text-black shadow-md rounded-xl w-full max-w-md mx-auto"
      >
        <div className="bg-blue-100 rounded-xl w-40 mx-auto flex items-center justify-center p-2">
          <Image
            alt="ThanhDev Logo"
            src="/images/icon.png"
            width={100}
            height={100}
          />
        </div>
        <h1 className="text-xl font-semibold text-center">
          {formState === "login"
            ? "Đăng nhập"
            : formState === "signup"
            ? "Tạo tài khoản"
            : formState === "forgot"
            ? "Quên mật khẩu"
            : "Đổi mật khẩu"}
        </h1>
        {listField.map((s: any) => (
          <FormField
            key={s}
            control={form.control}
            name={s}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {s === "name"
                    ? "Tên tài khoản"
                    : s === "passwordConfirm"
                    ? "Xác thực mật khẩu"
                    : s === "password"
                    ? "Mật khẩu"
                    : "Email"}
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={
                        s.startsWith("password")
                          ? isEye !== s
                            ? "password"
                            : "text"
                          : s === "email"
                          ? "email"
                          : "text"
                      }
                      className={`border-gray-200 ${
                        s.startsWith("password") && "pr-10"
                      }`}
                      placeholder={
                        s.startsWith("password")
                          ? "***************"
                          : s === "name"
                          ? "Thanh Dev"
                          : "example@gmail.com"
                      }
                      {...field}
                    />{" "}
                    {s.startsWith("password") &&
                      (isEye !== s ? (
                        <EyeOff
                          onClick={(e) => {
                            e.preventDefault();
                            setIsEye(s);
                          }}
                          className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-400 size-5 cursor-pointer"
                        />
                      ) : (
                        <Eye
                          onClick={(e) => {
                            e.preventDefault();
                            setIsEye("");
                          }}
                          className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-400 size-5 cursor-pointer"
                        />
                      ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        {formState === "login" && (
          <a
            className="text-blue-600 text-sm !mt-2 inline-block"
            href="/forgot"
          >
            Quên mật khẩu?
          </a>
        )}
        <Button
          type="submit"
          className="w-full bg-blue-600 text-white hover:bg-blue-700"
        >
          {formState === "login"
            ? "Đăng nhập"
            : formState === "signup"
            ? "Đăng ký"
            : "Gửi"}
        </Button>
        <p className="text-sm flex items-center justify-center gap-1">
          <span>
            {formState === "login"
              ? "Không có tài khoản?"
              : "Bạn đã có tài khoản?"}
          </span>
          <a
            className="text-blue-400 underline"
            href={`/${formState === "login" ? "signup" : "login"}`}
          >
            {formState === "login" ? "Đăng ký" : "Đăng nhập"}
          </a>
        </p>
      </form>
    </Form>
  );
}
