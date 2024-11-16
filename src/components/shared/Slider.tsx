import Image from "next/image";
import styles from "./Slider.module.css";

const images1 = [
  "/images/reactjs.webp",
  "/images/nextjs.webp",
  "/images/nodejs.webp",
  "/images/postgresql.webp",
  "/images/redis.webp",
  "/images/kafka.webp",
  "/images/elasticsearch.webp",
];

export function Slider() {
  return (
    <div className="overflow-hidden w-full h-16">
      <div className="flex w-[200%] h-full">
        <div className={`flex w-full h-full ${styles.slider}`}>
          {images1.map((img) => (
            <div
              key={img}
              className="h-auto w-full aspect-square overflow-hidden dark:bg-zinc-600/60 bg-zinc-200 md:p-2 p-0.5 rounded-2xl md:mx-2 mx-0.5"
            >
              <Image
                width={100}
                height={100}
                className="w-full h-full object-contain"
                alt=""
                src={img}
              />
            </div>
          ))}
        </div>
        <div className={`flex w-full ${styles.slider}`}>
          {images1.map((img) => (
            <div
              key={img}
              className="h-auto w-full aspect-square overflow-hidden dark:bg-zinc-600/60 bg-zinc-200 md:p-2 p-0.5 rounded-2xl md:mx-2 mx-0.5"
            >
              <Image
                width={100}
                height={100}
                className="w-full h-full object-contain"
                alt=""
                src={img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
