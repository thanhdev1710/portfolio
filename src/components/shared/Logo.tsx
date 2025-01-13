import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link
      aria-label="Link to blogs"
      href="/blogs"
      className="h-full w-auto aspect-square flex items-center justify-center"
    >
      <Image
        width={100}
        height={100}
        alt="ThanhDev Logo"
        src="/images/icon.png"
      />
    </Link>
  );
}
