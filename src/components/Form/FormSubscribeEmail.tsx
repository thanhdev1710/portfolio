import { mailSubscribe } from "@/actions/mailAction";
import ButtonMailSubscribe from "../Button/ButtonMailSubscribe";

export default function FormSubscribeEmail() {
  return (
    <form
      action={mailSubscribe}
      className="flex gap-4 relative z-10 max-md:flex-col"
    >
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        className="dark:bg-zinc-800 dark:!text-white bg-zinc-200 !text-black p-4 rounded-xl w-full disabled:cursor-not-allowed"
        required
      />
      <ButtonMailSubscribe />
    </form>
  );
}
