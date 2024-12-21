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
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import {
  forgot,
  login,
  resetPassword,
  signup,
  updatePassword,
} from "@/actions/authAction";
import { useRouter } from "next/navigation";
import { handlePromise } from "@/lib/utils";
import { useState } from "react";
import {
  ZodEmailSchema,
  ZodMessageVerifyPassword,
  ZodNameSchema,
  ZodPassWordConfirmSchema,
  ZodPasswordSchema,
  ZodVerifyPasswordSchema,
} from "@/schema_zod/auth";
import Link from "next/link";

// Các schema xác thực cho các form
const FormSchemaSignUp = z
  .object({
    name: ZodNameSchema,
    email: ZodEmailSchema,
    password: ZodPasswordSchema,
    passwordConfirm: ZodPassWordConfirmSchema,
  })
  .refine(ZodVerifyPasswordSchema, ZodMessageVerifyPassword);

const FormSchemaLogin = z.object({
  email: ZodEmailSchema,
  password: ZodPasswordSchema,
});

const FormSchemaForgot = z.object({
  email: ZodEmailSchema,
});

const FormSchemaReset = z
  .object({
    password: ZodPasswordSchema,
    passwordConfirm: ZodPassWordConfirmSchema,
  })
  .refine(ZodVerifyPasswordSchema, ZodMessageVerifyPassword);

const FormSchemaUpdate = z
  .object({
    password: ZodPasswordSchema,
    passwordConfirm: ZodPassWordConfirmSchema,
    passwordCurrent: ZodPassWordConfirmSchema,
  })
  .refine(ZodVerifyPasswordSchema, ZodMessageVerifyPassword);

// Hàm lấy schema và các trường của form tùy theo trạng thái
const useFormConfig = (
  formState: "login" | "signup" | "forgot" | "reset" | "update"
) => {
  const schemas = {
    login: FormSchemaLogin,
    signup: FormSchemaSignUp,
    forgot: FormSchemaForgot,
    reset: FormSchemaReset,
    update: FormSchemaUpdate,
  };

  const fields = {
    login: ["email", "password"],
    signup: ["name", "email", "password", "passwordConfirm"],
    forgot: ["email"],
    reset: ["password", "passwordConfirm"],
    update: ["passwordCurrent", "password", "passwordConfirm"],
  };

  return {
    schema: schemas[formState],
    fields: fields[formState],
  };
};

export default function FormLogin({
  token,
  formState,
}: {
  token?: string;
  formState: "login" | "signup" | "forgot" | "reset" | "update";
}) {
  const router = useRouter();
  const [isEye, setIsEye] = useState("");

  // Lấy các trường và schema cho form
  const { fields: ListField, schema: FormSchema } = useFormConfig(formState);

  // Hook useForm để quản lý form
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  // Xử lý submit form
  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      if (formState === "login") {
        await handlePromise(
          () => login(data),
          "Đăng nhập thành công!",
          "/blogs",
          router
        );
      } else if (formState === "signup") {
        await handlePromise(
          () => signup(data),
          "Đăng ký thành công!",
          "/blogs",
          router
        );
      } else if (formState === "forgot") {
        await handlePromise(() => forgot(data), "Vui lòng kiểm tra email!");
      } else if (formState === "reset" && token) {
        await handlePromise(
          () => resetPassword(data, token),
          "Cập nhật mật khẩu thành công!",
          "/login",
          router
        );
      } else if (formState === "update") {
        await handlePromise(
          () => updatePassword(data),
          "Cập nhật mật khẩu thành công",
          "/blogs",
          router
        );
      }
    } catch (error: any) {
      if (error.message === "Đã xảy ra lỗi! Vui lòng đăng nhập lại.") {
        router.replace("/login");
      }
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 relative px-8 py-6 bg-white text-black shadow-md rounded-xl w-full max-w-md mx-auto"
      >
        {/* Nút quay về trang blogs */}
        <div className="absolute top-4 right-4">
          <Link href="/blogs" aria-label="Quay về trang Blogs">
            <Button className="text-blue-600 hover:text-blue-800 border border-blue-600 hover:border-blue-800">
              Quay về
            </Button>
          </Link>
        </div>
        {/* Logo */}
        <div className="bg-blue-100 rounded-xl w-40 mx-auto flex items-center justify-center p-2">
          <Image
            alt="ThanhDev Logo"
            src="/images/icon.png"
            width={100}
            height={100}
            priority
            className="w-auto h-auto"
          />
        </div>
        {/* Tiêu đề form */}
        <h1 className="text-xl font-semibold text-center">
          {formState === "login"
            ? "Đăng nhập"
            : formState === "signup"
            ? "Tạo tài khoản"
            : formState === "forgot"
            ? "Quên mật khẩu"
            : "Đổi mật khẩu"}
        </h1>

        {/* Các trường form */}
        {ListField.map((fieldName: any) => (
          <FormField
            key={fieldName}
            control={form.control}
            name={fieldName}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {fieldName === "name"
                    ? "Tên tài khoản"
                    : fieldName === "passwordConfirm"
                    ? "Xác thực mật khẩu"
                    : fieldName === "password"
                    ? "Mật khẩu"
                    : fieldName === "email"
                    ? "Email"
                    : "Mật khẩu hiện tại"}
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={
                        fieldName.startsWith("password")
                          ? isEye !== fieldName
                            ? "password"
                            : "text"
                          : fieldName === "email"
                          ? "email"
                          : "text"
                      }
                      className={`border-gray-200 ${
                        fieldName.startsWith("password") && "pr-10"
                      }`}
                      placeholder={
                        fieldName.startsWith("password")
                          ? "***************"
                          : fieldName === "name"
                          ? "Thanh Dev"
                          : "example@gmail.com"
                      }
                      {...field}
                    />
                    {fieldName.startsWith("password") && (
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          setIsEye(isEye === fieldName ? "" : fieldName);
                        }}
                        className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-400 size-5 cursor-pointer"
                      >
                        {isEye === fieldName ? <Eye /> : <EyeOff />}
                      </div>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        {/* Liên kết quên mật khẩu cho login */}
        {formState === "login" && (
          <Link
            aria-label="Quên mật khẩu"
            className="text-blue-600 text-sm !mt-2 inline-block"
            href="/forgot"
          >
            Quên mật khẩu?
          </Link>
        )}

        {/* Nút submit */}
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

        {/* Liên kết đăng ký/đăng nhập */}
        <p className="text-sm flex items-center justify-center gap-1">
          <span>
            {formState === "login"
              ? "Không có tài khoản?"
              : "Bạn đã có tài khoản?"}
          </span>
          <Link
            aria-label={formState === "login" ? "Đăng ký" : "Đăng nhập"}
            className="text-blue-400 underline"
            href={`/${formState === "login" ? "signup" : "login"}`}
          >
            {formState === "login" ? "Đăng ký" : "Đăng nhập"}
          </Link>
        </p>
      </form>
    </Form>
  );
}
