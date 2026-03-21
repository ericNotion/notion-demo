---
allowed-tools: Read, Write, Edit, Glob, Grep, Bash(bun run:*), Bash(agent-browser:*), Skill(find-icon), Task, mcp__figma-desktop__get_design_context, mcp__figma-desktop__get_variable_defs
argument-hint: [figma-url]
description: Build a Figma design into code and verify the implementation
---

# Build Figma Design

Build and verify this Figma design: $ARGUMENTS

---

## Prerequisites Check

Before starting, verify required tools are available:

1. **Figma MCP** - Attempt to use `mcp__figma-desktop__get_screenshot`. If it fails, guide user to set it up.
2. **agent-browser** - Run `agent-browser --version` to check if installed. If not, run `npm install -g agent-browser && agent-browser install`.

### Setup (if needed)

**Figma MCP:**

1. Open Figma desktop app (not browser)
2. Switch to Dev Mode (bottom toolbar)
3. In right sidebar under "Inspect", click "Set up Figma MCP"
4. Select "Claude Code" and copy the command shown
5. Run the command in terminal, then restart Claude Code

**agent-browser:**

```bash
npm install -g agent-browser
agent-browser install  # Downloads Chromium
```

---

## Phase A: Design Extraction

1. Extract the node ID from the Figma URL:
   - `figma.com/design/fileKey/fileName?node-id=123-456` → nodeId is `123:456`
   - Replace `-` with `:` in the node ID

2. Use Figma MCP to fetch design data:
   - `mcp__figma-desktop__get_design_context` for layout, colors, typography, and generated code
   - `mcp__figma-desktop__get_screenshot` for visual reference

3. Extract key design properties from the returned code:
   - Layout structure (flexbox, grid, positioning)
   - Colors (hex values, CSS variables)
   - Typography (font family, size, weight, line height)
   - Spacing (padding, margins, gaps)
   - Components and their hierarchy

---

## Phase B: Implementation

1. Determine the target file:
   - If working in an existing prototype, edit that page.tsx
   - If no prototype exists, ask the user to run `/create [name]` first

2. **Search for existing components** before writing code:
   - `src/components/` - UI primitives (Button, Dialog, Input, etc.)
   - `src/nds/` - Notion Design System components

3. **Use existing icons** - run the find-icon skill:

   ```bash
   bun run .claude/skills/find-icon/scripts/search-icons.ts <query>
   ```

   Never create custom SVG icons.

4. Write the React component:
   - Use function declarations (not arrow functions)
   - Use Tailwind CSS classes
   - Follow patterns from CLAUDE.md

### Common Implementation Pitfalls

Avoid these common mistakes:

| Issue            | Wrong                                 | Correct                                                |
| ---------------- | ------------------------------------- | ------------------------------------------------------ |
| Icon sizes       | `size="md"`                           | `size="default"` (valid: xxs, xs, sm, default, lg, xl) |
| Icon colors      | `className="text-primary"`            | `color="primary"` prop                                 |
| Divider opacity  | `bg-primary/7` (may resolve to white) | `bg-black/[0.07]`                                      |
| Button nesting   | `<button><Switch/></button>`          | Use `<div>` when containing interactive children       |
| Tailwind opacity | `bg-gray-500/7`                       | `bg-gray-500/[0.07]` (use brackets for decimals)       |

---

## Phase C: Verification Loop

After implementing, use the `figma-verifier` subagent to compare your implementation against the Figma design. This keeps screenshots out of the main context and performs both visual AND DOM inspection.

### Step 1: Invoke the Verification Subagent

Use the Task tool to invoke the `figma-verifier` subagent:

```
Task tool with:
- subagent_type: "figma-verifier"
- prompt: "Verify the implementation at http://localhost:4000/<username>/<prototype-slug> against Figma node ID <nodeId>"
```

The subagent will:

1. Screenshot the Figma design
2. Navigate to and screenshot the live implementation
3. **Inspect the DOM** for common issues (0px elements, invisible colors, console errors)
4. Compare visually and return a detailed report

### Step 2: Review the Verification Report

The subagent returns a structured report with:

- **Critical issues** (must fix) - includes DOM inspection findings
- **Minor issues** (should fix)
- **What matches well**

### Step 3: Fix and Re-verify

1. Make targeted code changes based on the report
2. Invoke the subagent again to re-verify
3. Repeat until "Match Quality" is Excellent or Good (or after 3 iterations, ask user for feedback)

---

## Exit Conditions

**Stop iterating when:**

- Implementation closely matches Figma (near pixel-perfect)
- Need clarification from user (hover states, animations, etc.)
- 3 iterations with minimal improvement - ask user for feedback

---

## Example

```
User: /figma https://figma.com/design/abc123/MyApp?node-id=1234-5678

1. Check MCP servers are connected
2. Fetch design context from Figma (nodeId: 1234:5678)
3. Implement the UI in the current prototype
4. Use figma-verifier subagent to compare (screenshots stay in subagent)
5. Fix discrepancies based on report
6. Re-verify until match quality is good
7. Report completion
```
