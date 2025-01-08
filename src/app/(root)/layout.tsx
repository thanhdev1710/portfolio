import { ShootingStars } from "@/components/shared/shooting-stars";
import { StarsBackground } from "@/components/shared/stars-background";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | ThanhDev - Fullstack Web Development with PERN",
    default: "Welcome to website | ThanhDev",
  },
};

export default async function layout({ children }: { children: ReactNode }) {
  return (
    <div className="portfolio relative">
      <main className="relative z-10 min-h-svh">{children}</main>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
