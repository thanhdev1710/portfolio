import { ArrowUpRight } from "lucide-react";
import { Slider } from "../shared/Slider";
import { ModeToggle } from "../ui/ButtonToggle";

export function Flex3() {
  return (
    <div className="h-full w-full flex gap-4 Flex3">
      <div className="card-customer !w-[40%] p-6 flex flex-col justify-between">
        <h3 className="text-lg tracking-widest font-light text-[var(--text-secondary)] mb-2 uppercase">
          About
        </h3>
        <h4 className="text-xl font-medium tracking-wide">
          Passionate about fullstack development and building scalable apps.
        </h4>
        <button className="self-end border-2 border-[var(--border)] rounded-full size-12 flex justify-center items-center">
          <ArrowUpRight />
        </button>
      </div>
      <div className="card-customer !w-[35%] p-6 flex items-center justify-between">
        <div className="w-full">
          <h3 className="text-3xl font-medium mb-10">Stack I Use</h3>
          <Slider />
        </div>
      </div>
      <div className="card-customer !w-[25%] p-6 flex items-center justify-center">
        <ModeToggle />
      </div>
    </div>
  );
}
