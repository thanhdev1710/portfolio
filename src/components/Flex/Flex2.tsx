import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ShootingStars } from "../shared/shooting-stars";
import { StarsBackground } from "../shared/stars-background";

export function Flex2() {
  return (
    <section className="h-full w-full flex max-lg:flex-col-reverse max-lg:!h-full max-xl:!h-[240px] items-stretch gap-4">
      <article className="card-customer flex items-center justify-center overflow-hidden flex-shrink-0 max-lg:!h-[310px] !w-[25%] !h-auto max-xl:!h-full max-xl:!w-auto aspect-square max-lg:hidden">
        <Image
          alt="ThanhDev - Backend Developer"
          src="/images/img3.webp"
          priority
          width={500}
          height={500}
          quality={100}
          className="object-cover w-full h-full"
        />
      </article>
      <article className="card-customer h-full max-lg:!h-[240px] xl:!w-[40%] p-6 max-xl:w-full group">
        <Link
          aria-label="Tới trang Giới thiệu"
          className="flex flex-col justify-between h-full w-full relative z-10"
          href="/about"
        >
          <h3 className="text-lg tracking-widest font-light text-[var(--text-secondary)] mb-2 uppercase">
            Giới thiệu
          </h3>
          <h4 className="text-xl font-medium tracking-wide line-clamp-3">
            Mình đam mê phát triển fullstack và xây dựng các ứng dụng có khả
            năng mở rộng cao.
          </h4>
          <button
            aria-label="Nút tới Giới thiệu"
            className="self-end border-2 relative border-[var(--border)] rounded-full size-12 flex justify-center items-center overflow-hidden"
          >
            <ArrowUpRight className="transition-all absolute ease-in-out duration-500 group-hover:translate-x-10 group-hover:-translate-y-10" />
            <ArrowUpRight className="transition-all absolute ease-in-out duration-500 -translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:-translate-y-0" />
          </button>
        </Link>
        <ShootingStars />
        <StarsBackground />
      </article>
      <article className="card-customer !w-[35%] p-6 max-xl:hidden group">
        <Link
          aria-label="Tới trang Dự án"
          className="flex flex-col justify-between relative z-10 h-full w-full"
          href="/projects"
        >
          <h3 className="text-lg tracking-widest font-light text-[var(--text-secondary)] mb-2 uppercase">
            Dự án
          </h3>
          <h4 className="text-xl font-medium tracking-wide line-clamp-3">
            Khám phá các dự án fullstack mình đã xây dựng — bao gồm nền tảng
            mạng xã hội và nhiều ứng dụng web hiện đại khác.
          </h4>
          <button
            aria-label="Nút tới Dự án"
            className="self-end border-2 relative border-[var(--border)] rounded-full size-12 flex justify-center items-center overflow-hidden"
          >
            <ArrowUpRight className="transition-all absolute ease-in-out duration-500 group-hover:translate-x-10 group-hover:-translate-y-10" />
            <ArrowUpRight className="transition-all absolute ease-in-out duration-500 -translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:-translate-y-0" />
          </button>
        </Link>
        <ShootingStars />
        <StarsBackground />
      </article>
    </section>
  );
}
