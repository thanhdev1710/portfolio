import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ShootingStars } from "../shared/shooting-stars";
import { StarsBackground } from "../shared/stars-background";

export function Flex2() {
  return (
    <section className="h-full w-full flex max-lg:flex-col-reverse max-lg:!h-full max-xl:!h-[240px] items-stretch gap-4">
      <article className="card-customer overflow-hidden flex-shrink-0 max-lg:!h-[310px] !w-[25%] !h-auto max-xl:!h-full max-xl:!w-auto aspect-square max-lg:hidden">
        <Image
          alt=""
          src="/images/img3.webp"
          priority
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
        <ShootingStars />
        <StarsBackground />
      </article>
      <article className="card-customer h-full max-lg:!h-[240px] xl:!w-[40%] p-6 max-xl:w-full group">
        <Link
          className="flex flex-col justify-between h-full w-full relative z-10"
          href="/about"
        >
          <h3 className="text-lg tracking-widest font-light text-[var(--text-secondary)] mb-2 uppercase">
            About
          </h3>
          <h4 className="text-xl font-medium tracking-wide line-clamp-3">
            Passionate about fullstack development and building scalable apps.
          </h4>
          <button className="self-end border-2 relative border-[var(--border)] rounded-full size-12 flex justify-center items-center overflow-hidden">
            <ArrowUpRight className="transition-all absolute ease-in-out duration-500 group-hover:translate-x-10 group-hover:-translate-y-10" />
            <ArrowUpRight className="transition-all absolute ease-in-out duration-500 -translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:-translate-y-0" />
          </button>
        </Link>
        <ShootingStars />
        <StarsBackground />
      </article>
      <article className="card-customer !w-[35%] p-6 max-xl:hidden group">
        <Link
          className="flex flex-col justify-between relative z-10 h-full w-full"
          href="/projects"
        >
          <h3 className="text-lg tracking-widest font-light text-[var(--text-secondary)] mb-2 uppercase">
            Projects
          </h3>
          <h4 className="text-xl font-medium tracking-wide line-clamp-3">
            Explore my fullstack projects, from scalable social networks to
            data-driven applications.
          </h4>
          <button className="self-end border-2 relative border-[var(--border)] rounded-full size-12 flex justify-center items-center overflow-hidden">
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
