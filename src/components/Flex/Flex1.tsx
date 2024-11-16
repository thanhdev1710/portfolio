import Image from "next/image";

export function Flex1() {
  return (
    <div className="h-full w-full flex gap-4">
      <div className="card-customer !w-[50%] p-10 flex items-center">
        <div>
          <h1 className="text-4xl font-semibold mb-2">Hi, I&apos;m Thanh</h1>
          <h2 className="text-2xl text-[var(--text-secondary)]">
            Web Developer Enthusiast & Micro-Influencer on YouTube
          </h2>
        </div>
      </div>
      <div className="card-customer overflow-hidden !w-[25%] !h-auto aspect-square">
        <Image
          alt=""
          src="/images/img1.webp"
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="card-customer overflow-hidden !w-[25%] !h-auto aspect-square">
        <Image
          alt=""
          src="/images/img1.webp"
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
