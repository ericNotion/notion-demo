# Rainbow Road Mode 🌈⭐

A fun "Rainbow Road" visual mode toggle for the notion-clone app — inspired by Mario Kart's Rainbow Road. This cosmic theme transforms the entire UI with vibrant rainbow gradients, glowing neon effects, animated borders, and a starfield background.

## Features

### Visual Effects
- **Starfield Background** - Dark space background with twinkling animated stars
- **Rainbow Gradient Text** - Flowing rainbow gradients on all headings and titles
- **Neon Glow Borders** - Glowing cyan borders on interactive elements
- **Animated Rainbow Effects** - Cycling rainbow gradients on hover states
- **Floating Star Animations** - Animated star emojis floating across the screen
- **Cosmic Sidebar** - Purple-tinted gradient sidebar background
- **Glowing Emoji Icons** - Page emojis get a pulsing glow effect
- **Rainbow Scrollbars** - Custom styled scrollbars with gradient colors
- **Neon Selection** - Purple glow on text selection

### Interactive Elements
- **Toggle Switch** - Located in the sidebar under the navigation sections
- **Animated Icon** - Star icon that rotates when mode is active
- **Persistent State** - Preference is saved to localStorage via Jotai

## Implementation

### Files Created
1. `rainbow-road.css` - All rainbow mode CSS styles and animations
2. `RainbowRoadToggle.tsx` - Toggle switch component
3. `FloatingStars.tsx` - Animated floating star effects component

### Files Modified
1. `atoms.ts` - Added `rainbowRoadModeAtom` for state management
2. `layout.tsx` - Imported rainbow-road.css
3. `shell.tsx` - Integrated toggle, applied mode class, added floating stars
4. `page.tsx` - Added `emoji-icon` class for glowing effect
5. `StaticBlocks.tsx` - Added data attributes for styling
6. `SidebarItem.tsx` - Added data attributes for neon effects

### Usage

Toggle Rainbow Road mode by clicking the switch in the sidebar. The entire app will transform with cosmic rainbow styling.

### CSS Classes and Selectors

The mode works by applying the `.rainbow-road-mode` class to the root container. All effects are scoped within this class:

- `.rainbow-road-mode` - Root class that enables all effects
- `.emoji-icon` - Makes emojis glow and pulse
- `[data-sidebar-item]` - Neon hover effects on sidebar items
- `[data-card="true"]` - Glowing card effects
- `[data-callout="true"]` - Rainbow callout styling
- `[data-divider="true"]` - Rainbow gradient dividers

### Animations

All animations use CSS `@keyframes`:
- `twinkle` - Starfield twinkling (8s)
- `rainbow-flow` - Gradient text flow (6s)
- `rainbow-pulse` - Brightness pulsing (2s)
- `rainbow-bg-flow` - Background gradient flow (4s)
- `input-rainbow-glow` - Input border color cycling (3s)
- `sparkle-pop` - Sparkle scaling and rotation (2s)
- `float-star` - Floating star movement (10s)
- `emoji-glow` - Emoji glow pulsing (3s)

## Design Inspiration

Based on Mario Kart's Rainbow Road:
- Dark space/cosmic background
- Vibrant rainbow color palette
- Neon glowing effects
- Playful and over-the-top styling
- Star motifs throughout

## Color Palette

```css
--rainbow-red: #ff0844
--rainbow-orange: #ff6b35
--rainbow-yellow: #ffec41
--rainbow-green: #00f5a0
--rainbow-cyan: #00d9ff
--rainbow-blue: #4d7cff
--rainbow-purple: #b65cff
--rainbow-pink: #ff2eb4
```

## Future Enhancements

Potential improvements:
- Sound effects on toggle
- More particle effects
- Rainbow cursor trail
- Customizable color schemes
- Intensity slider
- Keyboard shortcut (e.g., Cmd+Shift+R)
