"use client";

import { useState } from "react";
import { BrowserToolbar } from "./BrowserToolbar";
import { ClipToolbar } from "./ClipToolbar";
import { MockWebContent } from "./MockWebContent";
import { ClipNotification } from "./ClipNotification";
import { cn } from "@/utils/cn";

interface WebBrowserPanelProps {
  url?: string;
  onClose?: () => void;
  className?: string;
}

export function WebBrowserPanel({
  url = "https://en.wikipedia.org/wiki/Knowledge_management",
  onClose,
  className,
}: WebBrowserPanelProps) {
  const [selectedText, setSelectedText] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState<
    "clip" | "quote" | "summary"
  >("clip");

  const handleClipSelection = () => {
    setNotificationType("clip");
    setShowNotification(true);
    setSelectedText("");
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleQuote = () => {
    setNotificationType("quote");
    setShowNotification(true);
    setSelectedText("");
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleSummarize = () => {
    setNotificationType("summary");
    setShowNotification(true);
    setSelectedText("");
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleCopyText = () => {
    if (selectedText) {
      navigator.clipboard.writeText(selectedText);
    }
  };

  return (
    <>
      <div
        className={cn(
          "flex h-full flex-col overflow-hidden rounded-lg bg-primary shadow-md-outline",
          className
        )}
      >
        <BrowserToolbar url={url} onClose={onClose} />
        <MockWebContent
          selectedText={selectedText}
          onTextSelect={setSelectedText}
        />
        <ClipToolbar
          hasSelection={selectedText.length > 0}
          onClipSelection={handleClipSelection}
          onSummarize={handleSummarize}
          onExtractTable={handleClipSelection}
          onCopyText={handleCopyText}
          onQuote={handleQuote}
        />
      </div>
      <ClipNotification
        visible={showNotification}
        url={url}
        type={notificationType}
      />
    </>
  );
}
