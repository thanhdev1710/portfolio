import FormLogin from "@/components/Form/FormLogin";
import React from "react";

export default function page() {
  return (
    <div className="flex items-center justify-center w-full min-h-svh bg-blue-300 py-8">
      <FormLogin formState={"forgot"} />
    </div>
  );
}
