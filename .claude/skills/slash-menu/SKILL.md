---
name: slash-menu
description: How to add new block types and slash commands to the notion-clone editor. Use when creating new block types, extending the slash command menu, or modifying the editor's block system.
---

# Slash Menu & Block System

## When to Use

- Adding a new block type to the editor
- Adding a new slash command
- Modifying block rendering or behavior
- Understanding the editor's block architecture

## Architecture Overview

The block editor lives in `src/components/notion-kit/editor/` and uses a **registry pattern**:

1. **Block types** are defined in `atoms.ts` as a discriminated union (`Block`)
2. **Block components** live in `blocks/` — each file exports a `BlockDefinition`
3. **The registry** (`blocks/index.ts`) collects all definitions into `blockRegistry` (a `Map<Block["type"], BlockDefinition>`) and `slashCommands` (an array for the slash menu)
4. **`BlockEditor.tsx`** renders blocks by looking them up in the registry and passes a standard set of props

## Key Files

| File | Purpose |
|------|---------|
| `editor/atoms.ts` | Block type definitions (TypeScript interfaces + union) |
| `editor/blocks/types.ts` | `BlockDefinition`, `BlockComponentProps`, `SlashCommandEntry` interfaces |
| `editor/blocks/index.ts` | Registry: `blockRegistry`, `slashCommands`, `markdownShortcuts` |
| `editor/blocks/ParagraphBlock.tsx` | Paragraph + heading blocks (h1–h4) |
| `editor/blocks/BulletedListBlock.tsx` | Bulleted list block |
| `editor/blocks/CalloutBlock.tsx` | Callout block with emoji icon |
| `editor/blocks/DividerBlock.tsx` | Horizontal divider block |
| `editor/blocks/DatabaseBlock.tsx` | Inline database block |
| `editor/BlockEditor.tsx` | Main editor: renders blocks, handles slash menu, drag-and-drop |
| `editor/SlashCommandMenu.tsx` | Slash command popup UI |

## How to Add a New Block Type

### Step 1: Define the block type in `atoms.ts`

Add a new interface and include it in the `Block` union:

```typescript
// In atoms.ts
export interface MyNewBlock {
  id: string;
  type: "my_new_block";
  text: string;
  // ... any custom fields
}

export type Block =
  | ParagraphBlock
  | ListBlock
  | CalloutBlock
  | DividerBlock
  | DatabaseBlock
  | MyNewBlock;  // <-- add here
```

### Step 2: Create the block component

Create `editor/blocks/MyNewBlock.tsx`:

```typescript
"use client";

import type { BlockComponentProps, BlockDefinition, SlashCommandEntry } from "./types";
import { DragHandle } from "./DragHandle";
// ... your component implementation

function MyNewBlockComponent(props: BlockComponentProps) {
  const block = props.block as MyNewBlock;
  // Render your block...
  return (
    <div
      ref={props.wrapperRef}
      data-block-wrapper={block.id}
      className={`group/block relative pl-[52px] ${props.isDragging ? "opacity-30" : ""}`}
    >
      <DragHandle
        onGripClick={props.selectGrip}
        onGripPointerDown={props.startDrag}
        isSelected={props.isGripSelected}
      />
      {/* Your block content */}
    </div>
  );
}

// Slash command entry (what appears in the / menu)
const slashCommand: SlashCommandEntry = {
  id: "my_new_block",
  label: "My New Block",
  description: "Description shown in slash menu",
  icon: <YourIconComponent />,
  keywords: ["my", "new", "block"],  // search terms
  section: "basic",  // "basic" or "inline"
};

// Export the block definition
export const myNewBlockDef: BlockDefinition = {
  type: "my_new_block",
  slashCommand,
  // Optional: markdownShortcut: ">>>",  // typing this + space converts to your block
  Component: MyNewBlockComponent,
};
```

### Step 3: Register in `blocks/index.ts`

```typescript
import { myNewBlockDef } from "./MyNewBlock";

export const blockDefs: BlockDefinition[] = [
  // ... existing defs
  myNewBlockDef,  // <-- add here
];
```

### Step 4: Handle transform in `BlockEditor.tsx`

In the `transformBlock` function, add a case for your new block type:

```typescript
} else if (blockType === "my_new_block") {
  next[blockIndex] = { id: newBlockId, type: "my_new_block", text: "" };
}
```

## Existing Block Types

| Type | Slash Label | Markdown Shortcut | Description |
|------|------------|-------------------|-------------|
| `paragraph` | Text | (none) | Plain text paragraph |
| `h1` | Heading 1 | `#` | Large heading |
| `h2` | Heading 2 | `##` | Medium heading |
| `h3` | Heading 3 | `###` | Small heading |
| `h4` | Heading 4 | `####` | Smallest heading |
| `ul` | Bulleted list | `-` | Bulleted list with items |
| `callout` | Callout | (none) | Callout box with emoji |
| `divider` | Divider | `---` | Horizontal rule |
| `database` | Database | (none) | Inline database view |

## BlockComponentProps (all props passed to every block)

Every block component receives these props:

- `block` — The block data object
- `blockIndex` — Position in the blocks array
- `isGripSelected` / `isDragging` — UI state flags
- `wrapperRef` / `blockRef` / `listItemRef` — Ref callbacks for the editor
- `updateBlock(updates)` — Merge updates into the block
- `insertAfter(newBlock)` — Insert a block after this one
- `remove()` — Remove this block
- `transform(type)` — Convert to a different block type
- `focusPrev()` / `focusNext()` — Move focus
- `markSaved()` — Signal that a change was made
- `mergeIntoPrev(text)` — Merge text into previous block on backspace
- `openSlashMenu(filterText)` / `closeSlashMenu()` — Slash menu control
- `slashMenuOpen` / `slashMenuFilterText` / `slashMenuSelectedIndex` — Slash menu state
- `setSlashMenuIndex(index)` / `executeSlashCommand(type)` — Slash menu actions
- `selectGrip()` / `startDrag(e)` — Drag handle actions
- `renderCalloutIcon?` / `renderDatabaseBlock?` — Optional render callbacks
- `paragraphPlaceholder` — Placeholder text for empty paragraphs
- `onBackspaceAtStart?` — Callback when backspace at the start of the first block

## SlashCommandEntry shape

```typescript
interface SlashCommandEntry {
  id: string;           // unique ID
  label: string;        // display name in menu
  description: string;  // subtitle in menu
  icon: React.ReactNode; // icon element
  keywords: string[];   // search keywords
  shortcut?: string;    // keyboard shortcut hint
  section: "basic" | "inline"; // menu section
}
```

## Tips

- **Icon search**: Run `bun run search-icon <keyword>` to find NDS icons
- **Section grouping**: The slash menu groups commands by `section` ("basic" or "inline")
- **Filter**: Commands are filtered by label, description, and keywords
- **Markdown shortcuts**: Map a string prefix (like `#` or `-`) to auto-convert on space
- **Content editable**: Most text blocks use `contentEditable` divs — see `ParagraphBlock.tsx` for the full keyboard handling pattern (Enter, Backspace, slash detection, arrow keys)
