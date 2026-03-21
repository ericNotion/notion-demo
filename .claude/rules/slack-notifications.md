## Slack Notification Pipeline

The Slack notification system uses a Notion automation + webhook architecture:

```
PR merged → sync-to-notion.ts → Notion DB → Notion Automation → /api/slack-notify → Slack
```

### Key Components

- **Notion Automation**: Triggers on "Page added" in the Prototypes database, sends webhook to `/api/slack-notify`
- **`/api/slack-notify`**: Validates payload, verifies deployment with bypass header, sends Slack message
- **`generated-schemas.ts`**: Zod schemas for type-safe webhook payload parsing

### When Modifying

- If Notion DB schema changes: Run `bun run notion:types` to regenerate schemas
- If changing webhook payload handling: Update both `NotionWebhookPayloadSchema` and `parseWebhookPayload()` in `generated-schemas.ts`
- The endpoint sends notifications even if deployment check fails (logs warning)

### Testing

Test the endpoint with:

```bash
export $(grep -v '^#' .env.local | xargs) && curl -X POST "https://playground.makenotion.com/api/slack-notify" \
  -H "x-vercel-protection-bypass: $VERCEL_AUTOMATION_BYPASS_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"ID":"username/slug","Name":"Title","Author":"Name"}'
```

### Environment Variables

- `SLACK_WEBHOOK_URL`: Required for sending notifications
- `VERCEL_AUTOMATION_BYPASS_SECRET`: Required for deployment verification
- `SLACK_NOTIFY_SECRET`: Optional webhook auth (checks `Authorization: Bearer <secret>`)
