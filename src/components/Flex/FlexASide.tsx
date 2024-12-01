import { ArrowUpRight, Github, Instagram, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import Contact from "./Contact";
import { ShootingStars } from "../shared/shooting-stars";
import { StarsBackground } from "../shared/stars-background";

export default function FlexASide() {
  return (
    <section className="h-full w-full xl:w-[24%] flex flex-col gap-4">
      <article className="flex flex-col gap-4 max-sm:flex-col max-sm:h-full max-xl:flex-row max-xl:h-[100px] max-lg:h-[80px]">
        <h3 className="card-customer relative text-xl tracking-widest font-bold uppercase max-sm:h-[90px] xl:py-8 xl:px-6 max-xl:flex max-xl:items-center max-xl:justify-center text-center">
          <span className="relative z-10">Fullstack developer</span>
          <ShootingStars />
          <StarsBackground />
        </h3>
        <div className="flex gap-4 w-full">
          <Link
            aria-label="To instagram"
            href="https://www.instagram.com/cthanh_yi"
            target="_blank"
            className="rounded-2xl card-customer !h-auto aspect-square flex items-center justify-center hover:bg-pink-400 hover:text-white"
          >
            <Instagram className="size-[68%] " />
            <ShootingStars />
            <StarsBackground />
          </Link>
          <Link
            aria-label="To mail"
            href="mailto:chithanh171004@gmail.com"
            target="_blank"
            className="rounded-2xl card-customer !h-auto aspect-square flex items-center justify-center hover:bg-red-400 hover:text-white"
          >
            <Mail className="size-[68%] " />
            <ShootingStars />
            <StarsBackground />
          </Link>
          <Link
            aria-label="To githup"
            href="https://github.com/thanhdev1710"
            target="_blank"
            className="rounded-2xl card-customer !h-auto aspect-square flex items-center justify-center hover:bg-blue-400 hover:text-white"
          >
            <Github className="size-[68%] " />
            <ShootingStars />
            <StarsBackground />
          </Link>
        </div>
      </article>
      <article className="card-customer p-6 relative group">
        <Link
          aria-label="To blog"
          className="flex flex-col justify-between h-full w-full relative z-10"
          href="/blog"
        >
          <h3 className="text-lg tracking-widest font-light text-[var(--text-secondary)] mb-2 uppercase">
            Blog Me
          </h3>
          <h4 className="text-xl font-medium tracking-wide line-clamp-3">
            Sharing knowledge and experiences on building modern, scalable web
            applications.
          </h4>
          <button
            aria-label="Button to Blog Me"
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
