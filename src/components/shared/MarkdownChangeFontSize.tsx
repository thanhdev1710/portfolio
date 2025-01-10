"use client";

import { useContextChangeFontSize } from "@/context/ContextChangeFontSize";
import ReactMarkdown from "react-markdown";

export default function MarkdownChangeFontSize({ str }: { str: string }) {
  const { fontSize, lineHeight } = useContextChangeFontSize();
  return (
    <div
      style={{
        fontSize: `${fontSize}px`,
        lineHeight: lineHeight,
      }}
      className="mb-2 prose dark:prose-invert max-w-none"
    >
      <ReactMarkdown className="max-w-none">{str}</ReactMarkdown>
    </div>
  );
}
