"use client";

import { Agentation } from "@/components/playground-kit";
import { Button } from "@/components/playground-kit";
import { Icon } from "@nds-icons";
import { cursorClickIcon } from "@nds-icons/cursorClick/default.icon";
import { eyeIcon } from "@nds-icons/eye/default.icon";
import { pageIcon } from "@nds-icons/page/default.icon";
import { databaseEmbedIcon } from "@nds-icons/databaseEmbed/default.icon";
import { commentIcon } from "@nds-icons/comment/default.icon";
import { clockArrowBackIcon } from "@nds-icons/clockArrowBack/default.icon";
import { atIcon } from "@nds-icons/at/default.icon";
import { plusIcon } from "@nds-icons/plus/default.icon";
import { arrowUpDownLeftRightIcon } from "@nds-icons/arrowUpDownLeftRight/default.icon";
import { composeIcon } from "@nds-icons/compose/default.icon";
import { addSquareRoundedIcon } from "@nds-icons/addSquareRounded/default.icon";
import { atom, useAtom, useAtomValue } from "jotai";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef } from "react";
import { cn } from "@/utils/cn";

// Types
interface Cursor {
  id: string;
  name: string;
  color: string;
  x: number;
  y: number;
}

interface Collaborator {
  id: string;
  name: string;
  color: string;
  avatar: string;
  isActive: boolean;
}

interface CanvasObject {
  id: string;
  type: "sticky" | "page-embed" | "database-embed" | "text";
  x: number;
  y: number;
  width: number;
  height: number;
  content: string;
  color?: string;
  icon?: string;
  comments?: number;
}

interface Comment {
  id: string;
  objectId: string;
  author: string;
  avatar: string;
  text: string;
  timestamp: Date;
}

interface VersionSnapshot {
  id: string;
  timestamp: Date;
  author: string;
  description: string;
}

// Atoms
const cursorsAtom = atom<Cursor[]>([
  { id: "1", name: "Sarah Chen", color: "#3B82F6", x: 320, y: 240 },
  { id: "2", name: "Alex Kim", color: "#10B981", x: 580, y: 380 },
  { id: "3", name: "Jamie Lee", color: "#F59E0B", x: 450, y: 520 },
]);

const collaboratorsAtom = atom<Collaborator[]>([
  { id: "1", name: "Sarah Chen", color: "#3B82F6", avatar: "SC", isActive: true },
  { id: "2", name: "Alex Kim", color: "#10B981", avatar: "AK", isActive: true },
  { id: "3", name: "Jamie Lee", color: "#F59E0B", avatar: "JL", isActive: true },
  { id: "4", name: "Morgan Park", color: "#8B5CF6", avatar: "MP", isActive: false },
]);

const canvasObjectsAtom = atom<CanvasObject[]>([
  {
    id: "obj1",
    type: "sticky",
    x: 100,
    y: 100,
    width: 200,
    height: 180,
    content: "User research findings:\n• 85% want real-time collab\n• Live cursors are essential\n• Comments on objects",
    color: "#FEF3C7",
    comments: 3,
  },
  {
    id: "obj2",
    type: "page-embed",
    x: 350,
    y: 120,
    width: 280,
    height: 120,
    content: "Product Requirements Doc",
    icon: "📋",
    comments: 1,
  },
  {
    id: "obj3",
    type: "database-embed",
    x: 100,
    y: 340,
    width: 300,
    height: 200,
    content: "Sprint Tasks",
    icon: "✓",
  },
  {
    id: "obj4",
    type: "sticky",
    x: 450,
    y: 360,
    width: 200,
    height: 160,
    content: "@Sarah Chen can you review the follow mode implementation?",
    color: "#DBEAFE",
    comments: 2,
  },
  {
    id: "obj5",
    type: "text",
    x: 700,
    y: 140,
    width: 180,
    height: 60,
    content: "Architecture Notes",
  },
]);

const followingAtom = atom<string | null>(null);
const showVersionHistoryAtom = atom(false);
const showCommentsAtom = atom(false);
const selectedObjectAtom = atom<string | null>(null);

// Mock data
const mockComments: Comment[] = [
  {
    id: "c1",
    objectId: "obj1",
    author: "Sarah Chen",
    avatar: "SC",
    text: "Great summary! Can we prioritize the live cursors feature?",
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
  },
  {
    id: "c2",
    objectId: "obj1",
    author: "Alex Kim",
    avatar: "AK",
    text: "Agreed. I'll start on the CRDT implementation.",
    timestamp: new Date(Date.now() - 1000 * 60 * 3),
  },
];

const mockVersions: VersionSnapshot[] = [
  {
    id: "v5",
    timestamp: new Date(Date.now() - 1000 * 60 * 10),
    author: "You",
    description: "Added database embed and comments",
  },
  {
    id: "v4",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    author: "Sarah Chen",
    description: "Updated user research findings",
  },
  {
    id: "v3",
    timestamp: new Date(Date.now() - 1000 * 60 * 60),
    author: "Alex Kim",
    description: "Added page embed for PRD",
  },
  {
    id: "v2",
    timestamp: new Date(Date.now() - 1000 * 60 * 120),
    author: "Jamie Lee",
    description: "Initial whiteboard setup",
  },
];

// Components
function LiveCursor({ cursor }: { cursor: Cursor }) {
  return (
    <motion.div
      className="pointer-events-none absolute z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: cursor.x,
        y: cursor.y,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <Icon
        icon={cursorClickIcon}
        style={{ color: cursor.color }}
        className="h-5 w-5"
      />
      <div
        className="ml-4 mt-1 whitespace-nowrap rounded-md px-2 py-1 text-caption font-medium text-white shadow-md"
        style={{ backgroundColor: cursor.color }}
      >
        {cursor.name}
      </div>
    </motion.div>
  );
}

function PresenceBar({
  collaborators,
  following,
  onFollowToggle,
}: {
  collaborators: Collaborator[];
  following: string | null;
  onFollowToggle: (id: string) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {collaborators
          .filter((c) => c.isActive)
          .map((collab) => (
            <motion.button
              key={collab.id}
              onClick={() => onFollowToggle(collab.id)}
              className={cn(
                "relative flex h-8 w-8 items-center justify-center rounded-full text-caption-sm font-semibold text-white shadow-sm transition-all hover:scale-110",
                following === collab.id && "ring-2 ring-offset-2",
              )}
              style={{
                backgroundColor: collab.color,
                ringColor: following === collab.id ? collab.color : undefined,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {collab.avatar}
              {following === collab.id && (
                <motion.div
                  className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  <Icon icon={eyeIcon} className="h-3 w-3 fill-primary" />
                </motion.div>
              )}
            </motion.button>
          ))}
      </div>
      <div className="text-body-sm text-secondary">
        {collaborators.filter((c) => c.isActive).length} viewing
      </div>
    </div>
  );
}

function CanvasObjectComponent({
  object,
  isSelected,
  onClick,
}: {
  object: CanvasObject;
  isSelected: boolean;
  onClick: () => void;
}) {
  if (object.type === "sticky") {
    return (
      <motion.div
        className={cn(
          "group absolute cursor-move rounded-lg p-4 shadow-sm transition-shadow hover:shadow-md",
          isSelected && "ring-2 ring-blue-500 ring-offset-2",
        )}
        style={{
          left: object.x,
          top: object.y,
          width: object.width,
          height: object.height,
          backgroundColor: object.color,
        }}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        drag
        dragMomentum={false}
      >
        <div className="text-body whitespace-pre-wrap text-gray-800">
          {object.content}
        </div>
        {object.comments && object.comments > 0 && (
          <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-caption-sm font-semibold text-white shadow-md">
            {object.comments}
          </div>
        )}
        <div className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100">
          <Icon
            icon={arrowUpDownLeftRightIcon}
            className="h-4 w-4 fill-tertiary"
          />
        </div>
      </motion.div>
    );
  }

  if (object.type === "page-embed") {
    return (
      <motion.div
        className={cn(
          "group absolute cursor-pointer overflow-hidden rounded-lg border border-primary bg-secondary shadow-sm transition-all hover:shadow-md",
          isSelected && "ring-2 ring-blue-500 ring-offset-2",
        )}
        style={{
          left: object.x,
          top: object.y,
          width: object.width,
          height: object.height,
        }}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        drag
        dragMomentum={false}
      >
        <div className="flex h-full flex-col p-4">
          <div className="flex items-start gap-3">
            <div className="text-3xl">{object.icon}</div>
            <div className="flex-1">
              <div className="text-body font-semibold text-primary">
                {object.content}
              </div>
              <div className="mt-2 text-body-sm text-tertiary">
                Last edited 2 hours ago • Click to open
              </div>
            </div>
            <Icon icon={pageIcon} className="h-5 w-5 fill-tertiary" />
          </div>
        </div>
        {object.comments && object.comments > 0 && (
          <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-caption-sm font-semibold text-white shadow-md">
            {object.comments}
          </div>
        )}
      </motion.div>
    );
  }

  if (object.type === "database-embed") {
    return (
      <motion.div
        className={cn(
          "group absolute overflow-hidden rounded-lg border border-primary bg-secondary shadow-sm transition-all hover:shadow-md",
          isSelected && "ring-2 ring-blue-500 ring-offset-2",
        )}
        style={{
          left: object.x,
          top: object.y,
          width: object.width,
          height: object.height,
        }}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        drag
        dragMomentum={false}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center gap-2 border-b border-primary px-4 py-3">
            <div className="text-lg">{object.icon}</div>
            <div className="text-body font-semibold text-primary">
              {object.content}
            </div>
            <Icon
              icon={databaseEmbedIcon}
              className="ml-auto h-4 w-4 fill-tertiary"
            />
          </div>
          <div className="flex-1 p-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 rounded-md bg-tertiary px-3 py-2">
                <div className="h-4 w-4 rounded bg-green-500"></div>
                <div className="text-body-sm text-primary">
                  Implement live cursors
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-tertiary px-3 py-2">
                <div className="h-4 w-4 rounded bg-yellow-500"></div>
                <div className="text-body-sm text-primary">Add page embeds</div>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-tertiary px-3 py-2">
                <div className="h-4 w-4 rounded bg-blue-500"></div>
                <div className="text-body-sm text-primary">
                  Build comment system
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (object.type === "text") {
    return (
      <motion.div
        className={cn(
          "absolute cursor-text rounded-md border border-transparent px-2 py-1 transition-all hover:border-primary",
          isSelected && "ring-2 ring-blue-500 ring-offset-2",
        )}
        style={{
          left: object.x,
          top: object.y,
          width: object.width,
          height: object.height,
        }}
        onClick={onClick}
        drag
        dragMomentum={false}
      >
        <div className="text-title-sm font-semibold text-primary">
          {object.content}
        </div>
      </motion.div>
    );
  }

  return null;
}

function CommentsPanel({
  objectId,
  onClose,
}: {
  objectId: string | null;
  onClose: () => void;
}) {
  const comments = objectId
    ? mockComments.filter((c) => c.objectId === objectId)
    : mockComments;

  return (
    <motion.div
      className="absolute right-4 top-16 z-40 w-80 rounded-lg border border-primary bg-elevated shadow-lg"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
    >
      <div className="border-b border-primary px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon icon={commentIcon} className="h-5 w-5 fill-primary" />
            <div className="text-body font-semibold text-primary">Comments</div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            ✕
          </Button>
        </div>
      </div>
      <div className="max-h-96 overflow-y-auto p-4">
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="flex gap-3">
              <div
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-caption-sm font-semibold text-white"
                style={{ backgroundColor: "#3B82F6" }}
              >
                {comment.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-2">
                  <div className="text-body-sm font-semibold text-primary">
                    {comment.author}
                  </div>
                  <div className="text-caption text-tertiary">
                    {Math.floor(
                      (Date.now() - comment.timestamp.getTime()) / 60000,
                    )}
                    m ago
                  </div>
                </div>
                <div className="mt-1 text-body-sm text-secondary">
                  {comment.text}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <div className="flex items-center gap-2 rounded-lg border border-primary bg-secondary px-3 py-2">
            <Icon icon={atIcon} className="h-4 w-4 fill-tertiary" />
            <input
              type="text"
              placeholder="Add a comment..."
              className="flex-1 bg-transparent text-body outline-none placeholder:text-tertiary"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function VersionHistoryPanel({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="absolute right-4 top-16 z-40 w-80 rounded-lg border border-primary bg-elevated shadow-lg"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
    >
      <div className="border-b border-primary px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon
              icon={clockArrowBackIcon}
              className="h-5 w-5 fill-primary"
            />
            <div className="text-body font-semibold text-primary">
              Version History
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            ✕
          </Button>
        </div>
      </div>
      <div className="max-h-96 overflow-y-auto p-4">
        <div className="space-y-3">
          {mockVersions.map((version, idx) => (
            <motion.button
              key={version.id}
              className="w-full rounded-lg border border-primary bg-secondary px-3 py-2 text-left transition-colors hover:bg-tertiary"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-caption-sm font-semibold text-blue-700">
                  {version.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex-1">
                  <div className="text-body-sm font-medium text-primary">
                    {version.description}
                  </div>
                  <div className="mt-1 text-caption text-tertiary">
                    {version.author} •{" "}
                    {Math.floor(
                      (Date.now() - version.timestamp.getTime()) / 60000,
                    )}
                    m ago
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Page() {
  const cursors = useAtomValue(cursorsAtom);
  const collaborators = useAtomValue(collaboratorsAtom);
  const canvasObjects = useAtomValue(canvasObjectsAtom);
  const [following, setFollowing] = useAtom(followingAtom);
  const [showVersionHistory, setShowVersionHistory] = useAtom(
    showVersionHistoryAtom,
  );
  const [showComments, setShowComments] = useAtom(showCommentsAtom);
  const [selectedObject, setSelectedObject] = useAtom(selectedObjectAtom);
  const canvasRef = useRef<HTMLDivElement>(null);

  // Simulate cursor movement
  useEffect(() => {
    const interval = setInterval(() => {
      // This would be replaced with actual real-time cursor updates
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleFollowToggle = (id: string) => {
    setFollowing(following === id ? null : id);
  };

  return (
    <div className="flex h-screen w-full flex-col bg-primary">
      <Agentation />

      {/* Header */}
      <div className="flex h-14 items-center justify-between border-b border-primary bg-secondary px-4">
        <div className="flex items-center gap-3">
          <div className="text-title font-semibold text-primary">
            Product Planning Whiteboard
          </div>
          <div className="text-body-sm text-tertiary">Auto-saved 1m ago</div>
        </div>
        <div className="flex items-center gap-3">
          <PresenceBar
            collaborators={collaborators}
            following={following}
            onFollowToggle={handleFollowToggle}
          />
          <div className="h-6 w-px bg-border-primary"></div>
          <Button
            variant={showComments ? "tint" : "ghost"}
            size="sm"
            onClick={() => setShowComments(!showComments)}
          >
            <Icon icon={commentIcon} className="h-4 w-4 fill-primary" />
            Comments
          </Button>
          <Button
            variant={showVersionHistory ? "tint" : "ghost"}
            size="sm"
            onClick={() => setShowVersionHistory(!showVersionHistory)}
          >
            <Icon icon={clockArrowBackIcon} className="h-4 w-4 fill-primary" />
            History
          </Button>
        </div>
      </div>

      {/* Canvas */}
      <div className="relative flex-1 overflow-hidden">
        <div
          ref={canvasRef}
          className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0/0.05)_1px,transparent_0)] bg-[length:24px_24px]"
        >
          {/* Canvas Objects */}
          {canvasObjects.map((obj) => (
            <CanvasObjectComponent
              key={obj.id}
              object={obj}
              isSelected={selectedObject === obj.id}
              onClick={() => setSelectedObject(obj.id)}
            />
          ))}

          {/* Live Cursors */}
          {cursors.map((cursor) => (
            <LiveCursor key={cursor.id} cursor={cursor} />
          ))}

          {/* Follow Mode Indicator */}
          <AnimatePresence>
            {following && (
              <motion.div
                className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-blue-500 px-4 py-2 text-body-sm font-medium text-white shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="flex items-center gap-2">
                  <Icon icon={eyeIcon} className="h-4 w-4 fill-white" />
                  Following{" "}
                  {collaborators.find((c) => c.id === following)?.name}
                  <button
                    onClick={() => setFollowing(null)}
                    className="ml-2 text-white hover:opacity-80"
                  >
                    ✕
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Floating Action Button */}
        <motion.div
          className="absolute bottom-8 right-8 z-30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="primary"
            size="lg"
            className="h-14 w-14 rounded-full shadow-lg"
          >
            <Icon icon={plusIcon} className="h-6 w-6 fill-white" />
          </Button>
        </motion.div>

        {/* Toolbar */}
        <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1 rounded-lg border border-primary bg-elevated px-2 py-2 shadow-lg">
          <Button variant="ghost" size="sm">
            <Icon icon={composeIcon} className="h-4 w-4 fill-primary" />
            Sticky
          </Button>
          <Button variant="ghost" size="sm">
            <Icon icon={pageIcon} className="h-4 w-4 fill-primary" />
            Page
          </Button>
          <Button variant="ghost" size="sm">
            <Icon
              icon={databaseEmbedIcon}
              className="h-4 w-4 fill-primary"
            />
            Database
          </Button>
          <Button variant="ghost" size="sm">
            <Icon
              icon={addSquareRoundedIcon}
              className="h-4 w-4 fill-primary"
            />
            Shape
          </Button>
          <div className="mx-1 h-6 w-px bg-border-primary"></div>
          <Button variant="ghost" size="sm">
            <Icon icon={atIcon} className="h-4 w-4 fill-primary" />
            Mention
          </Button>
        </div>

        {/* Panels */}
        <AnimatePresence>
          {showComments && (
            <CommentsPanel
              objectId={selectedObject}
              onClose={() => setShowComments(false)}
            />
          )}
          {showVersionHistory && (
            <VersionHistoryPanel
              onClose={() => setShowVersionHistory(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
