import { useState } from "react";

export function useCopy(timeout = 1200) {
  const [copied, setCopied] = useState(false);
  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), timeout);
  };
  return [copied, copy] as const;
}
