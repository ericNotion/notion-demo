"use client";

import { Icon } from "@nds-icons";
import { plusIcon } from "@nds-icons/plus/default.icon";
import { Button } from "@/components/ui/button";
import { useAtom } from "jotai";
import { useState } from "react";
import {
  postItsAtom,
  tasksAtom,
  selectedPostItAtom,
  convertingPostItAtom,
  type PostIt,
  type PostItColor,
} from "./atoms";
import { PostItNote } from "./PostItNote";
import { ConvertToTaskModal } from "./ConvertToTaskModal";
import { TaskPanel } from "./TaskPanel";

const colors: PostItColor[] = ["yellow", "blue", "green", "pink", "purple", "orange"];

export function Whiteboard() {
  const [postIts, setPostIts] = useAtom(postItsAtom);
  const [tasks, setTasks] = useAtom(tasksAtom);
  const [selectedPostIt, setSelectedPostIt] = useAtom(selectedPostItAtom);
  const [convertingPostIt, setConvertingPostIt] = useAtom(convertingPostItAtom);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleAddPostIt = () => {
    const newPostIt: PostIt = {
      id: `postit-${Date.now()}`,
      text: "",
      color: colors[currentColorIndex],
      x: Math.random() * 400 + 100,
      y: Math.random() * 200 + 100,
      convertedToTask: false,
    };
    setPostIts([...postIts, newPostIt]);
    setCurrentColorIndex((currentColorIndex + 1) % colors.length);
    setSelectedPostIt(newPostIt.id);
  };

  const handleUpdatePostIt = (id: string, updates: Partial<PostIt>) => {
    setPostIts(
      postIts.map((p) => (p.id === id ? { ...p, ...updates } : p)),
    );
  };

  const handleConvertPostIt = (postItId: string) => {
    setConvertingPostIt(postItId);
  };

  const handleCreateTask = (
    taskData: {
      name: string;
      status: "not-started" | "in-progress" | "completed";
      owner: string;
      dueDate: string;
      createdFrom: string;
    },
  ) => {
    const newTask = {
      ...taskData,
      id: `task-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    setTasks([...tasks, newTask]);

    // Mark Post-it as converted
    setPostIts(
      postIts.map((p) =>
        p.id === taskData.createdFrom ? { ...p, convertedToTask: true } : p,
      ),
    );
  };

  const convertingPostItData = convertingPostIt
    ? postIts.find((p) => p.id === convertingPostIt)
    : null;

  const gridStyle = { 
    backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", 
    backgroundSize: "24px 24px" 
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-primary">
      {/* Toolbar */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
        <Button
          variant="primary"
          size="md"
          onClick={handleAddPostIt}
          className="shadow-md-outline"
        >
          <Icon icon={plusIcon} />
          Add Post-it
        </Button>
        <div className="px-3 py-1.5 rounded-md bg-elevated border border-primary shadow-sm-outline text-caption text-secondary">
          {postIts.length} {postIts.length === 1 ? "note" : "notes"}
        </div>
      </div>

      {/* Canvas */}
      <div
        className="relative w-full h-full"
        onClick={() => setSelectedPostIt(null)}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={gridStyle}
        />

        {/* Post-its */}
        {postIts.map((postIt) => (
          <PostItNote
            key={postIt.id}
            postIt={postIt}
            onUpdate={(updates) => handleUpdatePostIt(postIt.id, updates)}
            onConvert={() => handleConvertPostIt(postIt.id)}
            isSelected={selectedPostIt === postIt.id}
            onSelect={() => setSelectedPostIt(postIt.id)}
          />
        ))}
      </div>

      {/* Task Panel */}
      <TaskPanel tasks={tasks} />

      {/* Convert Modal */}
      {convertingPostItData && (
        <ConvertToTaskModal
          open={!!convertingPostIt}
          onClose={() => setConvertingPostIt(null)}
          postItText={convertingPostItData.text}
          postItId={convertingPostItData.id}
          onConvert={handleCreateTask}
        />
      )}
    </div>
  );
}
