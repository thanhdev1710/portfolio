import { auth } from "@/actions/authAction";
import React from "react";

export default async function page() {
  const session = await auth();

  return <div>page</div>;
}
