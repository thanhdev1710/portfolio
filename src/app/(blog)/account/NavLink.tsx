"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLink() {
  const pathname = usePathname();
  const navData = [
    {
      href: "/account",
      title: "Thông tin cá nhân",
    },
    {
      href: "/account/bookmark",
      title: "Bài viết đã lưu",
    },
    {
      href: "/account/history",
      title: "Các hoạt động",
    },
  ];

  return (
    <nav>
      <ul className="flex flex-col gap-4 text-xl font-bold">
        {navData.map((n) => (
          <li key={n.href}>
            <Link
              className={`${
                pathname === n.href ? "text-blue-500 font-extrabold" : ""
              }`}
              href={n.href}
            >
              {n.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
