"use client";

import { Icon } from "@nds-icons";
import { checklistIcon } from "@nds-icons/checklist/default.icon";
import { arrowChevronSingleDownIcon } from "@nds-icons/arrowChevronSingleDown/default.icon";
import { arrowChevronSingleUpIcon } from "@nds-icons/arrowChevronSingleUp/default.icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { motion, AnimatePresence } from "motion/react";
import { useAtom } from "jotai";
import type { Task } from "./atoms";
import { taskPanelOpenAtom } from "./atoms";

interface TaskPanelProps {
  tasks: Task[];
}

const statusColors = {
  "not-started": "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  "in-progress": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  completed: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
};

const statusLabels = {
  "not-started": "Not started",
  "in-progress": "In progress",
  completed: "Completed",
};

function formatDate(dateString: string): string {
  if (!dateString) return "No due date";
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = date.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Tomorrow";
  if (diffDays === -1) return "Yesterday";
  if (diffDays > 1 && diffDays <= 7) return `In ${diffDays} days`;
  if (diffDays < -1) return `${Math.abs(diffDays)} days ago`;

  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function TaskPanel({ tasks }: TaskPanelProps) {
  const [isOpen, setIsOpen] = useAtom(taskPanelOpenAtom);

  const panelAnimate = { y: isOpen ? 0 : 280 };
  const panelTransition = { type: "spring" as const, damping: 25, stiffness: 300 };
  const contentInitial = { height: 0, opacity: 0 };
  const contentAnimate = { height: "auto", opacity: 1 };
  const contentExit = { height: 0, opacity: 0 };
  const contentTransition = { duration: 0.2, ease: "easeInOut" as const };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.div
        initial={false}
        animate={panelAnimate}
        transition={panelTransition}
        className="w-full max-w-4xl mx-4 mb-4 pointer-events-auto"
      >
        <div className="bg-elevated border border-primary rounded-lg shadow-lg-outline overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-primary bg-secondary">
            <div className="flex items-center gap-2">
              <Icon icon={checklistIcon} className="text-primary" />
              <h3 className="text-title-sm font-semibold text-primary">
                Tasks from Post-its
              </h3>
              <span className="text-caption text-secondary">
                {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Icon icon={isOpen ? arrowChevronSingleDownIcon : arrowChevronSingleUpIcon} />
            </Button>
          </div>

          {/* Task list */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={contentInitial}
                animate={contentAnimate}
                exit={contentExit}
                transition={contentTransition}
                className="overflow-hidden"
              >
                <div className="p-4 space-y-2 max-h-64 overflow-y-auto">
                  {tasks.length === 0 ? (
                    <div className="text-center py-8 text-secondary text-body">
                      No tasks yet. Convert a Post-it note to create your first task.
                    </div>
                  ) : (
                    tasks.map((task) => (
                      <div
                        key={task.id}
                        className="flex items-center gap-3 p-3 rounded-md bg-secondary hover:bg-tertiary transition-colors group"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-primary text-body truncate">
                            {task.name}
                          </div>
                          <div className="flex items-center gap-2 mt-1 text-caption text-secondary">
                            <span>{task.owner}</span>
                            <span>•</span>
                            <span>{formatDate(task.dueDate)}</span>
                          </div>
                        </div>
                        <div
                          className={cn(
                            "px-2 py-1 rounded-md text-caption font-medium whitespace-nowrap",
                            statusColors[task.status],
                          )}
                        >
                          {statusLabels[task.status]}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
