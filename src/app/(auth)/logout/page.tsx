import { logout } from "@/actions/authAction";

export default async function page() {
  return (
    <form action={logout}>
      <button>Đăng xuất</button>
    </form>
  );
}
