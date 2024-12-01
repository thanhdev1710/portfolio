import Image from "next/image";
import styles from "./Slider.module.css";

const images1 = [
  { src: "/images/docker.webp", alt: "Docker Logo" },
  { src: "/images/nextjs.webp", alt: "Next.js Logo" },
  { src: "/images/postgresql.webp", alt: "PostgreSQL Logo" },
  { src: "/images/redis.webp", alt: "Redis Logo" },
  { src: "/images/nodejs.webp", alt: "Node.js Logo" },
];

export function Slider() {
  return (
    <div className="overflow-hidden w-full h-16">
      <div className="flex w-[200%] h-full">
        <div className={`flex w-full h-full ${styles.slider}`}>
          {images1.map(({ src, alt }) => (
            <div
              key={src}
              className="h-auto w-full aspect-square overflow-hidden dark:bg-zinc-600/60 bg-zinc-200 p-2 rounded-2xl mx-2"
            >
              <Image
                width={100}
                height={100}
                className="w-full h-full object-contain"
                alt={alt} // Sử dụng alt mô tả logo công nghệ
                src={src}
              />
            </div>
          ))}
        </div>
        <div className={`flex w-full ${styles.slider}`}>
          {images1.map(({ src, alt }) => (
            <div
              key={src}
              className="h-auto w-full aspect-square overflow-hidden dark:bg-zinc-600/60 bg-zinc-200 p-2 rounded-2xl mx-2"
            >
              <Image
                width={100}
                height={100}
                className="w-full h-full object-contain"
                alt={alt} // Sử dụng alt mô tả logo công nghệ
                src={src}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
