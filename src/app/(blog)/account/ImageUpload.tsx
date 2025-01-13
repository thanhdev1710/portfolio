/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { updateMeImage } from "@/actions/userAction";
import { Upload } from "antd";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

export default function ImageUpload({ user }: { user: any }) {
  return (
    <div className="flex items-center justify-center">
      <Upload
        onChange={async (info) => {
          if (info.file.status === "done") {
            const image = info.file.originFileObj;
            if (image) {
              await toast.promise(updateMeImage({ image }), {
                error: "Upload ảnh thất bại!",
                loading: "Đang cập nhật ảnh đại diện...",
                success: "Cập nhật thành công!",
              });
            }
          }
        }}
        name="image"
        showUploadList={false}
        accept="image/*"
      >
        <Image
          alt={user.name}
          src={user.image}
          width={200}
          height={200}
          className="object-cover rounded-full size-36 cursor-pointer"
        />
      </Upload>
    </div>
  );
}
