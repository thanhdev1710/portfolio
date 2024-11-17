import { Flex1 } from "@/components/Flex/Flex1";
import { Flex2 } from "@/components/Flex/Flex2";
import { Flex3 } from "@/components/Flex/Flex3";
import FlexASide from "@/components/Flex/FlexASide";
import FlexResponsive from "@/components/Flex/FlexResponsive";
export default function page() {
  return (
    <div className="min-h-screen w-full p-4">
      <div className="border-2 border-[var(--border)] p-4 w-full h-full rounded-[30px] flex xl:flex-row flex-col gap-4">
        <section className="min-h-screen w-full xl:w-[76%] flex flex-col gap-4">
          <Flex1 />
          <Flex2 />
          <FlexResponsive />
          <Flex3 />
        </section>
        <FlexASide />
      </div>
    </div>
  );
}
