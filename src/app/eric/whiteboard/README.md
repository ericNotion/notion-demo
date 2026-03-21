# Whiteboard Prototype

An infinite canvas block type with shapes, sticky notes, connectors, drawing, and navigation controls.

## Features

### Navigation
- **Minimap**: Shows in bottom-right corner with current viewport indicator
- **Fit to view**: Ctrl/Cmd + 0 centers and fits all content
- **Pan**: Middle mouse button or Cmd/Ctrl + drag
- **Zoom**: Cmd/Ctrl + scroll wheel
- **Smooth animated transitions**: All viewport changes are animated

### Templates
Four starter templates available:
1. **Flowchart**: Process diagram with decision points
2. **Mind Map**: Central idea with branches
3. **Retrospective**: What went well / To improve / Action items
4. **Kanban Board**: Task tracking board

### Export
- **Export as PNG**: Raster image export (requires html2canvas)
- **Export as SVG**: Vector graphics export (native implementation)
- **Export as PDF**: PDF document export (requires html2canvas + jspdf)
- **Copy selection as image**: Copy to clipboard (requires html2canvas)

### Responsive Behavior
- **Mobile**: Simplified toolbar with icon-only buttons, touch-friendly controls
- **Desktop**: Full toolbar with labels, keyboard shortcuts
- **Inline view**: Static preview thumbnail that expands to full editing mode

## File Structure

```
src/app/eric/whiteboard/
├── README.md                    # This file
├── metadata.json                # Prototype metadata
├── layout.tsx                   # Layout wrapper
├── page.tsx                     # Main whiteboard page
├── types.ts                     # TypeScript types
├── atoms.ts                     # Jotai state atoms
├── components/
│   ├── Canvas.tsx              # Main canvas with elements
│   ├── Minimap.tsx             # Minimap navigation component
│   ├── Toolbar.tsx             # Top toolbar with actions
│   ├── TemplateSelector.tsx   # Template selection dialog
│   └── InlinePreview.tsx       # Preview for inline whiteboard blocks
├── templates/
│   └── templates.ts            # Pre-built templates
└── lib/
    └── export.ts               # Export functionality
```

## Usage

### Keyboard Shortcuts
- `Cmd/Ctrl + 0`: Fit all content to view
- `Cmd/Ctrl + scroll`: Zoom in/out
- `Cmd/Ctrl + drag`: Pan the canvas
- Middle mouse drag: Pan the canvas

### Starting from a Template
1. Click "Templates" in the toolbar
2. Select a template or start with blank canvas
3. Elements are automatically placed on the canvas

### Navigation
- Use the minimap to see overview and jump to different areas
- Click "Fit to view" or press Cmd/Ctrl + 0 to center content
- Pan by middle-clicking and dragging
- Zoom with Cmd/Ctrl + scroll wheel

### Exporting
1. Click "Export" in the toolbar
2. Choose format: PNG, SVG, or PDF
3. File downloads automatically
4. Or use "Copy as image" to copy to clipboard

## Optional Dependencies

For full export functionality, install:
```bash
bun add html2canvas jspdf
```

Without these dependencies:
- SVG export works (native implementation)
- PNG/PDF export shows installation instructions
- Copy as image shows installation instructions

## Implementation Notes

### Design System Compliance
- Uses semantic color tokens (`text-primary`, `bg-elevated`, etc.)
- Typography from NDS (`text-body`, `text-caption`, etc.)
- Icons from `@nds-icons` with proper imports
- Shadows use `-outline` variants
- Motion animations are 100-200ms with easeOut
- Follows "Quiet Until Needed" principle (toolbar fades in)

### State Management
- Jotai atoms for all state (elements, viewport, tools, etc.)
- No prop drilling, clean component structure
- Atoms in separate `atoms.ts` file

### Responsive Design
- Detects viewport size and switches between desktop/mobile modes
- Mobile: Icon-only toolbar, simplified controls
- Desktop: Full labels, keyboard shortcuts displayed

### Animation
- Framer Motion for smooth transitions
- Elements fade in/out with scale
- Viewport transitions are animated
- Duration: 150-200ms, easing: easeOut

## Future Enhancements

Potential additions:
- Drawing tools (freehand, pen)
- Image upload and placement
- Text editing inline
- Multi-user collaboration
- Undo/redo
- Element grouping
- Alignment guides
- Snapping to grid
- Copy/paste elements
- Layer management
