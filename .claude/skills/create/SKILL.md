---
allowed-tools: Read, Write, Bash(bun run:*), Bash(mkdir:*), Glob, Grep, Skill(find-icon)
argument-hint: [name]
description: Create a new prototype directory with page.tsx and metadata.json files
---

# Create Prototype

Create a new prototype with the name: $ARGUMENTS

## Instructions

### Step 1: Determine the Prototype Name

- If a name is provided above, use it
- If no name is given, derive one from the request context:
  - "settings dialog in notion" → "Notion Settings Dialog"
  - "explore a new chat input design" → "Chat Input Exploration"
  - Keep names concise (2-4 words) and descriptive

### Step 2: Read the Username

Read the `.playground` file at the project root to get the current username:

```
USERNAME=<username>
```

### Step 3: Create the Prototype Directory

Create a new directory at:

```
src/app/<username>/<slug>/
```

Where `<slug>` is the slugified name (lowercase, hyphens, no special chars).

### Step 4: Create Required Files

#### page.tsx

Create a `page.tsx` file with a basic React component. Start with:

```tsx
"use client";

import { Agentation } from "@/components/playground-kit";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold">Prototype Name</h1>
      {/* Prototype content goes here */}
      <Agentation />
    </main>
  );
}
```

#### metadata.json

Create a `metadata.json` file with title and description:

```json
{
  "title": "Prototype Name",
  "description": ""
}
```

**Note**: Timestamps (`createdAt`, `updatedAt`) are managed automatically in Notion when the prototype is synced.

#### layout.tsx

Create a `layout.tsx` file for dynamic page title metadata:

```tsx
import { getPrototypePageTitle } from "@/root/lib/fs-utils";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = await getPrototypePageTitle("<username>", "<slug>");
  return { title };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
```

Replace `<username>` and `<slug>` with the actual values.

### Step 4.5: Rebuild static data

Run the script to rebuild static data so that the new prototype appears in the root page prototypes list:

```bash
bun run scripts/generate-static-data.ts
```

### Step 5: Search for Existing Components

**Before writing any UI code**, search the codebase for reusable components:

1. Search `src/components/` for UI primitives (Button, Dialog, Input, etc.)
2. Search `src/nds/` for Notion Design System components
3. Search existing prototypes in the user's directory for similar patterns
4. Use grep/glob to find components that match your needs

Example searches:

- Building a dialog? Search for `Dialog`, `Modal`, `Sheet`
- Building a form? Search for `Input`, `Select`, `Checkbox`
- Building a list? Search for `List`, `Item`, `Row`

### Step 6: Use Existing Icons

**NEVER create new SVG icon components.** Use the **find-icon** skill to search for icons:

```bash
bun run .claude/skills/find-icon/scripts/search-icons.ts <query>
```

Examples:

```bash
bun run .claude/skills/find-icon/scripts/search-icons.ts search
bun run .claude/skills/find-icon/scripts/search-icons.ts settings
bun run .claude/skills/find-icon/scripts/search-icons.ts close
```

Then import and use the icon as shown in the search results:

```tsx
import { Icon } from "@nds-icons";
import { magnifyingGlassIcon } from "@nds-icons/magnifyingGlass/default.icon";

<Icon icon={magnifyingGlassIcon} />;
```

If you cannot find an appropriate icon, use a text placeholder or ask the user - do NOT create bespoke SVG components.

### Step 7: Build the Prototype

After creating the scaffold and researching existing components:

1. Confirm the prototype was created and provide the URL: `http://localhost:4000/<username>/<slug>`
2. Immediately start implementing the UI based on the user's description
3. **Prioritize existing components** - prioritize reusing existing components when possible; you can always ask the user for clarification if you're unsure if they want something new or to reuse something that already exists
4. Follow the codebase conventions from CLAUDE.md (Tailwind, function declarations, etc.)

## Notion Clone Pages vs Standalone Prototypes

This `/create` skill is for **standalone prototypes** (`src/app/<username>/<slug>/`). If instead you need to add a page **within the Notion clone** (`src/app/eric/notion-clone/`), use the `notion-patterns` skill instead — it covers adding pages to `data.ts`, using `ContentPage`/`DatabasePage` components, and adding custom block types.

## Reference Code

For implementation patterns, refer to:

- `src/app/(root)/api/create-prototype/route.ts`

## Examples

### Example 1: Explicit name

User: "/create Model Picker"
→ Creates `src/app/brian/model-picker/`

### Example 2: Derived name

User: "/create exploring a new sidebar design"
→ Derives name "Sidebar Design" → Creates `sidebar-design/`

### Example 3: Prototype with Figma URL

User: "/create Floaty Chat" followed by "/figma https://figma.com/design/abc123..."

1. First, create the scaffold:
   - `src/app/brian/floaty-chat/page.tsx`
   - `src/app/brian/floaty-chat/metadata.json`

2. Then, use `/figma [url]` to implement the Figma design
