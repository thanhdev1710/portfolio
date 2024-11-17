import StartWeb from "@/components/shared/StartWeb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Welcome to Thanh's Website",
};

export default function page() {
  return <StartWeb />;
}
