import FormLogin from "@/components/Form/FormLogin";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  return (
    <div className="flex items-center justify-center w-full min-h-svh bg-blue-300 py-8">
      <FormLogin token={token} formState={"reset"} />
    </div>
  );
}
