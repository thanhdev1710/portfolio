"use client";
import { useContextChangeFontSize } from "@/context/ContextChangeFontSize";
import { Minus, Plus, X, ALargeSmall } from "lucide-react";

export default function ButtonALargeSmall() {
  const {
    fontSize,
    setFontSize,
    lineHeight,
    setLineHeight,
    isClick,
    setIsClick,
  } = useContextChangeFontSize();

  return (
    <div className="relative mt-4">
      <button
        onClick={() => setIsClick((prev) => !prev)}
        className="flex items-center justify-center size-10 p-2 rounded-full bg-slate-600 shadow-md hover:bg-slate-700"
      >
        {isClick ? (
          <X className="w-full h-full text-white" />
        ) : (
          <ALargeSmall className="w-full h-full text-white" />
        )}
      </button>
      {isClick && (
        <div className="absolute w-72 left-full top-1/2 ml-4 p-4 flex items-center justify-center bg-background rounded-md -translate-y-1/2">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <p className="flex-shrink-0 w-24 text-sm">Cỡ chữ</p>
              <button
                onClick={() =>
                  setFontSize((prev) => (prev > 13 ? prev - 1 : prev))
                }
                className="size-10 flex-shrink-0 flex items-center justify-center transition-all border-2 border-gray-300 bg-gray-50 hover:border-gray-400 hover:bg-gray-100 rounded-full"
              >
                <Minus />
              </button>
              <span className="font-light w-8 text-center">{fontSize}px</span>
              <button
                onClick={() =>
                  setFontSize((prev) => (prev < 23 ? prev + 1 : prev))
                }
                className="size-10 flex-shrink-0 flex items-center justify-center transition-all border-2 border-gray-300 bg-gray-50 hover:border-gray-400 hover:bg-gray-100 rounded-full"
              >
                <Plus />
              </button>
            </div>
            <div className="flex gap-4 items-center">
              <p className="flex-shrink-0 w-24 text-sm">Độ cao hàng</p>
              <button
                onClick={() =>
                  setLineHeight((prev) => (prev > 1.5 ? prev - 0.25 : prev))
                }
                className="size-10 flex items-center justify-center transition-all border-2 border-gray-300 bg-gray-50 hover:border-gray-400 hover:bg-gray-100 rounded-full"
              >
                <Minus />
              </button>
              <span className="font-light w-8 text-center">{lineHeight}</span>
              <button
                onClick={() =>
                  setLineHeight((prev) => (prev < 2.5 ? prev + 0.25 : prev))
                }
                className="size-10 flex items-center justify-center transition-all border-2 border-gray-300 bg-gray-50 hover:border-gray-400 hover:bg-gray-100 rounded-full"
              >
                <Plus />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
