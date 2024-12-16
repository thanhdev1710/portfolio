import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Hashtag({
  label,
  url,
  className,
}: {
  label: string;
  url: string;
  className?: string;
}) {
  return (
    <Button className={className} variant="secondary">
      <Link href={"/tags/" + url} aria-label="Link to hashtag">
        {label}
      </Link>
    </Button>
  );
}
