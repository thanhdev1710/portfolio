import { ShootingStars } from "../shared/shooting-stars";
import { StarsBackground } from "../shared/stars-background";

export function Flex1() {
  return (
    <section className="h-full w-full flex max-xl:h-[240px] gap-4">
      <article className="card-customer xl:!w-[50%] p-10 flex items-center">
        <div className="relative z-10">
          <h1 className="text-4xl font-semibold mb-6 leading-tight">
            Hi, I&apos;m ThanhDev
          </h1>
          <h2 className="text-2xl text-[var(--text-secondary)] line-clamp-2">
            Web Developer Enthusiast & Micro-Influencer on YouTube
          </h2>
        </div>
        <ShootingStars />
        <StarsBackground />
      </article>
      <article className="card-customer overflow-hidden !w-[25%] !h-full max-xl:hidden">
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex flex-col relative z-10 items-center">
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
      </article>
      <article className="card-customer overflow-hidden !w-[25%] !h-full max-xl:hidden">
        <div className="flex items-center justify-center relative z-10 w-full h-full">
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
      </article>
    </section>
  );
}
