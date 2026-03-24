# Skills

Skills teach Claude project-specific patterns. Load relevant skills before starting implementation tasks.

## Skills by Category

### Workflow

| Skill        | Description                                     |
| ------------ | ----------------------------------------------- |
| `create`     | Create a new prototype directory                |
| `brainstorm` | Brainstorm prototype ideas through conversation |
| `figma`      | Build a Figma design into code                  |
| `deploy`     | Guide through git workflow, PR, and CI          |
| `push`       | Quick commit and push changes                   |

### UI & Components

| Skill              | Description                                            |
| ------------------ | ------------------------------------------------------ |
| `ui-components`    | 50+ pre-built components (Button, Dialog, Input, etc.) |
| `find-icon`        | Search NDS icon library for icons                      |
| `tailwind-styling` | Design tokens, colors, dark mode, Tailwind v4 patterns |
| `slash-menu`       | Add block types and slash commands to notion-clone     |

### State & Data

| Skill                | Description                                            |
| -------------------- | ------------------------------------------------------ |
| `jotai-state`        | Atomic state management, localStorage persistence      |
| `swr-data-fetching`  | Data fetching hooks (never use useEffect for fetching) |
| `state-config-panel` | Dynamic Island-style debug/config panel                |

### Backend

| Skill        | Description                                       |
| ------------ | ------------------------------------------------- |
| `api-routes` | Next.js route handlers, request/response patterns |

### Animation

| Skill              | Description                                       |
| ------------------ | ------------------------------------------------- |
| `motion-animation` | Motion library fundamentals                       |
| `motion-react`     | React-specific Motion patterns, Radix integration |

### Browser & Testing

| Skill           | Description                                              |
| --------------- | -------------------------------------------------------- |
| `agent-browser` | Headless browser automation for testing and verification |

---

## Skill Combinations for Common Tasks

### Building a New Prototype

```
ui-components → tailwind-styling → find-icon
```

Start with UI components, apply styling, add icons as needed.

### Building a Form

```
ui-components → jotai-state
```

Use Input, Select, Checkbox from ui-components. Use Jotai atoms for form state if complex.

### Adding Data Fetching

```
swr-data-fetching → api-routes
```

Use SWR hooks on the client, create API routes for server-side logic.

### Adding Animations

```
motion-react → ui-components
```

Use Motion for React patterns. Works with Radix-based UI components.

### Adding Debug/Config UI

```
state-config-panel → jotai-state
```

Create atoms for configurable state, expose via StateConfigPanel.

### Building a Complete Feature

```
ui-components → tailwind-styling → jotai-state → swr-data-fetching → api-routes
```

Full stack: UI → styling → state → data fetching → backend.

### Verifying an Implementation

```
agent-browser
```

Use agent-browser to navigate to localhost, take screenshots, inspect DOM, and check for console errors.

---

## Adding a New Skill

1. Create directory: `.claude/skills/{skill-name}/`
2. Create `SKILL.md` with frontmatter:

```markdown
---
name: skill-name
description: When to use this skill. Include keywords Claude can match on.
---

# Skill Name

## When to Use

- Bullet points of use cases

## Patterns

- Code examples and best practices
```

3. Add to the table above
4. Update CLAUDE.md skills table if it's a commonly-used skill
