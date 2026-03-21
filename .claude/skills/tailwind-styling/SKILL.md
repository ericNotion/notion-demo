---
name: tailwind-styling
description: Style components with Tailwind CSS and the design system. Use when applying styles, colors, typography, spacing, or when the user mentions "styling", "CSS", "colors", "theme", "dark mode", or design tokens.
---

# Tailwind CSS Styling

This project uses **Tailwind CSS v4** with a custom design system. Always use Tailwind utility classes for styling.

## Key Principles

1. **Use semantic colors for text and backgrounds** - Reference semantic colors from globals.css and theme.css first; if the right color does not exist, you can use raw Tailwind color values
2. **Use cn() helper** - This handles dynamic className construction and automatically de-duplicates classes
3. **Dark mode is automatic** - Use semantic tokens that adapt, like text-primary and bg-secondary

## The cn() Helper

Always use `cn()` to combine classes:

```tsx
import { cn } from "@/utils/cn";

function Button({ className, variant }: Props) {
  return (
    <button
      className={cn(
        "rounded-lg px-4 py-2 font-medium",
        {
          "bg-primary text-primary": variant === "primary",
          "bg-secondary text-secondary": variant === "secondary
        },
        className,
      )}
    />
  );
}
```

## Color System

Tailwind v4 automatically generates utility classes from theme.css tokens. Use the semantic values:

### Text Colors

```tsx
className = "text-primary"; // Main text
className = "text-secondary"; // Secondary text
className = "text-tertiary"; // Muted text
etc;
```

### Background Colors

```tsx
className = "bg-primary"; // Main background
className = "bg-secondary"; // Cards, sections
className = "bg-tertiary"; // Hover states
className = "bg-elevated"; // Floating elements, modals
etc;
```

### Border Colors

```tsx
className = "border-primary"; // Standard borders
className = "border-secondary"; // Subtle borders
```

### Colored Variants

Each color (gray, red, orange, yellow, green, teal, blue, purple, pink, brown) has semantic variants:

```tsx
// Blue
className = "text-blue-primary";
className = "bg-blue-primary";
className = "bg-blue-secondary";
className = "border-blue-primary";

// Red (errors)
className = "text-red-primary";
className = "bg-red-primary";
className = "bg-red-secondary";

// Green (success)
className = "text-green-primary";
className = "bg-green-primary";
className = "bg-green-secondary";
```

### Icon Colors

For icons using `color="inherit"`:

```tsx
className = "fill-primary"; // Primary icon color
className = "fill-secondary"; // Secondary icon color
className = "fill-tertiary"; // Tertiary icon color
className = "fill-disabled"; // Disabled icon color
```

## Typography

### Font Sizes

```tsx
className = "text-title-xl"; // 26px - Large titles
className = "text-title-lg"; // 22px - Page titles
className = "text-title"; // 20px - Section titles
className = "text-title-sm"; // 17px - Small titles
className = "text-body-lg"; // 16px - Large body
className = "text-body"; // 14px - Default body
className = "text-body-sm"; // 13px - Small body
className = "text-caption"; // 12px - Captions
className = "text-caption-sm"; // 10px - Tiny text
```

### Content Typography Classes

```tsx
className = "content-page-title"; // 40px bold
className = "content-h1"; // 30px semibold
className = "content-h2"; // 24px semibold
className = "content-h3"; // 20px semibold
className = "content-text-block"; // 16px normal
className = "content-mention"; // 16px medium
```

## Shadows

```tsx
className = "shadow-sm"; // Subtle shadow
className = "shadow-md"; // Medium shadow
className = "shadow-lg"; // Large shadow
className = "shadow-diffuse"; // Soft diffuse shadow
className = "shadow-scrim"; // Overlay shadow

// With outline (includes border)
className = "shadow-sm-outline";
className = "shadow-md-outline";
className = "shadow-lg-outline";

// Custom shadows
className = "shadow-agent"; // Agent card shadow
className = "shadow-contrast"; // Dark mode contrast shadow
```

## Prettier Auto-Ordering

Tailwind classes are automatically sorted by Prettier. Don't worry about class order—it will be fixed on save.

## File References

- `src/app/globals.css` - Base styles, custom utilities, animations
- `src/app/theme.css` - Design tokens, semantic colors
- `src/app/palette.css` - Raw color palette values
