import { auth, logout } from "@/actions/authAction";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { ReactNode, Suspense } from "react";
import Info from "./Info";
import ImageUpload from "./ImageUpload";
import NavLink from "./NavLink";

export default async function layout({ children }: { children: ReactNode }) {
  const session = await auth();
  const user = session.data?.user;
  if (!user) {
    redirect("/login");
  }
  const info = [
    {
      title: "Tên",
      value: user.name,
    },
    {
      title: "Email",
      value: user.email,
    },
    {
      title: "Quyền",
      value: user.role.toUpperCase(),
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center border-b py-4 mb-8">
        <h1 className="text-2xl font-bold">Tài khoản</h1>
        <form action={logout}>
          <Button>Đăng xuất</Button>
        </form>
      </div>
      <div className="flex xl:gap-32 gap-16">
        <section className="flex-shrink-0">
          <div className="mb-12">
            <Suspense>
              <ImageUpload user={user} />
            </Suspense>
            <h3 className="text-xl mt-2 font-bold">{user.name}</h3>
            <p className="text-xs">{user.email}</p>
          </div>
          <NavLink />
        </section>
        {children}
      </div>
    </div>
  );
}
