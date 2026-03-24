---
name: notion-patterns
description: Architecture guide for the Notion clone prototype. Use when building pages, adding block types, creating databases, or making anything feel Notion-like within src/app/eric/notion-clone/.
---

# Notion Clone Patterns

This guide covers the architecture of the Notion clone prototype at `src/app/eric/notion-clone/`. Use it when adding pages, block types, databases, sidebar items, AI features, or any UI that should feel like Notion.

## Mental Model

```
NotionShell (shell.tsx)
├─ SlipperySidebarLayout
│  ├─ Sidebar tabs: Home / Chat / Meetings / Inbox
│  └─ Main content area
│     ├─ PageTopBar (breadcrumbs, title, share)
│     └─ Page content (ContentPage or DatabasePage)
└─ Page registry: data.ts → pages[], agents[], chatGroups[], meetings[]
```

**Two page archetypes:**

- **ContentPage** — Rich editor with title + emoji + BlockEditor (daily notes, product handbook, etc.)
- **DatabasePage** — Structured data with table/board views, filters, peek modal (launch tracker, product ideas, etc.)

**State:** All persistent state uses `atomWithStorage` with `eric-nc-` prefix keys.

## How to Add a New Block Type

The block editor uses a **registry pattern**. Each block type is a single file in `src/components/notion-kit/editor/blocks/`. To add a new block type:

### Step 1: Define the block interface

In `src/components/notion-kit/editor/atoms.ts`, add an interface and include it in the `Block` union:

```tsx
export interface MyCustomBlock {
  id: string;
  type: "my-custom";
  content: string;
}

export type Block = ParagraphBlock | ListBlock | ... | MyCustomBlock;
```

### Step 2: Create the block file

Create `src/components/notion-kit/editor/blocks/MyCustomBlock.tsx`:

```tsx
"use client";

import { cn } from "@/utils/cn";
import {
  type MyCustomBlock as MyCustomBlockType,
  createBlockId,
} from "../atoms";
import { CmdIcon, DragHandle } from "./DragHandle";
import type { BlockComponentProps, BlockDefinition } from "./types";

function MyCustomBlockComponent({
  block,
  isDragging,
  wrapperRef,
  blockRef,
  updateBlock,
  insertAfter,
  remove,
  focusPrev,
  focusNext,
  startDrag,
  selectGrip,
  isGripSelected,
}: BlockComponentProps) {
  const custom = block as MyCustomBlockType;

  return (
    <div
      ref={wrapperRef}
      className={cn("pt-[8px] pb-[8px]", isDragging && "opacity-40")}
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
        {/* Your block content here */}
      </div>
    </div>
  );
}

export const myCustomBlockDef: BlockDefinition = {
  type: "my-custom",
  spacing: "pt-[8px] pb-[8px]",
  slashCommand: {
    id: "my-custom",
    label: "My Custom Block",
    description: "What this block does.",
    icon: (
      <CmdIcon>
        <span className="text-lg">🎨</span>
      </CmdIcon>
    ),
    keywords: ["custom", "my-custom"],
    section: "basic", // or "inline"
  },
  // markdownShortcut: "///",  // Optional
  Component: MyCustomBlockComponent,
};
```

### Step 3: Register in blocks/index.ts

In `src/components/notion-kit/editor/blocks/index.ts`, import and add to the `blockDefs` array:

```tsx
import { myCustomBlockDef } from "./MyCustomBlock";

export const blockDefs: BlockDefinition[] = [
  // ... existing defs
  myCustomBlockDef,
];
```

### Step 4: Handle transform in BlockEditor.tsx

In `src/components/notion-kit/editor/BlockEditor.tsx`, add a case to the `transformBlock` function:

```tsx
} else if (blockType === "my-custom") {
  next[blockIndex] = { id: newBlockId, type: "my-custom", content: "" };
}
```

That's it. The slash command menu, keyboard shortcuts, and markdown shortcuts are all auto-derived from the `blockDefs` array.

### BlockComponentProps Reference

Every block component receives these props:

| Prop                   | Type                   | Description                                  |
| ---------------------- | ---------------------- | -------------------------------------------- |
| `block`                | `Block`                | The block data (cast to your specific type)  |
| `blockIndex`           | `number`               | Position in the blocks array                 |
| `isGripSelected`       | `boolean`              | Whether the block is grip-selected           |
| `isDragging`           | `boolean`              | Whether the block is being dragged           |
| `wrapperRef`           | `(el) => void`         | Ref callback for the outer wrapper div       |
| `blockRef`             | `(el) => void`         | Ref callback for the editable element        |
| `listItemRef`          | `(id, el) => void`     | Ref callback for list items                  |
| `updateBlock`          | `(updates) => void`    | Update block data                            |
| `insertAfter`          | `(block) => void`      | Insert a new block after this one            |
| `remove`               | `() => void`           | Remove this block                            |
| `transform`            | `(type) => void`       | Transform to a different block type          |
| `focusPrev`            | `() => void`           | Focus the previous block                     |
| `focusNext`            | `() => void`           | Focus the next block                         |
| `mergeIntoPrev`        | `(text) => void`       | Merge text into previous block               |
| `markSaved`            | `() => void`           | Mark document as saved                       |
| `startDrag`            | `(e) => void`          | Start drag operation                         |
| `selectGrip`           | `() => void`           | Select this block via grip                   |
| `openSlashMenu`        | `(filterText) => void` | Open slash command menu                      |
| `closeSlashMenu`       | `() => void`           | Close slash command menu                     |
| `slashMenuOpen`        | `boolean`              | Whether slash menu is open for this block    |
| `executeSlashCommand`  | `() => void`           | Execute the currently selected slash command |
| `paragraphPlaceholder` | `string`               | Placeholder text for paragraph blocks        |
| `renderCalloutIcon`    | `fn`                   | Optional: custom callout icon renderer       |
| `renderDatabaseBlock`  | `fn`                   | Optional: custom database block renderer     |

## How to Add a New Page

1. Add a `PageEntry` to `data.ts`:

```tsx
{ emoji: "📋", label: "My Page", href: "/eric/notion-clone/my-page", section: "private", kind: "page" }
```

2. Create route: `src/app/eric/notion-clone/my-page/page.tsx`

3. For a **content page** (editor-based):

```tsx
"use client";
import { ContentPage } from "../components/ContentPage";
import { atomWithStorage } from "jotai/utils";
import { atom } from "jotai";
import type { Block } from "@/components/notion-kit/editor/atoms";

const titleAtom = atomWithStorage("eric-nc-my-page-title", "My Page");
const blocksAtom = atomWithStorage<Block[]>("eric-nc-my-page-blocks", []);
const lastSavedAtom = atom<Date | null>(null);

export default function Page() {
  return (
    <ContentPage
      emoji="📋"
      emojiStorageKey="eric-nc-my-page-emoji"
      titleAtom={titleAtom}
      blocksAtom={blocksAtom}
      lastSavedAtom={lastSavedAtom}
    />
  );
}
```

4. For a **database page** (table/board), see `launch-tracker/page.tsx` for a complete example. Use the `DatabasePageConfig<T>` interface.

## How to Add Sidebar Items

The sidebar content lives in `src/app/eric/notion-clone/components/HomeContent.tsx`. To add entries:

1. **Static items** — Add to the appropriate section (Favorites, Private, Shared, Agents) in `HomeContent`
2. **Dynamic items** — Use `SyncedSidebarItem` from `components/SyncedSidebarItem.tsx` for items with live-updating emoji and title:

```tsx
<SyncedSidebarItem
  href="/eric/notion-clone/my-page"
  defaultEmoji="📋"
  emojiStorageKey="eric-nc-my-page-emoji"
  titleAtom={titleAtom}
  defaultTitle="My Page"
/>
```

3. **New sidebar sections** — Add a new `CollapsibleGroup` in `HomeContent`:

```tsx
<CollapsibleGroup
  defaultOpen
  title="My Section"
  actionIcon={<PlusIcon className="size-4" />}
  onAction={() => {
    /* handle action */
  }}
>
  {/* sidebar items */}
</CollapsibleGroup>
```

## AI Features

The chat page uses `useChat` from `@ai-sdk/react`. API routes are in `src/app/(root)/api/chat/`.

```tsx
import { useChat } from "@ai-sdk/react";

const { messages, input, handleInputChange, handleSubmit } = useChat({
  api: "/api/chat",
});
```

## Database Page Config Reference

The `DatabasePageConfig<T>` interface (`src/app/eric/notion-clone/components/DatabasePage.tsx`):

| Field                  | Type                         | Description                           |
| ---------------------- | ---------------------------- | ------------------------------------- |
| `defaultEmoji`         | `string`                     | Initial emoji icon                    |
| `emojiStorageKey`      | `string`                     | localStorage key for emoji            |
| `titleStorageKey`      | `string`                     | localStorage key for title            |
| `defaultTitle`         | `string`                     | Default page title                    |
| `description`          | `string`                     | Subtitle text below title             |
| `initialRows`          | `T[]`                        | Starting data                         |
| `createRow`            | `() => T`                    | Factory for new rows                  |
| `tableColumns`         | `DatabaseColumn<T>[]`        | Column definitions for table view     |
| `tableTitle`           | `string`                     | Title shown in table header           |
| `boardColumns`         | `BoardColumn[]`              | Kanban column definitions             |
| `groupByField`         | `keyof T`                    | Field to group by in board view       |
| `views`                | `DatabaseViewTab[]`          | View tabs (table, board)              |
| `getProperties`        | `(row: T) => PageProperty[]` | Properties for peek modal/detail page |
| `getTitle`             | `(row: T) => string`         | Row title accessor                    |
| `titleField`           | `keyof T`                    | Field to update when title is edited  |
| `renderBoardCard`      | `(row: T) => ReactNode`      | Board card content renderer           |
| `detailHrefPrefix`     | `string`                     | URL prefix for detail pages           |
| `bodyStorageKeyPrefix` | `string`                     | localStorage prefix for body content  |
| `peekIcon`             | `string`                     | Emoji shown in peek modal             |

## Detail Pages

For database detail routes (`[slug]/page.tsx`), use `DatabaseDetailPage`:

```tsx
"use client";
import { DatabaseDetailPage } from "../../components/DatabaseDetailPage";
import { rows, getMyProperties } from "../page";

export default function DetailPage() {
  return (
    <DatabaseDetailPage
      rows={rows}
      getTitle={(r) => r.title}
      getProperties={getMyProperties}
      icon="📄"
      bodyStorageKeyPrefix="eric-nc-my-database"
    />
  );
}
```

## Component Reference

| Component            | Path                                | Use For                    |
| -------------------- | ----------------------------------- | -------------------------- |
| `ContentPage`        | `components/ContentPage.tsx`        | Rich editor pages          |
| `DatabasePage`       | `components/DatabasePage.tsx`       | Table/board data pages     |
| `DatabaseDetailPage` | `components/DatabaseDetailPage.tsx` | `[slug]` detail routes     |
| `BoardView`          | `components/BoardView.tsx`          | Kanban board layout        |
| `PagePeekModal`      | `components/PagePeekModal.tsx`      | Quick preview modal        |
| `StatusBadge`        | `components/StatusBadge.tsx`        | Colored status pills       |
| `EditableTitle`      | `components/EditableTitle.tsx`      | Persistent editable h1     |
| `EmojiPicker`        | `components/EmojiPicker.tsx`        | Page emoji selector        |
| `FilterBar`          | `components/FilterBar.tsx`          | Filter toggle pills        |
| `BlockEditor`        | `@/components/notion-kit/editor`    | Block-based content editor |
| `TitleEditor`        | `@/components/notion-kit/editor`    | Document title editor      |

## Design Tokens

- **Colors:** `text-primary`, `text-secondary`, `text-tertiary`, `text-quaternary`, `bg-primary`, `bg-secondary`, `bg-elevated`, `bg-tertiary`
- **Hover:** `hover:bg-tertiary` (sidebar), `hover:bg-secondary-translucent` (menus)
- **Borders:** `border-primary-translucent` (subtle), `border-primary` (strong)
- **Cards:** `bg-elevated border-primary-translucent rounded-lg shadow-xs hover:shadow-sm`
- **Content width:** `max-w-3xl` (editor pages), `max-w-5xl` (database pages)
- **Drag handles:** `group/block` container + `group-hover/block:opacity-100` handle
- **StatusBadge:** Define `Record<Status, { dot, bg, text }>`, pass to `<StatusBadge>`
- **Emoji persistence:** `EmojiPicker` + `atomWithStorage`
