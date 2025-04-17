"use client";

import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useRouter } from "next/navigation";

export default function CountDown() {
  const router = useRouter();
  return (
    <CountdownCircleTimer
      size={80}
      isPlaying
      duration={3}
      colors={["#3e8e41", "#f9b700", "#e94e77", "#ff4b4b"]}
      colorsTime={[3, 2, 1]}
    >
      {({ remainingTime }) => {
        if (remainingTime === 0) {
          setTimeout(() => router.replace("/portfolio"), 200);
        }
        return remainingTime === 0 ? (
          <span
            style={{ fontSize: "18px", fontWeight: "bold", color: "#ff4b4b" }}
          >
            Go!
          </span>
        ) : (
          <span
            style={{ fontSize: "23px", fontWeight: "bold", color: "#3e8e41" }}
          >
            {remainingTime}
          </span>
        );
      }}
    </CountdownCircleTimer>
  );
}
