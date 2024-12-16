"use client";

import { useFormStatus } from "react-dom";

export default function ButtonMailSubscribe() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      aria-label="Subscribe"
      type="submit"
      className="dark:bg-zinc-800 dark:!text-white bg-zinc-200 !text-black py-4 px-6 rounded-xl font-semibold disabled:cursor-not-allowed cursor-pointer"
    >
      {pending ? "Processing..." : "Subscribe"}
    </button>
  );
}
