"use client";
import { cn } from "@/lib/utils";
import { Tooltip } from "antd";
import { TooltipPlacement } from "antd/es/tooltip";
import { Facebook, Flag, Twitter } from "lucide-react"; // Import Twitter icon từ lucide-react

const ButtonShare = ({
  className,
  placement = "right",
}: {
  className?: string;
  placement?: TooltipPlacement;
}) => {
  const shareOnFacebook = () => {
    const url =
      "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href;
    window.open(url, "_blank");
  };

  const shareOnX = () => {
    const url = "https://x.com/intent/tweet?url=" + window.location.href; // URL chia sẻ lên X (trước đây là Twitter)

    window.open(url, "_blank");
  };

  return (
    <div className={cn("flex flex-col gap-4 mt-8", className)}>
      <Tooltip placement={placement} title="Chia sẻ lên Facebook">
        <button
          className="flex items-center justify-center size-10 p-2 rounded-full bg-blue-300 shadow-md hover:bg-blue-400"
          onClick={shareOnFacebook}
        >
          <Facebook className="w-full h-full fill-current text-white" />
        </button>
      </Tooltip>

      <Tooltip placement={placement} title="Chia sẻ lên X">
        <button
          className="flex items-center justify-center size-10 p-2 rounded-full bg-blue-500 shadow-md hover:bg-blue-600"
          onClick={shareOnX} // Chia sẻ lên X
        >
          <Twitter className="w-full h-full fill-current text-white" />
        </button>
      </Tooltip>
      <Tooltip placement={placement} title="Báo cáo">
        <button className="flex items-center justify-center size-10 p-2 rounded-full bg-gray-500 shadow-md hover:bg-gray-600">
          <Flag className="w-full h-full fill-current text-white" />
        </button>
      </Tooltip>
    </div>
  );
};

export default ButtonShare;
