# Agent Instructions

## Important restrictions

- **NEVER run `bun dev`** - dev server runs at localhost:4000
- **NEVER run `bun build`** - avoid triggering builds

**Safe commands:** `bun lint`, `bun test`, `bun run format`, `bun run icons:build`

## Skills

Detailed guidance lives in `.claude/skills/`. Load relevant skills before starting implementation tasks.

| Skill                | Use For                                                  |
| -------------------- | -------------------------------------------------------- |
| `create`             | Create a new prototype directory                         |
| `brainstorm`         | Brainstorm prototype ideas through conversation          |
| `figma`              | Build a Figma design into code                           |
| `deploy`             | Guide through git workflow, PR, and CI                   |
| `push`               | Quick commit and push changes                            |
| `ui-components`      | 50+ UI components (Button, Dialog, Input, etc.)          |
| `api-routes`         | Next.js API route handlers, request/response patterns    |
| `jotai-state`        | State management with atoms, persistence                 |
| `swr-data-fetching`  | Data fetching (never use useEffect for network requests) |
| `tailwind-styling`   | Styling, design tokens, colors, dark mode                |
| `state-config-panel` | Debug controls, prototype configuration UI               |
| `find-icon`          | Icon search and import paths                             |
| `motion-animation`   | Animation with Motion library                            |
| `motion-react`       | React-specific Motion patterns                           |
| `agent-browser`      | Browser automation for testing and verification          |

## Project Structure

```
src/
├── app/
│   ├── (root)/              # Shared APIs, index page
│   ├── (templates)/         # Page templates
│   ├── brian/               # User prototype directories
│   ├── kathy/               #   (each user has their own)
│   └── ...                  #   Routes: /username/prototype-name
├── components/
│   ├── ui/                  # ShadCN components (@/components/ui)
│   ├── playground-kit/      # Prototype components (@/components/playground-kit)
│   ├── chat-kit/            # Chat UI components
│   └── notion-kit/          # Notion-style components
├── hooks/                   # Custom React hooks
├── lib/                     # Shared libraries (Notion, Supabase)
├── nds-icons/               # NDS icon library (@nds-icons)
├── icons/                   # Custom icon components
├── utils/                   # Utilities (cn.ts, etc.)
└── types/                   # TypeScript type definitions
```

**Routes:** `/brian/my-prototype` → `src/app/brian/my-prototype/page.tsx`

### Infrastructure vs Prototypes

This codebase has two modes:

- **Prototypes** (`src/app/{username}/`) - Move fast, iterate quickly. Don't over-engineer.
- **Infrastructure** (`src/app/(root)/`, `src/components/`, `src/lib/`, `.github/`) - Shared code that needs to be robust. Handle errors, validate inputs, write defensively.

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

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · Jotai · SWR · Radix UI · Vercel AI SDK · Supabase · Bun
