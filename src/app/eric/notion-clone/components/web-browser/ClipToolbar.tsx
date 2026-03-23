"use client";

import { Icon } from "@nds-icons";
import { paperClipIcon } from "@nds-icons/paperClip/default.icon";
import { sparklesIcon } from "@nds-icons/sparkles/default.icon";
import { viewTableIcon } from "@nds-icons/viewTable/default.icon";
import { duplicateIcon } from "@nds-icons/duplicate/default.icon";
import { quoteIcon } from "@nds-icons/quote/default.icon";
import { Button } from "@/components/playground-kit";
import { motion, AnimatePresence } from "motion/react";

interface ClipToolbarProps {
  hasSelection?: boolean;
  onClipSelection?: () => void;
  onSummarize?: () => void;
  onExtractTable?: () => void;
  onCopyText?: () => void;
  onQuote?: () => void;
}

export function ClipToolbar({
  hasSelection = false,
  onClipSelection,
  onSummarize,
  onExtractTable,
  onCopyText,
  onQuote,
}: ClipToolbarProps) {
  return (
    <div className="border-t border-primary bg-elevated px-3 py-2">
      <AnimatePresence mode="wait">
        {hasSelection ? (
          <motion.div
            key="with-selection"
            initial= opacity: 0, y: 4 
            animate= opacity: 1, y: 0 
            exit= opacity: 0, y: 4 
            transition= duration: 0.15 
            className="flex items-center gap-2"
          >
            <div className="flex-1">
              <div className="flex items-center gap-1">
                <Button
                  variant="tint"
                  size="sm"
                  onClick={onClipSelection}
                  className="gap-1.5"
                >
                  <Icon icon={paperClipIcon} color="primary" size="sm" />
                  <span className="text-body font-medium">Clip selection</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onQuote}
                  className="gap-1.5"
                >
                  <Icon icon={quoteIcon} color="secondary" size="sm" />
                  <span className="text-body">Quote</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onCopyText}
                  className="gap-1.5"
                >
                  <Icon icon={duplicateIcon} color="secondary" size="sm" />
                  <span className="text-body">Copy</span>
                </Button>
              </div>
            </div>
            <div className="h-5 w-px bg-secondary" />
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={onSummarize}
                className="gap-1.5"
              >
                <Icon icon={sparklesIcon} color="secondary" size="sm" />
                <span className="text-body">Summarize</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={onExtractTable}
                className="gap-1.5"
              >
                <Icon icon={viewTableIcon} color="secondary" size="sm" />
                <span className="text-body">Extract table</span>
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="no-selection"
            initial= opacity: 0 
            animate= opacity: 1 
            exit= opacity: 0 
            transition= duration: 0.15 
            className="flex items-center justify-center py-1"
          >
            <p className="text-caption text-tertiary">
              Select text to clip it to your page
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
