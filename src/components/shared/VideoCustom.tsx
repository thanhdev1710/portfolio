"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function VideoCustom({ video }: { video: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true); // State để theo dõi trạng thái tải video

  // Sử dụng useInView để theo dõi khi phần tử nằm trong màn hình
  const isInView = useInView(videoRef, {
    once: false,
    margin: "-200px 0px -200px 0px",
  });

  // Bật hoặc tắt video dựa trên trạng thái isInView
  if (videoRef.current) {
    if (isInView) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Đặt lại thời gian về 0 khi video ra khỏi màn hình
    }
  }

  // Xử lý sự kiện khi video bắt đầu tải và khi video tải xong
  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  return (
    <motion.div
      className="relative aspect-video w-full h-auto overflow-hidden rounded-2xl"
      initial={{ opacity: 0.2, scale: 0.8 }} // Hiệu ứng xuất hiện
      animate={
        isInView ? { opacity: 1, scale: 1 } : { opacity: 0.2, scale: 0.8 }
      }
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Hiển thị spinner khi video đang tải */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-8 h-8 border-4 border-t-transparent border-white border-solid rounded-full animate-spin"></div>
        </div>
      )}

      <video
        ref={videoRef}
        className="w-full h-full object-fill rounded-2xl pointer-events-none"
        muted
        loop
        playsInline
        onLoadStart={handleLoadStart} // Khi video bắt đầu tải
        onLoadedData={handleLoadedData} // Khi video tải xong
      >
        <source src={video} type="video/mp4" />
      </video>
    </motion.div>
  );
}
