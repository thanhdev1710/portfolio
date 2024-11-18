import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ShootingStars } from "../shared/shooting-stars";
import { StarsBackground } from "../shared/stars-background";

export default function FlexResponsive() {
  return (
    <section className="xl:hidden h-full w-full flex flex-col gap-4">
      <article className="!h-[310px] w-full flex gap-4 max-[460px]:!h-full max-[460px]:flex-col">
        <div className="card-customer overflow-hidden aspect-[3/2]">
          <div className="flex relative z-10 items-center justify-center w-full h-full">
            <div className="flex flex-col items-center">
              <h3 className="text-lg tracking-widest font-light text-[var(--text-secondary)] mb-2 uppercase">
                Experience
              </h3>
              <strong className="font-bold text-5xl">
                1 <span className="text-3xl font-medium">Year</span>
              </strong>
            </div>
          </div>
          <ShootingStars />
          <StarsBackground />
        </div>
        <div className="card-customer overflow-hidden aspect-[3/2]">
          <div className="flex relative z-10 items-center justify-center w-full h-full">
            <div className="flex flex-col items-center">
              <h3 className="text-lg tracking-widest font-light text-[var(--text-secondary)] mb-2 uppercase">
                Projects
              </h3>
              <strong className="font-bold text-5xl flex items-center">
                10 <span className="text-3xl font-medium">+</span>
              </strong>
            </div>
          </div>
          <ShootingStars />
          <StarsBackground />
        </div>
      </article>
      <article className="!h-[240px] xl:hidden group">
        <div className="card-customer p-6">
          <Link
            aria-label="To projects"
            className="flex flex-col justify-between h-full w-full relative z-10"
            href="/projects"
          >
            <h3 className="text-lg tracking-widest font-light text-[var(--text-secondary)] mb-2 uppercase">
              Projects
            </h3>
            <h4 className="text-xl font-medium tracking-wide line-clamp-3">
              Explore my fullstack projects, from scalable social networks to
              data-driven applications.
            </h4>
            <button
              aria-label="Button to Projects"
              className="self-end border-2 relative border-[var(--border)] rounded-full size-12 flex justify-center items-center overflow-hidden"
            >
              <ArrowUpRight className="transition-all absolute ease-in-out duration-500 group-hover:translate-x-10 group-hover:-translate-y-10" />
              <ArrowUpRight className="transition-all absolute ease-in-out duration-500 -translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:-translate-y-0" />
            </button>
          </Link>
          <ShootingStars />
          <StarsBackground />
        </div>
      </article>
      <article className="!h-[310px] w-full relative rounded-2xl overflow-hidden">
        <Image
          src="/images/img3.webp"
          alt=""
          sizes="100vw"
          fill
          className="object-cover"
        />
      </article>
    </section>
  );
}
