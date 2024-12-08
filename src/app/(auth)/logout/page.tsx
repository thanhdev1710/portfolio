import { logout } from "@/actions/authAction";

export default async function page() {
  return (
    <form action={logout}>
      <button>Đăng xuất thành công</button>
    </form>
  );
}
