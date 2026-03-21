import { useCallback, useState } from "react";

async function handleCopy(text: string) {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(text);
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();

  let succeeded = false;
  try {
    succeeded = document.execCommand("copy");
  } finally {
    document.body.removeChild(textarea);
  }

  if (!succeeded) {
    throw new Error("Failed to copy");
  }
}

export function useCopyToClipboard(): [
  (text: string) => Promise<boolean>,
  boolean,
] {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback(async (text: string) => {
    await handleCopy(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
    return true;
  }, []);

  return [copy, isCopied];
}
