import { useEffect, useState } from "react";

interface AuthorDecorationProps {
  bgColor: string;
  authorName: string;
}

export function AuthorDectoration({
  bgColor,
  authorName,
}: AuthorDecorationProps) {
  return (
    <div
      style={{ backgroundColor: bgColor, opacity: 0.4 }}
      className={`w-24 min-w-24 h-6 flex justify-center items-center px-1 text-xs text-white font-normal rounded-sm`}
    >
      {authorName}
    </div>
  );
}
