import { auth } from "@/actions/authAction";
import FormLogin from "@/components/Form/FormLogin";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();
  if (session.success) {
    redirect("/blogs");
  }
  return (
    <div className="flex items-center justify-center w-full min-h-svh bg-blue-300 py-8">
      <FormLogin formState={"login"} />
    </div>
  );
}
