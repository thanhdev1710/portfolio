import { ArrowUpRight, FileUser, Github, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import Contact from "./Contact";
import { ShootingStars } from "../shared/shooting-stars";
import { StarsBackground } from "../shared/stars-background";

export default function FlexASide() {
  return (
    <section className="xl:min-h-svh w-full xl:w-[24%] flex flex-col gap-4">
      <article className="flex flex-col gap-4 max-sm:flex-col max-sm:h-full max-xl:flex-row max-xl:h-[100px] max-lg:h-[80px]">
        <h3 className="card-customer relative text-xl tracking-widest font-bold uppercase max-sm:h-[90px] xl:py-8 xl:px-6 max-xl:flex max-xl:items-center max-xl:justify-center text-center">
          <span className="relative z-10">Lập trình viên Fullstack</span>
          <ShootingStars />
          <StarsBackground />
        </h3>
        <div className="flex gap-4 w-full">
          <Link
            aria-label="Đến CV của tôi"
            href="/cv"
            target="_blank"
            className="rounded-2xl card-customer !h-auto aspect-square flex items-center justify-center hover:bg-pink-400 hover:text-white"
          >
            <FileUser className="size-[68%]" />
            <ShootingStars />
            <StarsBackground />
          </Link>
          <Link
            aria-label="Gửi email"
            href="mailto:chithanh171004@gmail.com"
            target="_blank"
            className="rounded-2xl card-customer !h-auto aspect-square flex items-center justify-center hover:bg-red-400 hover:text-white"
          >
            <Mail className="size-[68%]" />
            <ShootingStars />
            <StarsBackground />
          </Link>
          <Link
            aria-label="Đến Github"
            href="https://github.com/thanhdev1710"
            target="_blank"
            className="rounded-2xl card-customer !h-auto aspect-square flex items-center justify-center hover:bg-blue-400 hover:text-white"
          >
            <Github className="size-[68%]" />
            <ShootingStars />
            <StarsBackground />
          </Link>
        </div>
      </article>

      <article className="card-customer p-6 relative group">
        <Link
          aria-label="Đến trang blog"
          className="flex flex-col justify-between h-full w-full relative z-10"
          href="/blogs"
        >
          <h3 className="text-lg tracking-widest font-light text-[var(--text-secondary)] mb-2 uppercase">
            Blog cá nhân
          </h3>
          <h4 className="text-xl font-medium tracking-wide line-clamp-3">
            Chia sẻ kiến thức, kinh nghiệm phát triển web hiện đại và có khả
            năng mở rộng.
          </h4>
          <button
            aria-label="Nút đến Blog"
            className="self-end border-2 relative border-[var(--border)] rounded-full size-12 flex justify-center items-center overflow-hidden"
          >
            <ArrowUpRight className="transition-all absolute ease-in-out duration-500 group-hover:translate-x-10 group-hover:-translate-y-10" />
            <ArrowUpRight className="transition-all absolute ease-in-out duration-500 -translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:-translate-y-0" />
          </button>
        </Link>
        <ShootingStars />
        <StarsBackground />
      </article>

      <Contact />
    </section>
  );
}
