"use client";

import { useAtom } from "jotai";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/utils/cn";
import { postItNotesAtom, viewTransformAtom } from "./atoms";
import type { PostItNote as PostItNoteType } from "./types";

interface PostItNoteProps {
  note: PostItNoteType;
}

export function PostItNote({ note }: PostItNoteProps) {
  const [postItNotes, setPostItNotes] = useAtom(postItNotesAtom);
  const [viewTransform] = useAtom(viewTransformAtom);
  const [isEditing, setIsEditing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.select();
    }
  }, [isEditing]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isEditing) return;
    
    e.stopPropagation();
    setIsDragging(true);
    
    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const newX = (e.clientX - dragOffset.x - viewTransform.x) / viewTransform.scale;
      const newY = (e.clientY - dragOffset.y - viewTransform.y) / viewTransform.scale;

      setPostItNotes((notes) =>
        notes.map((n) =>
          n.id === note.id ? { ...n, x: newX, y: newY } : n
        )
      );
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset, note.id, setPostItNotes, viewTransform]);

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostItNotes((notes) =>
      notes.map((n) =>
        n.id === note.id ? { ...n, text: e.target.value } : n
      )
    );
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Escape") {
      setIsEditing(false);
    }
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPostItNotes((notes) => notes.filter((n) => n.id !== note.id));
  };

  return (
    <div
      className={cn(
        "absolute shadow-md-outline rounded-md p-3 cursor-move select-none transition-shadow hover:shadow-lg-outline",
        isDragging && "shadow-lg-outline cursor-grabbing"
      )}
      style={{
        left: `${note.x * viewTransform.scale + viewTransform.x}px`,
        top: `${note.y * viewTransform.scale + viewTransform.y}px`,
        width: `${note.width * viewTransform.scale}px`,
        height: `${note.height * viewTransform.scale}px`,
        backgroundColor: note.color,
        transform: `rotate(${note.rotation}deg)`,
        transformOrigin: "center center",
      }}
      onMouseDown={handleMouseDown}
      onDoubleClick={handleDoubleClick}
    >
      {isEditing ? (
        <textarea
          ref={textareaRef}
          value={note.text}
          onChange={handleTextChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="w-full h-full bg-transparent border-none outline-none resize-none text-body"
          style={{
            color: "rgba(0, 0, 0, 0.8)",
          }}
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
        />
      ) : (
        <div
          className="w-full h-full overflow-hidden whitespace-pre-wrap break-words text-body"
          style={{
            color: "rgba(0, 0, 0, 0.8)",
          }}
        >
          {note.text || "Double-click to edit"}
        </div>
      )}
      <button
        className={cn(
          "absolute top-1 right-1 w-5 h-5 rounded opacity-0 hover:opacity-100 transition-opacity bg-black/10 hover:bg-black/20 flex items-center justify-center text-xs",
          isDragging && "hidden"
        )}
        onClick={handleDelete}
        style={{ fontSize: "10px" }}
      >
        ×
      </button>
    </div>
  );
}
