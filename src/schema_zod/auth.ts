import { z } from "zod";

export const ZodPasswordSchema = z
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
  );

export const ZodNameSchema = z
  .string({ message: "Bắt buộc" })
  .min(10, { message: "Tên không được ít hơn 10 ký tự." })
  .max(100, { message: "Tên không được quá 100 ký tự." });

export const ZodEmailSchema = z
  .string({ message: "Bắt buộc" })
  .email({ message: "Email không đúng" })
  .min(1, { message: "Email là bắt buộc" });

export const ZodPassWordConfirmSchema = z
  .string({ message: "Bắt buộc" })
  .min(1, { message: "Xác nhận mật khẩu là bắt buộc" });

export const ZodVerifyPasswordSchema = (data: {
  password: string;
  passwordConfirm: string;
}) => data.password === data.passwordConfirm;

export const ZodMessageVerifyPassword = {
  path: ["passwordConfirm"],
  message: "Mật khẩu phải khớp.",
};
