"use client";

import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useEffect, useRef } from "react";

const titleAtoms = new Map<
  string,
  ReturnType<typeof atomWithStorage<string>>
>();

function getTitleAtom(key: string, defaultValue: string) {
  if (!titleAtoms.has(key)) {
    titleAtoms.set(key, atomWithStorage(key, defaultValue));
  }
  return titleAtoms.get(key)!;
}

interface EditableTitleProps {
  storageKey: string;
  defaultTitle: string;
  className?: string;
  placeholder?: string;
}

export function EditableTitle({
  storageKey,
  defaultTitle,
  className = "content-page-title text-primary text-[40px] font-bold tracking-tight outline-hidden",
  placeholder = "Untitled",
}: EditableTitleProps) {
  const [title, setTitle] = useAtom(getTitleAtom(storageKey, defaultTitle));
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (ref.current && ref.current.textContent !== title) {
      ref.current.textContent = title;
    }
  }, [title]);

  return (
    <h1
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      className={className}
      data-placeholder={placeholder}
      onInput={(e) => {
        const text = e.currentTarget.textContent || "";
        setTitle(text);
        if (text.trim() === "" && e.currentTarget.innerHTML !== "") {
          e.currentTarget.innerHTML = "";
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") e.preventDefault();
      }}
    />
  );
}
