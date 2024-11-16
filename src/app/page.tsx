import { Flex1 } from "@/components/Flex/Flex1";
import { Flex2 } from "@/components/Flex/Flex2";
import { Flex3 } from "@/components/Flex/Flex3";
export default function page() {
  return (
    <div className="min-h-screen w-full p-4">
      <div className="border-2 border-[var(--border)] p-4 w-full h-full rounded-[30px] flex gap-4">
        <div className="min-h-screen w-[79%] flex flex-col gap-4">
          <Flex1 />
          <Flex2 />
          <Flex3 />
        </div>
        <div className="min-h-screen w-[21%] flex flex-col gap-4">
          <div className="card-customer">dsadas</div>
          <div className="card-customer">dasdas</div>
          <div className="card-customer">dasdas</div>
        </div>
      </div>
    </div>
  );
}
