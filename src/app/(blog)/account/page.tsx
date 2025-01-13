import { auth } from "@/actions/authAction";
import { redirect } from "next/navigation";
import Info from "./Info";

export default async function page() {
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
    <section>
      <h2 className="font-bold text-3xl">Thông tin cá nhân</h2>
      <p>
        Quản lý thông tin cá nhân của bạn, bao gồm số điện thoại và địa chỉ
        email nơi bạn có thể liên lạc
      </p>
      <div className="grid grid-cols-2 gap-4 mt-6">
        {info.map((inf) => (
          <Info inf={inf} key={inf.title} />
        ))}
      </div>
    </section>
  );
}
