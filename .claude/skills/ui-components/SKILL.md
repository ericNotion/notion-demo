---
name: ui-components
description: Use the UI component library for building interfaces. Use when creating UIs, adding buttons, dialogs, forms, dropdowns, or when the user mentions specific components like "button", "dialog", "input", "dropdown", "tabs", or needs UI elements.
---

# UI Component Library

This project has 50+ pre-built components in `@/components/ui`. **Prefer these over building custom UI.**

## When to Use

- **Any UI element** - Check this library first
- **Forms** - Input, Select, Checkbox, Radio, etc.
- **Overlays** - Dialog, Sheet, Popover, Dropdown
- **Feedback** - Toast (Sonner), Alert, Progress
- **Layout** - Card, Tabs, Accordion, Table

## Import Pattern

```tsx
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
```

## Complete Component Catalog

### Actions

| Component   | Import                         | Description                          |
| ----------- | ------------------------------ | ------------------------------------ |
| Button      | `@/components/ui/button`       | Primary action element with variants |
| ButtonGroup | `@/components/ui/button-group` | Grouped button set                   |
| Toggle      | `@/components/ui/toggle`       | Toggle button                        |
| ToggleGroup | `@/components/ui/toggle-group` | Exclusive/multi toggle set           |

### Form Inputs

| Component    | Import                          | Description            |
| ------------ | ------------------------------- | ---------------------- |
| Input        | `@/components/ui/input`         | Text input field       |
| Textarea     | `@/components/ui/textarea`      | Multi-line text        |
| Select       | `@/components/ui/select`        | Styled dropdown select |
| NativeSelect | `@/components/ui/native-select` | Native select element  |
| Checkbox     | `@/components/ui/checkbox`      | Checkbox with label    |
| RadioGroup   | `@/components/ui/radio-group`   | Radio button group     |
| Switch       | `@/components/ui/switch`        | Toggle switch          |
| Slider       | `@/components/ui/slider`        | Range slider           |
| InputOTP     | `@/components/ui/input-otp`     | OTP/PIN input          |
| Calendar     | `@/components/ui/calendar`      | Date picker            |

### Form Helpers

| Component  | Import                        | Description                    |
| ---------- | ----------------------------- | ------------------------------ |
| Label      | `@/components/ui/label`       | Form label                     |
| Field      | `@/components/ui/field`       | Field wrapper with label/error |
| Form       | `@/components/ui/form`        | react-hook-form integration    |
| InputGroup | `@/components/ui/input-group` | Input with addons              |

### Overlays & Dialogs

| Component   | Import                         | Description            |
| ----------- | ------------------------------ | ---------------------- |
| Dialog      | `@/components/ui/dialog`       | Modal dialog           |
| AlertDialog | `@/components/ui/alert-dialog` | Confirmation dialog    |
| Sheet       | `@/components/ui/sheet`        | Slide-out panel        |
| Drawer      | `@/components/ui/drawer`       | Bottom drawer (mobile) |
| Popover     | `@/components/ui/popover`      | Floating popover       |
| HoverCard   | `@/components/ui/hover-card`   | Hover preview card     |
| Tooltip     | `@/components/ui/tooltip`      | Tooltip on hover       |

### Menus & Navigation

| Component      | Import                            | Description            |
| -------------- | --------------------------------- | ---------------------- |
| DropdownMenu   | `@/components/ui/dropdown-menu`   | Dropdown menu          |
| ContextMenu    | `@/components/ui/context-menu`    | Right-click menu       |
| Menubar        | `@/components/ui/menubar`         | Application menubar    |
| NavigationMenu | `@/components/ui/navigation-menu` | Nav menu               |
| Command        | `@/components/ui/command`         | Command palette (cmdk) |
| Breadcrumb     | `@/components/ui/breadcrumb`      | Breadcrumb navigation  |
| Pagination     | `@/components/ui/pagination`      | Page navigation        |
| Tabs           | `@/components/ui/tabs`            | Tab navigation         |
| Sidebar        | `@/components/ui/sidebar`         | Sidebar navigation     |

### Layout & Structure

| Component   | Import                         | Description          |
| ----------- | ------------------------------ | -------------------- |
| Card        | `@/components/ui/card`         | Content card         |
| Accordion   | `@/components/ui/accordion`    | Collapsible sections |
| Collapsible | `@/components/ui/collapsible`  | Single collapsible   |
| Table       | `@/components/ui/table`        | Data table           |
| Resizable   | `@/components/ui/resizable`    | Resizable panels     |
| ScrollArea  | `@/components/ui/scroll-area`  | Custom scrollbar     |
| Separator   | `@/components/ui/separator`    | Divider line         |
| AspectRatio | `@/components/ui/aspect-ratio` | Fixed aspect ratio   |

### Feedback & Status

| Component | Import                     | Description         |
| --------- | -------------------------- | ------------------- |
| Alert     | `@/components/ui/alert`    | Alert message       |
| Badge     | `@/components/ui/badge`    | Status badge        |
| Progress  | `@/components/ui/progress` | Progress bar        |
| Skeleton  | `@/components/ui/skeleton` | Loading skeleton    |
| Spinner   | `@/components/ui/spinner`  | Loading spinner     |
| Sonner    | `@/components/ui/sonner`   | Toast notifications |
| Empty     | `@/components/ui/empty`    | Empty state         |

### Media & Display

| Component | Import                     | Description      |
| --------- | -------------------------- | ---------------- |
| Avatar    | `@/components/ui/avatar`   | User avatar      |
| Carousel  | `@/components/ui/carousel` | Image carousel   |
| Chart     | `@/components/ui/chart`    | Recharts wrapper |

### Utility

| Component  | Import                        | Description       |
| ---------- | ----------------------------- | ----------------- |
| Kbd        | `@/components/ui/kbd`         | Keyboard shortcut |
| Item       | `@/components/ui/item`        | List item         |
| IconButton | `@/components/ui/icon-button` | Icon-only button  |

## Button Examples

```tsx
import { Button } from "@/components/ui/button";
import { Icon } from "@nds-icons";
import { plusIcon } from "@nds-icons/plus/default.icon";

// Variants
<Button variant="primary">Primary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// With icon
<Button icon={<Icon icon={plusIcon} />} />

// Colors
<Button variant="primary" color="blue">Blue</Button>
<Button variant="outline" color="red">Red</Button>

// Shapes
<Button shape="pill">Rounded</Button>

// Full width
<Button fullWidth>Full Width</Button>

// With tooltip
<Button tooltip="Click me">Hover for tooltip</Button>
```

### Notion-Style Button Patterns (ALWAYS use these)

Primary buttons MUST always use `variant="primary"` which gives white text on blue.
Never hardcode `stroke="white"` in SVGs inside buttons — use `stroke="currentColor"` so the color inherits.

```tsx
// ✅ "New" button with dropdown chevron (for database toolbars)
<Button variant="primary" size="sm" className="gap-1">
  <span>New</span>
  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="opacity-80">
    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
</Button>

// ✅ "New [thing]" button with plus icon (for page headers)
<Button variant="primary" size="sm">
  <Icon icon={plusIcon} size={14} color="white" />
  New agent
</Button>

// ✅ Dialog footer buttons
<DialogFooter>
  <Button variant="ghost">Cancel</Button>
  <Button variant="primary">Save</Button>
</DialogFooter>

// ❌ NEVER do this — hardcoded stroke won't adapt
<Button variant="primary">
  <svg><path stroke="white" /></svg>
</Button>

// ❌ NEVER use className for text color on primary buttons
<Button variant="primary">
  <Icon icon={plusIcon} className="text-white" />
</Button>
```

## Dialog Example

```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Description text here.</DialogDescription>
    </DialogHeader>
    <div>Dialog content...</div>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button variant="primary">Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>;
```

## Dropdown Menu Example

```tsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost">Options</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Actions</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem onClick={() => console.log("Edit")}>
      Edit
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => console.log("Delete")}>
      Delete
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>;
```

## Form Input Example

```tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Field } from "@/components/ui/field";

// Basic input with label
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="Enter email" />
</div>

// Using Field wrapper
<Field label="Username" error={errors.username?.message}>
  <Input {...register("username")} />
</Field>
```

## Select Example

```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

<Select value={value} onValueChange={setValue}>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>;
```

## Tabs Example

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content for tab 1</TabsContent>
  <TabsContent value="tab2">Content for tab 2</TabsContent>
</Tabs>;
```

## Toast Notifications

```tsx
import { toast } from "sonner";

// In your component
toast.success("Saved successfully!");
toast.error("Something went wrong");
toast.loading("Saving...");
toast.promise(saveData(), {
  loading: "Saving...",
  success: "Saved!",
  error: "Failed to save",
});
```

## playground-kit Components

Additional components in `@/components/playground-kit`:

```tsx
import {
  Button,
  Input,
  Dialog,
  Select,
  Textarea,
  IconButton,
  HoverCard,
  StateConfigPanel,
} from "@/components/playground-kit";
```

These are simplified versions for rapid prototyping.

## Best Practices

1. **Check library first** - Don't build custom components for common patterns
2. **Use composition** - Combine components (Dialog + Form, Dropdown + Command)
3. **Follow variants** - Use built-in variants instead of custom classes
4. **Accessibility** - Components include keyboard nav and ARIA by default
