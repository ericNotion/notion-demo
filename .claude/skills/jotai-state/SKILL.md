---
name: jotai-state
description: Manage state with Jotai atoms. Use when creating shared state, persistent state with localStorage, derived/computed values, or when the user mentions "atoms", "global state", "shared state", or "state management".
---

# Jotai State Management

Jotai provides atomic state management for React with a minimal API. Use atoms for shared state across components.

## When to Use

- **Shared state** - State needed by multiple components
- **Persistent state** - State that survives page reloads (localStorage)
- **Derived state** - Computed values based on other atoms
- **Form state** - Complex forms with interdependent fields

## Installation

Jotai is already installed in this project. No additional installation needed.

## Core Concepts

### Creating Atoms

Define atoms in a nearby `atoms.ts` file:

```tsx
// atoms.ts
import { atom } from "jotai";

// Primitive atom
export const countAtom = atom(0);

// Typed atom
export const userNameAtom = atom<string>("");

// Boolean atom
export const isOpenAtom = atom(false);
```

### Using Atoms in Components

Three hooks for different use cases:

```tsx
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { countAtom } from "./atoms";

// Read and write
function Counter() {
  const [count, setCount] = useAtom(countAtom);
  return <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
}

// Read only (prevents unnecessary re-renders)
function Display() {
  const count = useAtomValue(countAtom);
  return <span>{count}</span>;
}

// Write only (for action buttons)
function IncrementButton() {
  const setCount = useSetAtom(countAtom);
  return <button onClick={() => setCount((c) => c + 1)}>+1</button>;
}
```

## Persistent Storage

Use `atomWithStorage` for localStorage persistence:

```tsx
import { atomWithStorage } from "jotai/utils";

// Persists to localStorage under key "theme"
export const themeAtom = atomWithStorage<"light" | "dark">("theme", "light");

// Persists user preferences
export const settingsAtom = atomWithStorage("settings", {
  notifications: true,
  soundEnabled: false,
});
```

## Derived Atoms

Create computed values from other atoms:

```tsx
import { atom } from "jotai";

const itemsAtom = atom<string[]>([]);

// Read-only derived atom
const itemCountAtom = atom((get) => get(itemsAtom).length);

// Derived atom with write
const filteredItemsAtom = atom(
  (get) => get(itemsAtom).filter((item) => item.length > 0),
  (get, set, newItems: string[]) => set(itemsAtom, newItems),
);
```

## Async Atoms

Handle async data with atoms:

```tsx
import { atom } from "jotai";

// Async read
const userDataAtom = atom(async () => {
  const response = await fetch("/api/user");
  return response.json();
});

// Use with Suspense or handle loading state
function UserProfile() {
  const userData = useAtomValue(userDataAtom);
  return <div>{userData.name}</div>;
}
```

## Common Patterns

### Toggle Pattern

```tsx
const isOpenAtom = atom(false);

// In component
const [isOpen, setIsOpen] = useAtom(isOpenAtom);
const toggle = () => setIsOpen((prev) => !prev);
```

### Reset Pattern

```tsx
import { useSetAtom } from "jotai";
import { RESET } from "jotai/utils";
import { atomWithStorage } from "jotai/utils";

const settingsAtom = atomWithStorage("settings", defaultSettings);

function ResetButton() {
  const setSettings = useSetAtom(settingsAtom);
  return <button onClick={() => setSettings(RESET)}>Reset</button>;
}
```

### Atom Family Pattern

For dynamic atoms based on parameters:

```tsx
import { atomFamily } from "jotai/utils";

const todoAtomFamily = atomFamily((id: string) =>
  atom({ id, text: "", completed: false }),
);

// Usage
const todoAtom = todoAtomFamily("todo-1");
```

## File Organization

```
src/app/username/prototype-name/
├── page.tsx      # Components using atoms
├── atoms.ts      # Atom definitions
└── components/   # Component files
```

## Integration with StateConfigPanel

Atoms work seamlessly with StateConfigPanel for debug controls:

```tsx
import { atom } from "jotai";
import { StateConfigPanel, PanelCheckbox } from "@/components/playground-kit";

const debugModeAtom = atom(false);

function MyPrototype() {
  return (
    <>
      {/* Your content */}
      <StateConfigPanel title="Debug">
        <PanelCheckbox atom={debugModeAtom} label="Debug mode" />
      </StateConfigPanel>
    </>
  );
}
```

## References

- [Jotai Documentation](https://jotai.org/)
- [Jotai Utils](https://jotai.org/docs/utilities/storage)
