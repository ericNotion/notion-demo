"use client";

import { Icon } from "@nds-icons";
import { checkmarkCircleIcon } from "@nds-icons/checkmarkCircle/fill.icon";
import { ellipsisIcon } from "@nds-icons/ellipsis/default.icon";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/utils/cn";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { PostIt, PostItColor } from "./atoms";

interface PostItNoteProps {
  postIt: PostIt;
  onUpdate: (updates: Partial<PostIt>) => void;
  onConvert: () => void;
  isSelected: boolean;
  onSelect: () => void;
}

const colorClasses: Record<PostItColor, string> = {
  yellow: "bg-yellow-100 dark:bg-yellow-900/30 border-yellow-300 dark:border-yellow-700",
  blue: "bg-blue-100 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700",
  green: "bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700",
  pink: "bg-pink-100 dark:bg-pink-900/30 border-pink-300 dark:border-pink-700",
  purple: "bg-purple-100 dark:bg-purple-900/30 border-purple-300 dark:border-purple-700",
  orange: "bg-orange-100 dark:bg-orange-900/30 border-orange-300 dark:border-orange-700",
};

export function PostItNote({
  postIt,
  onUpdate,
  onConvert,
  isSelected,
  onSelect,
}: PostItNoteProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!isDragging || !dragStart) return;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - dragStart.x;
      const dy = e.clientY - dragStart.y;
      onUpdate({
        x: postIt.x + dx,
        y: postIt.y + dy,
      });
      setDragStart({ x: e.clientX, y: e.clientY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setDragStart(null);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragStart, onUpdate, postIt.x, postIt.y]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).tagName === "TEXTAREA") return;
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    onSelect();
  };

  return (
    <motion.div
      ref={containerRef}
      style={{
        position: "absolute",
        left: postIt.x,
        top: postIt.y,
        zIndex: isSelected ? 10 : 1,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className={cn(
        "group relative w-48 h-48 shadow-md-outline cursor-move select-none",
        colorClasses[postIt.color],
        isSelected && "ring-2 ring-blue-accent-primary",
        postIt.convertedToTask && "opacity-75",
      )}
      onMouseDown={handleMouseDown}
    >
      {/* Header with menu button */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon-sm"
              className="h-6 w-6 bg-white/50 hover:bg-white/80 dark:bg-black/20 dark:hover:bg-black/40"
              onClick={(e) => e.stopPropagation()}
            >
              <Icon icon={ellipsisIcon} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={onConvert} disabled={postIt.convertedToTask}>
              Convert to task
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                onUpdate({
                  color:
                    postIt.color === "yellow"
                      ? "blue"
                      : postIt.color === "blue"
                        ? "green"
                        : postIt.color === "green"
                          ? "pink"
                          : postIt.color === "pink"
                            ? "purple"
                            : postIt.color === "purple"
                              ? "orange"
                              : "yellow",
                })
              }
            >
              Change color
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Converted checkmark badge */}
      {postIt.convertedToTask && (
        <div className="absolute top-2 left-2">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white">
            <Icon icon={checkmarkCircleIcon} className="w-5 h-5" />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-4 pt-10 h-full flex items-start">
        <textarea
          ref={textareaRef}
          value={postIt.text}
          onChange={(e) => onUpdate({ text: e.target.value })}
          className="w-full h-full bg-transparent border-none outline-none resize-none text-body text-primary font-medium"
          placeholder="Type your idea..."
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
        />
      </div>
    </motion.div>
  );
}
