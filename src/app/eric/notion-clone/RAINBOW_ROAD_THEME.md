# 🌈 Rainbow Road Theme - Mario Kart Inspired

This theme transforms the notion-clone app into a vibrant, cosmic Rainbow Road experience inspired by Mario Kart!

## 🎨 Theme Features

### Visual Elements
- **Deep Space Background**: Dark black/purple background (#0a0a0f) mimicking outer space
- **Animated Star Field**: Canvas-based twinkling stars with occasional shooting stars
- **Rainbow Gradients**: Animated rainbow borders and text cycling through all colors
- **Neon Glow Effects**: Subtle pink/cyan/yellow glows on interactive elements
- **Cosmic Colors**: Purple-tinted backgrounds with bright white text for contrast

### Key Color Palette
- **Background**: `#0a0a0f` (deep space black)
- **Secondary BG**: `#12121a` → `#1a1a28` (dark purple-blue)
- **Text**: `#ffffff` (bright white) → `#c0c0d0` (light gray) → `#8888aa` (muted purple)
- **Rainbow**: Red → Orange → Yellow → Green → Blue → Indigo → Violet (cycling)
- **Neon Accents**: Magenta (#ff00ff) and Cyan (#00ffff)

## 📁 Files Modified/Created

### New Files
1. **`rainbow-road-theme.css`** - Complete theme CSS
2. **`components/StarField.tsx`** - Animated star field component

### Modified Files
1. **`layout.tsx`** - Imports the rainbow-road-theme.css
2. **`shell.tsx`** - Added StarField and rainbow classes
3. **`page.tsx`** - Rainbow text styling
4. **`components/StaticBlocks.tsx`** - Enhanced with rainbow effects

## 🎯 CSS Classes Reference

### Rainbow Effects
- `.rainbow-text` - Animated rainbow gradient text
- `.rainbow-gradient` - Full rainbow background gradient
- `.rainbow-border` - Rainbow animated border
- `.neon-glow` - Subtle pink/cyan/yellow glow
- `.rainbow-sidebar` - Sidebar with animated rainbow border
- `.rainbow-topbar` - Top bar with animated rainbow border
- `.rainbow-card` - Card with hover glow effect

## 🚀 Performance Notes

- Uses single canvas element for stars
- Hardware-accelerated CSS animations
- Cleanup on unmount prevents memory leaks
- Optimized for smooth 60fps

---

**Made with 💜 and ✨ for Rainbow Road fans everywhere!**
