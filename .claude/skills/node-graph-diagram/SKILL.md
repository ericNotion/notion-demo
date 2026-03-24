---
name: node-graph-diagram
description: Build a Page Graph BLOCK registered in the slash menu. Produces an interactive SVG node graph that visualizes workspace pages as draggable nodes with edges showing relationships. Clicking a node navigates to that page. Use when creating graph visualizations, page maps, or relationship diagrams.
---

# Page Graph Block

This skill produces a **Page Graph block** that appears in the slash command menu (`/graph`). It renders an interactive SVG node graph where nodes represent real workspace pages, edges show relationships, nodes are draggable, and clicking a node navigates to that page. No external graph library needed — pure SVG + React state.

**Prerequisites:** None. Uses SVG, React state, and `next/navigation` router.

## Step 1: Define the block interface

In `src/components/notion-kit/editor/atoms.ts`:

1. Add the interface:

```tsx
export interface NodeGraphBlock {
  id: string;
  type: "node-graph";
}
```

2. Add `NodeGraphBlock` to the `Block` union:

```tsx
export type Block =
  | ParagraphBlock
  | ListBlock
  | CalloutBlock
  | DividerBlock
  | DatabaseBlock
  | NodeGraphBlock;
```

> If `BeatMachineBlock` is already in the union, add `NodeGraphBlock` after it.

## Step 2: Update BlockEditor.tsx (5 critical modifications)

In `src/components/notion-kit/editor/BlockEditor.tsx`, make these 5 changes. **Missing any of these causes silent failures.** If `"beat-machine"` was already added, just append `|| block.type === "node-graph"` to the same conditions.

### 2a. `getBlockEndEl` function

Find the condition that checks for non-editable block types and add `|| block.type === "node-graph"`:

```tsx
if (block.type === "divider" || block.type === "database" || block.type === "node-graph") {
```

### 2b. `getBlockStartEl` function

Same change in `getBlockStartEl`.

### 2c. `textContent` sync effect

Find the condition in the `textContent` sync `useEffect` and add `&& blk.type !== "node-graph"`:

```tsx
} else if (blk.type !== "divider" && blk.type !== "database" && blk.type !== "node-graph") {
```

### 2d. `hasFocusedInitially` effect

Find the condition in the initial focus `useEffect` and add `b.type !== "node-graph" &&`:

```tsx
b.type !== "ul" &&
b.type !== "divider" &&
b.type !== "database" &&
b.type !== "node-graph" &&
```

### 2e. `transformBlock` function

Add a case for `"node-graph"`, following the divider/database pattern:

```tsx
} else if (blockType === "node-graph") {
  next[blockIndex] = { id: newBlockId, type: "node-graph" };
  const afterId = createBlockId();
  next.splice(blockIndex + 1, 0, {
    id: afterId,
    type: "paragraph",
    text: "",
  });
  newBlockId = afterId;
}
```

Place this before the final `else` branch.

## Step 3: Create the block component

Create `src/components/notion-kit/editor/blocks/NodeGraphBlock.tsx`.

The template below prescribes the exact skeleton — wrapper, DragHandle, keyboard handling, graph data, and slash command registration are fixed. Sections marked `{/* IMPLEMENT */}` are where you build the SVG rendering and interaction.

```tsx
"use client";

import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import {
  type NodeGraphBlock as NodeGraphBlockType,
  createBlockId,
} from "../atoms";
import { CmdIcon, DragHandle } from "./DragHandle";
import type { BlockComponentProps, BlockDefinition } from "./types";

// --- Graph data (FIXED — real workspace pages) ---

interface GraphNode {
  id: string;
  label: string;
  emoji: string;
  href: string;
  section: "favorites" | "private" | "shared";
}

interface GraphEdge {
  from: string;
  to: string;
}

const GRAPH_NODES: GraphNode[] = [
  {
    id: "product-workspace",
    label: "Product workspace",
    emoji: "📄",
    href: "/eric/notion-clone",
    section: "favorites",
  },
  {
    id: "launch-tracker",
    label: "Launch tracker",
    emoji: "🚀",
    href: "/eric/notion-clone/launch-tracker",
    section: "favorites",
  },
  {
    id: "research-archive",
    label: "Research archive",
    emoji: "📊",
    href: "/eric/notion-clone/research-archive",
    section: "favorites",
  },
  {
    id: "daily-notes",
    label: "Daily notes",
    emoji: "📝",
    href: "/eric/notion-clone/daily-notes",
    section: "private",
  },
  {
    id: "design-references",
    label: "Design references",
    emoji: "🎨",
    href: "/eric/notion-clone/design-references",
    section: "private",
  },
  {
    id: "product-handbook",
    label: "Product handbook",
    emoji: "📋",
    href: "/eric/notion-clone/product-handbook",
    section: "shared",
  },
  {
    id: "product-ideas",
    label: "Product ideas",
    emoji: "💡",
    href: "/eric/notion-clone/product-ideas",
    section: "shared",
  },
  {
    id: "meeting-notes",
    label: "Design review meeting",
    emoji: "🔊",
    href: "/eric/notion-clone/meeting-note",
    section: "private",
  },
];

const GRAPH_EDGES: GraphEdge[] = [
  { from: "product-workspace", to: "launch-tracker" },
  { from: "product-workspace", to: "research-archive" },
  { from: "product-workspace", to: "product-handbook" },
  { from: "product-workspace", to: "product-ideas" },
  { from: "launch-tracker", to: "research-archive" },
  { from: "daily-notes", to: "meeting-notes" },
  { from: "design-references", to: "product-ideas" },
  { from: "product-handbook", to: "product-ideas" },
];

const INITIAL_POSITIONS: Record<string, { x: number; y: number }> = {
  "product-workspace": { x: 400, y: 250 },
  "launch-tracker": { x: 200, y: 100 },
  "research-archive": { x: 600, y: 100 },
  "daily-notes": { x: 150, y: 300 },
  "design-references": { x: 650, y: 300 },
  "product-handbook": { x: 250, y: 430 },
  "product-ideas": { x: 550, y: 430 },
  "meeting-notes": { x: 100, y: 450 },
};

// Section colors for the indicator dot on each node
const SECTION_COLORS: Record<string, string> = {
  favorites: "#e8a135",
  private: "#9b9b9b",
  shared: "#2f80ed",
};

// --- Component ---

function NodeGraphBlockComponent({
  block,
  isDragging,
  isGripSelected,
  wrapperRef,
  insertAfter,
  remove,
  focusPrev,
  focusNext,
  startDrag,
  selectGrip,
}: BlockComponentProps) {
  const _graphBlock = block as NodeGraphBlockType;
  const router = useRouter();

  // --- State ---
  const [positions, setPositions] = useState<
    Record<string, { x: number; y: number }>
  >(() => ({ ...INITIAL_POSITIONS }));
  const [draggingNode, setDraggingNode] = useState<string | null>(null);
  const dragOffset = useRef<{ dx: number; dy: number }>({ dx: 0, dy: 0 });
  const didDrag = useRef(false);
  const svgRef = useRef<SVGSVGElement | null>(null);

  {
    /* IMPLEMENT: Pointer event handlers for node dragging.

      handlePointerDown(nodeId, e):
        - Set draggingNode to nodeId
        - Calculate offset between pointer and node center, store in dragOffset.current
        - Set didDrag.current = false
        - Call e.currentTarget.setPointerCapture(e.pointerId)

      handlePointerMove(e):
        - If no draggingNode, return
        - Convert pointer coordinates to SVG space using svgRef.current.getScreenCTM()
        - Update positions for the dragged node
        - If movement exceeds 3px from start, set didDrag.current = true

      handlePointerUp(nodeId):
        - Clear draggingNode
        - If !didDrag.current, navigate: router.push(node.href)
  */
  }

  // --- Keyboard handler (FIXED — do not modify) ---
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const target = e.target as HTMLElement;
    const isInput =
      target.tagName === "INPUT" ||
      target.tagName === "TEXTAREA" ||
      target.isContentEditable;

    if ((e.key === "Backspace" || e.key === "Delete") && !isInput) {
      e.preventDefault();
      selectGrip();
      focusPrev();
      remove();
    }
    if (e.key === "ArrowUp" && !isInput) {
      e.preventDefault();
      focusPrev();
    }
    if (e.key === "ArrowDown" && !isInput) {
      e.preventDefault();
      focusNext();
    }
  };

  // --- Render (FIXED wrapper structure — do not modify) ---
  return (
    <div
      ref={wrapperRef}
      className={cn("pt-2 pb-2", isDragging && "opacity-40")}
    >
      <div className="group/block relative">
        <DragHandle
          className="-left-[52px]"
          onAdd={() =>
            insertAfter({ id: createBlockId(), type: "paragraph", text: "" })
          }
          onGripPointerDown={(e) => startDrag(e)}
          onGripClick={() => selectGrip()}
        />
        <div
          data-block-id={block.id}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className={cn(
            "border-primary-translucent bg-elevated overflow-hidden rounded-lg border outline-hidden",
            isGripSelected && "ring-2 ring-blue-500",
          )}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 800 520"
            width="100%"
            style={{ maxHeight: 520, display: "block" }}
            className="bg-primary"
          >
            {/* IMPLEMENT: Render edges FIRST (so nodes draw on top).
                For each edge in GRAPH_EDGES:
                - Get from/to positions from the positions state
                - Draw an SVG <line> with:
                  - stroke: use a subtle color like "var(--border-color-primary-translucent)" or a light gray
                  - strokeWidth="1.5"
                  - Optional: add opacity for softer look
            */}

            {/* IMPLEMENT: Render nodes.
                For each node in GRAPH_NODES:
                - Get position from the positions state
                - Draw an SVG <g> group with transform={`translate(${pos.x}, ${pos.y})`}
                - Inside the group:
                  - <rect> for the node card:
                    - width ~160, height ~40, x=-80 (centered), y=-20
                    - rx="8" for rounded corners
                    - fill: "var(--background-color-elevated)" or "white"/"#1e1e1e" for light/dark
                    - stroke: "var(--border-color-primary-translucent)"
                    - strokeWidth="1"
                  - <circle> section color indicator:
                    - cx=-70, cy=0, r=4
                    - fill: SECTION_COLORS[node.section]
                  - <text> emoji:
                    - x=-54, y=5, fontSize=14
                  - <text> label:
                    - x=-38, y=5, fontSize=12
                    - fill: "var(--text-color-primary)"
                    - fontFamily: inherit
                - Attach pointer event handlers for dragging + click-to-navigate
                - Use cursor: "grab" (or "grabbing" when dragging)
            */}
          </svg>
        </div>
      </div>
    </div>
  );
}

// --- Block definition (FIXED — do not modify) ---

export const nodeGraphBlockDef: BlockDefinition = {
  type: "node-graph",
  slashCommand: {
    id: "node-graph",
    label: "Page Graph",
    description: "Visualize workspace pages as an interactive node graph.",
    icon: (
      <CmdIcon>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          className="text-secondary"
        >
          <circle
            cx="9"
            cy="5"
            r="2.5"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <circle
            cx="4"
            cy="13"
            r="2.5"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <circle
            cx="14"
            cy="13"
            r="2.5"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <line
            x1="7.5"
            y1="7"
            x2="5.5"
            y2="11"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <line
            x1="10.5"
            y1="7"
            x2="12.5"
            y2="11"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
      </CmdIcon>
    ),
    keywords: ["graph", "node", "diagram", "map", "pages", "visualization"],
    section: "inline",
  },
  Component: NodeGraphBlockComponent,
};
```

### Key implementation rules

- **No external graph library** — pure SVG + React state. The graph is small (8 nodes) so no force layout needed.
- **Positions are hardcoded** in `INITIAL_POSITIONS`. This guarantees a clean layout on every render.
- **Click vs drag distinction**: Track a `didDrag` ref. Set to `false` on pointerDown. Set to `true` if pointer moves > 3px. Only call `router.push()` on pointerUp if `!didDrag.current`.
- **Use `getScreenCTM()`** to convert pointer coordinates to SVG space for accurate dragging.
- **Use Notion semantic CSS variables** in SVG attributes: `var(--text-color-primary)`, `var(--background-color-elevated)`, `var(--border-color-primary-translucent)`.
- **Edges draw BEFORE nodes** in the SVG so nodes visually overlap the edges.

## Step 4: Register in blocks/index.ts

In `src/components/notion-kit/editor/blocks/index.ts`:

1. Add the import:

```tsx
import { nodeGraphBlockDef } from "./NodeGraphBlock";
```

2. Add to the `blockDefs` array:

```tsx
export const blockDefs: BlockDefinition[] = [
  // ... existing defs
  nodeGraphBlockDef,
];
```

## Verification

After implementation, verify all of these:

1. Type `/graph` or `/node` in the editor — "Page Graph" appears in the slash menu
2. Selecting it inserts the graph block + an empty paragraph below
3. All 8 nodes are visible with correct emojis and labels
4. Edges connect the related nodes
5. Dragging a node repositions it; edges follow the node in real time
6. Clicking a node (without dragging) navigates to that page's URL
7. Section color dots: gold for favorites, gray for private, blue for shared
8. Arrow keys navigate away from the block to adjacent editor blocks
9. Backspace on the block (when not interacting with nodes) deletes it
10. Drag handle appears on hover and can reorder the block
11. No console errors
