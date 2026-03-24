"use client";

import {
  useAtom,
  useSetAtom,
  type PrimitiveAtom,
  type WritableAtom,
} from "jotai";
import { useEffect, useRef } from "react";
import { documentTitleAtom, lastSavedAtom } from "./atoms";

interface TitleEditorProps {
  className?: string;
  /** Custom title atom - defaults to shared documentTitleAtom */
  titleAtom?: WritableAtom<string, [string], void>;
  /** Custom lastSaved atom - defaults to shared lastSavedAtom */
  lastSavedAtom?: PrimitiveAtom<Date | null>;
  /** Placeholder text when title is empty */
  placeholder?: string;
  /** Called when Enter is pressed in the title */
  onEnter?: () => void;
}

export function TitleEditor({
  className,
  titleAtom: customTitleAtom,
  lastSavedAtom: customLastSavedAtom,
  placeholder = "Untitled",
  onEnter,
}: TitleEditorProps) {
  const [title, setTitle] = useAtom(customTitleAtom ?? documentTitleAtom);
  const setLastSaved = useSetAtom(customLastSavedAtom ?? lastSavedAtom);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Initialize DOM with current title when mounting
    if (ref.current && ref.current.textContent !== title) {
      ref.current.textContent = title;
    }
  }, [title]);

  function onInput(e: React.FormEvent<HTMLDivElement>) {
    const text = e.currentTarget.textContent || "";
    setTitle(text);
    setLastSaved(new Date());

    // Clear innerHTML if empty to ensure :empty selector works for placeholder
    if (text.trim() === "" && e.currentTarget.innerHTML !== "") {
      e.currentTarget.innerHTML = "";
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      if (onEnter) {
        onEnter();
        return;
      }
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_ELEMENT,
      );
      let next: HTMLElement | null = null;
      while (walker.nextNode()) {
        const el = walker.currentNode as HTMLElement;
        if (el === ref.current) continue;
        if (el.getAttribute && el.getAttribute("contenteditable") === "true") {
          next = el;
          break;
        }
      }
      next?.focus();
    }
  }

  return (
    <div
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      className={className}
      onInput={onInput}
      onKeyDown={onKeyDown}
      data-placeholder={placeholder}
    />
  );
}
