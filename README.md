# Prototype Playground

## Getting started

To get Prototype Playground running locally, follow the instructions on [this Notion page](https://dev.notion.so/notion/Introduction-to-Prototype-Playground-246b35e6e67f80eba7aac829ae128ed4?source=copy_link).

---

## Maintenance for developers

This section documents how the playground's CI/CD pipeline, Notion sync, and user management work. Useful for maintainers or anyone curious about the system architecture.

### System Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              Developer Workflow                             │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  1. LOCAL DEVELOPMENT                                                       │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐                      │
│  │ bun run dev │───▶│ First-time  │───▶│ Creates:    │                      │
│  │             │    │ setup.ts    │    │ • Directory │                      │
│  │             │    │             │    │ • users.json│                      │
│  └─────────────┘    └─────────────┘    └─────────────┘                      │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  2. PR WORKFLOW                                                             │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐                      │
│  │ git push    │───▶│ CI Checks   │───▶│ lint, test  │                      │
│  │             │    │ (ci.yml)    │    │ format,build│                      │
│  └─────────────┘    └─────────────┘    └─────────────┘                      │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  3. MERGE TO MAIN (runs in parallel)                                        │
│  ┌──────────────────────┐    ┌──────────────────────┐                       │
│  │ trigger-vercel-      │    │ update-prototypes.yml│                       │
│  │ deploy.yml           │    │                      │                       │
│  │                      │    │ • sync-to-notion.ts  │                       │
│  │ Triggers Vercel      │    │ (creates/updates     │                       │
│  │ deployment hook      │    │  Notion pages)       │                       │
│  └──────────────────────┘    └──────────────────────┘                       │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  3b. SLACK NOTIFICATIONS (triggered by Notion)                              │
│  ┌──────────────────────┐    ┌──────────────────────┐                       │
│  │ Notion Automation    │    │ /api/slack-notify    │                       │
│  │                      │    │                      │                       │
│  │ "Page added" trigger │───▶│ Validates payload    │                       │
│  │ sends webhook        │    │ Checks deployment    │                       │
│  │                      │    │ Sends Slack message  │                       │
│  └──────────────────────┘    └──────────────────────┘                       │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  4. VERCEL BUILD                                                            │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐                      │
│  │ prebuild.ts │───▶│ generate-   │───▶│ Fetches from│                      │
│  │             │    │ static-data │    │ Notion DB   │                      │
│  └─────────────┘    └─────────────┘    └─────────────┘                      │
└─────────────────────────────────────────────────────────────────────────────┘
```

### GitHub Actions Workflows

Three workflows run automatically:

| Workflow                    | Trigger             | Purpose                                   |
| --------------------------- | ------------------- | ----------------------------------------- |
| `ci.yml`                    | PR and push to main | Runs lint, format, test, and build checks |
| `trigger-vercel-deploy.yml` | Push to main        | Triggers Vercel deployment via webhook    |
| `update-prototypes.yml`     | Push to main        | Syncs prototypes to Notion                |

### Notion Integration

The playground uses a [Notion database](https://dev.notion.so/notion/2cab35e6e67f807899b5df936deb51dc?v=2cbb35e6e67f803d9992000c8a591312&source=copy_link) as the source of truth for prototype metadata in production.

**Data Flow:**

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   PR Merged     │────▶│ sync-to-notion  │────▶│ Notion Database │
│   to main       │     │ .ts             │     │ (Prototypes)    │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                                        │
                                                        ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Production     │◀────│ generate-static │◀────│ Notion API      │
│  Homepage       │     │ -data.ts        │     │ Query           │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

**What gets synced:**

- **On PR merge:** `sync-to-notion.ts` creates/updates Notion records for the PR author's prototypes
- **On Vercel build:** `generate-static-data.ts` fetches all prototypes from Notion for the homepage
- **Prototype metadata:** title, description, slug, username, createdAt, updatedAt, Author (Notion user)

**Key files:**

| File                              | Purpose                                      |
| --------------------------------- | -------------------------------------------- |
| `src/lib/notion/prototypes.ts`    | CRUD operations for Notion prototype records |
| `src/lib/notion/users.ts`         | User ID lookups and mapping functions        |
| `scripts/sync-to-notion.ts`       | Syncs changed prototypes after PR merge      |
| `scripts/generate-static-data.ts` | Generates homepage data from Notion          |
| `src/lib/auth/config.ts`          | NextAuth configuration with Okta provider    |
| `src/middleware.ts`               | Route protection and authentication          |

### Slack Notifications

When a new prototype is created, the team gets notified in Slack. This uses a Notion database automation rather than GitHub Actions.

**How it works:**

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│ sync-to-notion  │────▶│ Notion Database │────▶│ Notion          │
│ creates page    │     │ (new page)      │     │ Automation      │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                                        │
                                                        ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│ Slack channel   │◀────│ Slack Webhook   │◀────│/api/slack-notify│
│ #playground     │     │                 │     │ (validates,     │
│                 │     │                 │     │  checks deploy) │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

**The pipeline:**

1. `sync-to-notion.ts` creates a new page in the Notion database
2. Notion automation triggers on "Page added"
3. Automation sends webhook to `/api/slack-notify` with page properties
4. Endpoint validates payload using Zod schemas from `generated-schemas.ts`
5. Endpoint verifies prototype is deployed (with retries + bypass header)
6. Formatted Slack message is sent via webhook

**Message formats:**

- New prototype: "🧑‍🍳 _Someone's cooking..._ **Prototype Name** by Author"
- New version: "🔄 _New version cooking..._ **Prototype Name** (v2 from v1) by Author"

**Key files:**

| File                                       | Purpose                                    |
| ------------------------------------------ | ------------------------------------------ |
| `src/app/(root)/api/slack-notify/route.ts` | Webhook endpoint for Notion automation     |
| `src/lib/notion/generated-schemas.ts`      | Zod schemas for type-safe payload parsing  |
| `scripts/generate-notion-types.ts`         | Generates schemas from Notion DB structure |

**Environment variables:**

| Variable                          | Purpose                             |
| --------------------------------- | ----------------------------------- |
| `SLACK_WEBHOOK_URL`               | Slack incoming webhook URL          |
| `VERCEL_AUTOMATION_BYPASS_SECRET` | Bypasses Vercel password protection |
| `SLACK_NOTIFY_SECRET` (optional)  | Webhook verification secret         |

**Regenerating types:**

If the Notion database schema changes, regenerate the Zod schemas:

```bash
bun run notion:types
```

### Authentication

The playground uses different authentication methods depending on the environment:

#### Development (Local)

- **Method**: File-based authentication via `.playground` config file
- **Setup**: Automatic on first run of `bun run dev`
- **No password required**: All routes accessible locally

#### Production

- **Method**: Okta SSO (when `NEXT_PUBLIC_USE_OKTA=true`)
- **Requirements**:
  - Valid `@makenotion.com` email address
  - Email must be verified in Okta
  - User must be assigned to the app in Okta admin console
- **Session**: JWT-based, 7-day max age with daily refresh
- **Documentation**: See [`docs/OKTA_SETUP.md`](./docs/OKTA_SETUP.md) for setup instructions
- **Security**: See [`docs/SECURITY.md`](./docs/SECURITY.md) for security details

**Key Security Features:**

- Okta application provisioning (access control)
- Domain restriction (@makenotion.com only)
- Email verification required
- CSRF protection on all auth operations
- Open redirect protection

### User Management

#### Okta SSO (Automatic Provisioning)

When Okta SSO is enabled, users are automatically provisioned:

1. **Okta admin** assigns user to "Prototype Playground" app in Okta
2. **User signs in** with their @makenotion.com email
3. **Username derived** from email (e.g., `dtsao@makenotion.com` → `dtsao`)
4. **Access granted** immediately

No manual configuration in `users.json` is required for basic access.

#### Enhanced User Metadata (Optional)

For users who need additional metadata, add them to `src/data/users.json`:

```json
{
  "playgroundUsername": "brian", // Directory name in src/app/ (default: derived from email)
  "githubUsername": "brianlovin", // GitHub account (for PR author detection)
  "notionEmail": "blovin@makenotion.com", // Notion workspace email
  "notionUserId": "15e5218e-...", // Notion user ID (for Author property in Notion)
  "oauthEmail": "blovin@makenotion.com", // Email for OAuth authentication
  "oauthProvider": "okta" // OAuth provider (okta or google)
}
```

**Why add users to users.json?**

- Populate "Author" field in Notion prototypes database
- Map GitHub PR authors to playground usernames for automatic sync
- Override email-derived username with custom username

#### Development Setup

1. User runs `bun run dev` for the first time
2. `setup.ts` runs
3. Setup asks for a password — this password comes from [this doc](https://dev.notion.so/notion/Running-Prototype-Playground-246b35e6e67f80eba7aac829ae128ed4?source=copy_link#2ccb35e6e67f80c483dffffffb197517)
4. `setup.ts` prompts for username, GitHub username, and Notion email
5. Notion user ID is looked up via the production API (`/api/lookup-notion-user`)
6. User record is saved to `users.json` and committed with their first PR
7. A `.playground` file is created locally for development

### Environment Variables

All environment variables are documented in `.env.example`. Key variables:

#### Core Services

| Variable                          | Required | Purpose                             |
| --------------------------------- | -------- | ----------------------------------- |
| `NOTION_TOKEN`                    | Yes      | Notion API integration token        |
| `NOTION_GUIDES_DATABASE_ID`       | Yes      | Notion database for guides          |
| `VERCEL_AUTOMATION_BYPASS_SECRET` | Yes      | Bypasses Vercel password protection |

#### AI API Keys

| Variable                       | Required | Purpose                     |
| ------------------------------ | -------- | --------------------------- |
| `OPENAI_API_KEY`               | Optional | OpenAI API access           |
| `ANTHROPIC_API_KEY`            | Optional | Anthropic/Claude API access |
| `GOOGLE_GENERATIVE_AI_API_KEY` | Optional | Google AI API access        |
| `EXA_API_KEY`                  | Optional | Exa search API access       |

#### Authentication (Production Only)

| Variable               | Required         | Purpose                                         |
| ---------------------- | ---------------- | ----------------------------------------------- |
| `NEXT_PUBLIC_USE_OKTA` | Yes (production) | Set to `true` to enable Okta SSO                |
| `OKTA_CLIENT_ID`       | Yes (if SSO)     | Okta application client ID                      |
| `OKTA_CLIENT_SECRET`   | Yes (if SSO)     | Okta application client secret                  |
| `OKTA_ISSUER`          | Yes (if SSO)     | Okta tenant URL (e.g., https://notion.okta.com) |
| `NEXTAUTH_SECRET`      | Yes (if SSO)     | Random secret for JWT signing (32+ bytes)       |
| `NEXTAUTH_URL`         | Yes (if SSO)     | Full production URL                             |
| `AUTH_TRUST_HOST`      | Yes (production) | Set to `1` when behind trusted proxy            |

#### Slack Notifications

| Variable              | Required | Purpose                     |
| --------------------- | -------- | --------------------------- |
| `SLACK_WEBHOOK_URL`   | Optional | Slack incoming webhook URL  |
| `SLACK_NOTIFY_SECRET` | Optional | Webhook verification secret |

**See also:**

- [`.env.example`](./.env.example) for complete list
- [`docs/OKTA_SETUP.md`](./docs/OKTA_SETUP.md) for Okta configuration details
- [`docs/SECURITY.md`](./docs/SECURITY.md) for security considerations
