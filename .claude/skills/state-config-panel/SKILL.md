---
name: state-config-panel
description: Add a Dynamic Island-style floating control panel for prototype state management. Use when creating debug controls, state toggles, settings panels, or when the user mentions "config panel", "debug panel", "state controls", or wants to expose Jotai atoms for testing.
---

# StateConfigPanel

A Dynamic Island-style floating control panel for prototype state management. Use this for debug controls, state toggles, and quick settings panels during prototype development.

## When to Use

- **Debug controls** - Toggle features, switch between states during development
- **Prototype configuration** - Let reviewers adjust parameters without code changes
- **State visualization** - Show and control Jotai atoms in real-time
- **Quick settings** - Expose configuration options in a floating panel

## Import

All components are exported from `@/components/playground-kit`:

```tsx
import {
  StateConfigPanel,
  PanelCheckbox,
  PanelRadioGroup,
  PanelButton,
  PanelSection,
  PanelDivider,
  PanelCheckboxItem,
  PanelRadioItem,
} from "@/components/playground-kit";
```

## Basic Example

```tsx
import { atom } from "jotai";
import {
  StateConfigPanel,
  PanelCheckbox,
  PanelRadioGroup,
  PanelSection,
  PanelDivider,
  PanelButton,
} from "@/components/playground-kit";

const showDebugAtom = atom(false);
const themeAtom = atom<"light" | "dark">("light");

function MyPrototype() {
  return (
    <>
      {/* Your prototype content */}

      <StateConfigPanel title="Controls">
        <PanelCheckbox atom={showDebugAtom} label="Show debug info" />
        <PanelSection label="Theme">
          <PanelRadioGroup
            atom={themeAtom}
            name="theme"
            options={[
              { value: "light", label: "Light" },
              { value: "dark", label: "Dark" },
            ]}
          />
        </PanelSection>
        <PanelDivider />
        <PanelButton onClick={() => console.log("Reset!")}>Reset</PanelButton>
      </StateConfigPanel>
    </>
  );
}
```

## StateConfigPanel Props

| Prop               | Type                                                           | Default          | Description                   |
| ------------------ | -------------------------------------------------------------- | ---------------- | ----------------------------- |
| `title`            | `string`                                                       | `"State"`        | Panel title in header         |
| `position`         | `"bottom right" \| "bottom left" \| "top right" \| "top left"` | `"bottom right"` | Screen corner position        |
| `defaultMinimized` | `boolean`                                                      | `false`          | Start in collapsed pill state |
| `children`         | `React.ReactNode`                                              | required         | Panel content                 |

## Available Components

### StateConfigPanel

Main container panel. Renders as a floating pill that expands on click.

### PanelCheckbox

Checkbox bound to a Jotai boolean atom. Automatically syncs state.

```tsx
const featureAtom = atom(false);

<PanelCheckbox atom={featureAtom} label="Enable feature" />;
```

### PanelCheckboxItem

Controlled checkbox without atom binding. Use when you need manual state control.

```tsx
const [checked, setChecked] = useState(false);

<PanelCheckboxItem
  checked={checked}
  onChange={setChecked}
  label="Manual checkbox"
/>;
```

### PanelRadioGroup

Radio buttons bound to a Jotai atom. Takes an array of options.

```tsx
const modeAtom = atom<"auto" | "manual" | "off">("auto");

<PanelRadioGroup
  atom={modeAtom}
  name="mode"
  options={[
    { value: "auto", label: "Auto" },
    { value: "manual", label: "Manual" },
    { value: "off", label: "Off" },
  ]}
/>;
```

### PanelRadioItem

Controlled radio button without atom binding.

```tsx
<PanelRadioItem
  checked={mode === "auto"}
  onChange={() => setMode("auto")}
  label="Auto"
  name="mode"
  value="auto"
/>
```

### PanelButton

Action button with consistent styling.

```tsx
<PanelButton onClick={() => resetState()}>Reset</PanelButton>
```

### PanelSection

Labeled section wrapper for grouping related controls.

```tsx
<PanelSection label="Display Options">
  <PanelCheckbox atom={showGridAtom} label="Show grid" />
  <PanelCheckbox atom={showLabelsAtom} label="Show labels" />
</PanelSection>
```

### PanelDivider

Horizontal divider line for visual separation.

```tsx
<PanelCheckbox atom={enabledAtom} label="Enabled" />
<PanelDivider />
<PanelButton onClick={reset}>Reset All</PanelButton>
```

## Keyboard Shortcut

Press `Cmd+Shift+.` (or `Ctrl+Shift+.` on Windows) to toggle panel visibility.

## Complete Example with Multiple Sections

```tsx
"use client";

import { atom, useAtomValue } from "jotai";
import {
  StateConfigPanel,
  PanelCheckbox,
  PanelRadioGroup,
  PanelSection,
  PanelDivider,
  PanelButton,
} from "@/components/playground-kit";

// Define atoms for state
const debugModeAtom = atom(false);
const showOverlayAtom = atom(false);
const densityAtom = atom<"compact" | "comfortable" | "spacious">("comfortable");
const themeAtom = atom<"light" | "dark" | "system">("system");

export default function PrototypePage() {
  const debugMode = useAtomValue(debugModeAtom);
  const showOverlay = useAtomValue(showOverlayAtom);
  const density = useAtomValue(densityAtom);

  return (
    <div className="min-h-screen p-8">
      {/* Your prototype content that uses the atoms */}
      <div className={debugMode ? "border border-red-500" : ""}>
        <h1>My Prototype</h1>
        {showOverlay && <div className="fixed inset-0 bg-black/50" />}
        <p>Density: {density}</p>
      </div>

      {/* Config panel */}
      <StateConfigPanel title="Debug Controls" position="bottom right">
        <PanelSection label="Debug">
          <PanelCheckbox atom={debugModeAtom} label="Debug mode" />
          <PanelCheckbox atom={showOverlayAtom} label="Show overlay" />
        </PanelSection>

        <PanelDivider />

        <PanelSection label="Density">
          <PanelRadioGroup
            atom={densityAtom}
            name="density"
            options={[
              { value: "compact", label: "Compact" },
              { value: "comfortable", label: "Comfortable" },
              { value: "spacious", label: "Spacious" },
            ]}
          />
        </PanelSection>

        <PanelDivider />

        <PanelSection label="Theme">
          <PanelRadioGroup
            atom={themeAtom}
            name="theme"
            options={[
              { value: "light", label: "Light" },
              { value: "dark", label: "Dark" },
              { value: "system", label: "System" },
            ]}
          />
        </PanelSection>

        <PanelDivider />

        <PanelButton onClick={() => window.location.reload()}>
          Reload Page
        </PanelButton>
      </StateConfigPanel>
    </div>
  );
}
```

## Tips

1. **Keep atoms in a separate file** - Define atoms in `atoms.ts` for reuse across components
2. **Use descriptive labels** - Make it clear what each control does
3. **Group related controls** - Use `PanelSection` to organize logically
4. **Position thoughtfully** - Choose a corner that doesn't overlap important UI
5. **Start minimized for demos** - Set `defaultMinimized={true}` for polished presentations
