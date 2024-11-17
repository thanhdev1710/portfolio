"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex gap-4 relative z-10">
      <button
        className="bg-[var(--border)] rounded-full w-32 h-16 p-1"
        onClick={() => {
          setTheme((prev) => (prev === "dark" ? "light" : "dark"));
        }}
      >
        <motion.div
          className="h-full w-auto aspect-square rounded-full bg-[var(--background-primary)] relative"
          animate={{
            x: theme === "dark" ? 0 : 64,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <motion.div
            animate={{
              scale: theme === "dark" ? 0 : 1,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="w-full h-full p-3 absolute bg-[var(--backround-primary)] top-0 left-0"
          >
            <Sun
              fill="currentColor"
              className="h-full w-full text-yellow-500"
            />
          </motion.div>
          <motion.div
            animate={{
              scale: theme === "dark" ? 1 : 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="w-full h-full p-3 absolute top-0 left-0"
          >
            <Moon
              fill="currentColor"
              className="h-full w-full text-yellow-700"
            />
          </motion.div>
        </motion.div>
      </button>
    </div>
  );
}
