import { Slider } from "../shared/Slider";
import { ModeToggle } from "../ui/ButtonToggle";

export function Flex3() {
  return (
    <div className="h-full w-full flex gap-4 Flex3 max-xl:flex-col-reverse">
      <div className="card-customer !w-[45%] p-6 flex flex-col justify-between max-xl:!w-full max-xl:!h-[200px] max-md:!h-full">
        <h3 className="text-lg tracking-widest font-light text-[var(--text-secondary)] mb-4 uppercase">
          Subscribe
        </h3>
        <p className="text-base font-medium text-[var(--text-primary)] mb-4">
          Stay updated with the latest blog posts! Enter your email to
          subscribe.
        </p>
        <form className="flex gap-4 max-md:flex-col">
          <input
            type="email"
            placeholder="Enter your email"
            className="dark:bg-zinc-600 bg-zinc-200 p-4 rounded-xl w-full"
            required
          />
          <button
            type="submit"
            className="dark:bg-zinc-800 bg-zinc-400 text-white py-4 px-6 rounded-xl font-semibold"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="flex gap-4 !w-[55%] max-xl:!w-full h-full max-xl:!h-[200px] max-md:!h-full max-md:flex-col">
        <div className="card-customer max-md:!w-full !w-[60%] p-6 flex items-center justify-between max-xl:!w-[75%]">
          <div className="w-full">
            <h3 className="text-3xl font-medium mb-10">Stack I Use</h3>
            <Slider />
          </div>
        </div>
        <div className="card-customer max-md:!w-full max-md:p-6 !w-[40%] flex items-center justify-center">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
