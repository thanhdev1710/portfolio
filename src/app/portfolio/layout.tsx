import { ShootingStars } from "@/components/shared/shooting-stars";
import { StarsBackground } from "@/components/shared/stars-background";
import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="portfolio relative">
      <main className="relative z-10">{children}</main>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
