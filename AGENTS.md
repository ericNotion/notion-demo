# Agent Instructions

This is a **Notion clone prototype** — the main app lives at `src/app/eric/notion-clone/`. When building new features, blocks, or pages, work within that directory and follow the existing patterns.

## Important restrictions

- **NEVER run `bun dev`** - dev server runs at localhost:4000
- **NEVER run `bun build`** - avoid triggering builds

**Safe commands:** `bun lint`, `bun test`, `bun run format`, `bun run icons:build`

## Skills

Detailed guidance lives in `.claude/skills/`. Load relevant skills before starting implementation tasks.

| Skill                | Use For                                                  |
| -------------------- | -------------------------------------------------------- |
| `notion-patterns`    | Notion clone architecture, block types, page registry    |
| `audio-beats`        | Beat Machine slash menu block with Tone.js               |
| `node-graph-diagram` | Page Graph slash menu block — interactive SVG node graph |
| `ui-components`      | 50+ UI components (Button, Dialog, Input, etc.)          |
| `tailwind-styling`   | Styling, design tokens, colors, dark mode                |
| `jotai-state`        | State management with atoms, persistence                 |
| `find-icon`          | Icon search and import paths                             |
| `swr-data-fetching`  | Data fetching (never use useEffect for network requests) |
| `api-routes`         | Next.js API route handlers, request/response patterns    |
| `motion-react`       | React animations with Motion library                     |
| `state-config-panel` | Debug controls, prototype configuration UI               |
| `create`             | Create a new prototype directory                         |
| `figma`              | Build a Figma design into code                           |
| `deploy`             | Guide through git workflow, PR, and CI                   |
| `push`               | Quick commit and push changes                            |
| `agent-browser`      | Browser automation for testing and verification          |

## Project Structure

```
src/
├── app/
│   ├── (root)/              # Shared APIs, index page
│   └── eric/notion-clone/   # The Notion prototype
├── components/
│   ├── ui/                  # ShadCN components (@/components/ui)
│   ├── notion-kit/          # Notion-style components (editor, sidebar, etc.)
│   ├── playground-kit/      # Prototype components (@/components/playground-kit)
│   └── chat-kit/            # Chat UI components
├── hooks/                   # Custom React hooks
├── lib/                     # Shared libraries (Notion, Supabase)
├── nds-icons/               # NDS icon library (@nds-icons)
├── icons/                   # Custom icon components
├── utils/                   # Utilities (cn.ts, etc.)
└── types/                   # TypeScript type definitions
```

**Route:** `/eric/notion-clone` → `src/app/eric/notion-clone/page.tsx`

## File Conventions

| File           | Purpose                 |
| -------------- | ----------------------- |
| `page.tsx`     | Route page component    |
| `layout.tsx`   | Layout wrapper          |
| `api/route.ts` | API endpoint            |
| `atoms.ts`     | Jotai state definitions |

## Package Management

This project uses `bun` for scripts and package management. Do not use `npm` or `pnpm` or `yarn`.

```bash
bun add package-name      # Add dependency
bun add -d package-name   # Add dev dependency
```

## Technology Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · Jotai · SWR · Radix UI · Vercel AI SDK · Supabase · Tone.js · d3 · Bun
