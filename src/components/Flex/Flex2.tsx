import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function Flex2() {
  return (
    <div className="h-full w-full flex gap-4">
      <div className="card-customer overflow-hidden !w-[25%] !h-auto aspect-square">
        <Image
          alt=""
          src="/images/img1.webp"
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="card-customer !w-[40%] p-6 flex flex-col justify-between">
        <h3 className="text-lg tracking-widest font-light text-[var(--text-secondary)] mb-2 uppercase">
          About
        </h3>
        <h4 className="text-xl font-medium tracking-wide">
          Passionate about fullstack development and building scalable apps.
        </h4>
        <button className="self-end border-2 border-[var(--border)] rounded-full size-12 flex justify-center items-center">
          <ArrowUpRight />
        </button>
      </div>
      <div className="card-customer !w-[35%] p-6 flex flex-col justify-between">
        <h3 className="text-lg tracking-widest font-light text-[var(--text-secondary)] mb-2 uppercase">
          Blog me
        </h3>
        <h4 className="text-xl font-medium tracking-wide">
          Sharing knowledge and experiences on building modern, scalable web
          applications.
        </h4>
        <button className="self-end border-2 border-[var(--border)] rounded-full size-12 flex justify-center items-center">
          <ArrowUpRight />
        </button>
      </div>
    </div>
  );
}
