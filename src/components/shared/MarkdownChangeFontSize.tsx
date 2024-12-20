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
      className="mb-2 prose dark:prose-invert"
    >
      <ReactMarkdown>{str}</ReactMarkdown>
    </div>
  );
}
