"use client";
import React, { useRef, useState } from "react";
import { updateMeName } from "@/actions/userAction";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Info({
  inf,
}: {
  inf: { title: string; value: string };
}) {
  const [is, setIs] = useState(true);
  const [value, setValue] = useState(inf.value);
  const pRef = useRef<HTMLInputElement>(null);
  return (
    <div
      key={inf.title}
      className="p-6 rounded-md shadow dark:bg-gray-800 bg-gray-100"
    >
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-lg ml-3">{inf.title}</h4>
        {inf.title === "Tên" && (
          <Button
            onClick={async () => {
              setIs((prev) => !prev);
              if (pRef.current) {
                if (is) {
                  pRef.current.focus();
                } else {
                  await updateMeName({ name: value });
                }
              }
            }}
          >
            {is ? "Thay đổi" : "Xác nhận"}
          </Button>
        )}
      </div>
      <Input
        ref={pRef}
        readOnly={is}
        className={`${
          is ? "pointer-events-none" : ""
        } text-gray-400 dark:text-gray-500`}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
}
