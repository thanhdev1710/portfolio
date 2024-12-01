"use client";

import { mailSubscribe } from "@/actions/mailAction";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

export default function FormSubscribeEmail() {
  const [email, setEmail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const { mutateAsync } = useMutation({
    mutationFn: mailSubscribe,
  });

  return (
    <form
      onSubmit={async (e) => {
        try {
          e.preventDefault();
          setIsSubmit(true);
          await toast.promise(mutateAsync(email), {
            error:
              "We apologize for the inconvenience. The server is not running right now.",
            loading: "Processing...",
            success: "Subscribed! Check your email.",
          });
        } finally {
          setIsSubmit(false);
          setEmail("");
        }
      }}
      className="flex gap-4 relative z-10 max-md:flex-col"
    >
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        className="dark:bg-zinc-800 dark:!text-white bg-zinc-200 !text-black p-4 rounded-xl w-full disabled:cursor-not-allowed"
        required
        disabled={isSubmit}
      />
      <button
        disabled={isSubmit}
        aria-label="Subscribe"
        type="submit"
        className="dark:bg-zinc-800 dark:!text-white bg-zinc-200 !text-black py-4 px-6 rounded-xl font-semibold disabled:cursor-not-allowed cursor-pointer"
      >
        Subscribe
      </button>
    </form>
  );
}
