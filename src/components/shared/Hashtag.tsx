import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Tag({
  label,
  url,
  className,
  title,
}: {
  label: string;
  url: string;
  className?: string;
  title: "categories" | "tags";
}) {
  return (
    <Button asChild className={className} variant="secondary">
      <Link href={`/${title}/${url}`} aria-label="Link to hashtag">
        {label}
      </Link>
    </Button>
  );
}
