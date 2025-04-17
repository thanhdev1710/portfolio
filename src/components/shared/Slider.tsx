import Image from "next/image";
import styles from "./Slider.module.css";

const images1 = [
  { src: "/images/icon-skill/golang.avif", alt: "Golang Logo" },
  { src: "/images/icon-skill/gin.avif", alt: "Gin Logo" },
  { src: "/images/icon-skill/express-js.avif", alt: "Expressjs Logo" },
  { src: "/images/icon-skill/docker.avif", alt: "Docker Logo" },
  { src: "/images/icon-skill/nextjs.avif", alt: "Next.js Logo" },
  { src: "/images/icon-skill/postgresql.avif", alt: "PostgreSQL Logo" },
  { src: "/images/icon-skill/redis.avif", alt: "Redis Logo" },
];

export function Slider() {
  return (
    <div className="overflow-hidden w-full h-16">
      <div className="flex md:w-[200%] w-[560px] h-full">
        <div className={`flex shrink-0 w-full h-full ${styles.slider}`}>
          {images1.map(({ src, alt }) => (
            <div
              key={src}
              className="w-full h-auto aspect-square overflow-hidden dark:bg-zinc-600/60 bg-zinc-200 p-2 rounded-2xl mx-2"
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
        <div className={`flex shrink-0 w-full h-full ${styles.slider}`}>
          {images1.map(({ src, alt }) => (
            <div
              key={src}
              className="w-full h-auto aspect-square overflow-hidden dark:bg-zinc-600/60 bg-zinc-200 p-2 rounded-2xl mx-2"
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
