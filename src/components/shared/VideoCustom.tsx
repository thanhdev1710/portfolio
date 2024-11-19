"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function VideoCustom({ video }: { video: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false); // State để theo dõi trạng thái phát video

  const handleMouseEnter = () => {
    if (videoRef.current && !isPlaying) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && !isPlaying) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <motion.div
      className="relative aspect-video w-full h-auto overflow-hidden rounded-2xl shadow-lg group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick} // Thêm sự kiện click để phát trên điện thoại
      initial={{ scale: 0.95, opacity: 0.8 }}
      whileHover={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Overlay toàn màn hình */}
      <motion.div
        className="absolute inset-0 bg-black z-10 flex items-center justify-center"
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Text mời hover */}
        {!isPlaying && (
          <motion.div
            className="text-[clamp(14px,4.1vw,40px)] font-bold text-white tracking-widest"
            initial={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            HOVER TO PLAY
          </motion.div>
        )}
      </motion.div>

      {/* Video element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-2xl"
        muted
        loop
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Viền phát sáng */}
      <motion.div
        className="absolute inset-0 z-20 rounded-2xl pointer-events-none"
        initial={{ boxShadow: "0 0 0px 0 rgba(0, 255, 255, 0.6)" }}
        whileHover={{
          boxShadow: "0 0 30px 10px rgba(0, 255, 255, 0.8)",
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
