---
name: find-icon
description: Search for icons in the NDS icon library. Use when you need to find an icon by name, look up import paths, or search for icons matching a keyword like "search", "settings", "arrow", "close". Run the search script to find available icons. This is a utility skill - when building prototypes, the "create" command will call this skill as needed.
---

# Find Icon

**This is a utility skill for icon lookup.** If the user is asking to create, make, or build a prototype or UI, use the **create** command instead (which will call this skill when needed).

## When to Use

Use this skill when:

- You need to look up an icon name during development
- You're unsure if an icon exists
- You want to verify the correct import path for an icon

**DO NOT use this skill** when the user is asking to:

- Create/make/build a prototype → use **create** instead
- Build a UI with icons → use **create** instead
- Make something with buttons/icons → use **create** instead

**IMPORTANT**: Always search for icons before importing them. Never guess icon names.

## Instructions

### Step 1: Run the Icon Search Script

Use the search script to find icons by name or synonym:

```bash
bun run .claude/skills/find-icon/scripts/search-icons.ts <query>
```

Examples:

```bash
# Search for search/magnifying glass icons
bun run .claude/skills/find-icon/scripts/search-icons.ts search

# Search for arrow icons pointing up
bun run .claude/skills/find-icon/scripts/search-icons.ts arrow up

# Search for notification icons
bun run .claude/skills/find-icon/scripts/search-icons.ts notification

# Search for close/x icons
bun run .claude/skills/find-icon/scripts/search-icons.ts close
```

### Step 2: Use the Correct Import

The script outputs the exact import path. Use it like this:

```tsx
import { Icon } from "@nds-icons";
import { magnifyingGlassIcon } from "@nds-icons/magnifyingGlass/default.icon";

// In your component:
<Icon icon={magnifyingGlassIcon} />;
```

### Step 3: Choose the Right Variant

Icons come in multiple variants:

- `default` - Standard size (20x20)
- `small` - Smaller size (16x16)
- `fill` - Filled version
- `fillSmall` - Small filled version

Import the variant you need:

```tsx
import { magnifyingGlassIcon } from "@nds-icons/magnifyingGlass/default.icon";
import { magnifyingGlassIcon as magnifyingGlassSmallIcon } from "@nds-icons/magnifyingGlass/small.icon";
import { magnifyingGlassIcon as magnifyingGlassFillIcon } from "@nds-icons/magnifyingGlass/fill.icon";
```

## Common Icon Mappings

Here are frequently confused icon names:

| You might search for | Actual icon name  |
| -------------------- | ----------------- |
| search               | magnifyingGlass   |
| close, x             | xMark             |
| arrow up             | arrowStraightUp   |
| arrow down           | arrowStraightDown |
| check                | checkmark         |
| settings, gear       | gear              |
| notification         | bell              |
| menu, hamburger      | hamburgerMenu     |
| plus                 | plus              |
| minus                | minus             |
| edit                 | pencil            |
| delete               | trash             |
| copy                 | duplicate         |
| link                 | link              |
| send                 | paperPlane        |

## Fallback: Manual Search

If the script doesn't find what you need, search manually:

```bash
# List all available icons
ls src/nds-icons/src/

# Search icon names containing a term
ls src/nds-icons/src/ | grep -i arrow

# Read an icon's synonyms
cat src/nds-icons/src/magnifyingGlass/index.ts
```

## Never Do This

**DO NOT** guess or hallucinate icon names:

```tsx
// WRONG - these icons don't exist
import { searchIcon } from "@nds-icons/search/default.icon";
import { arrowUpIcon } from "@nds-icons/arrowUp/default.icon";
import { closeIcon } from "@nds-icons/close/default.icon";
```

**ALWAYS** verify the icon exists first by running the search script.
