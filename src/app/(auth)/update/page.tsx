"use client";
import FormLogin from "@/components/Form/FormLogin";

export default async function page() {
  return (
    <div className="flex items-center justify-center w-full min-h-svh bg-blue-300 py-8">
      <FormLogin formState={"update"} />
      <button
        onClick={() => {
          throw new Error("loi ne");
        }}
      >
        a
      </button>
    </div>
  );
}
