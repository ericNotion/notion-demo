# Notion File Upload Skill

Upload files to Notion and attach them to page properties.

## Prerequisites

- `NOTION_TOKEN` from `.env.local`
- Integration must have access to the target page

## Three-Step Process

```bash
NOTION_TOKEN=$(grep NOTION_TOKEN .env.local | cut -d '=' -f2)

# 1. Create file upload object
UPLOAD=$(curl -s -X POST "https://api.notion.com/v1/file_uploads" \
  -H "Authorization: Bearer $NOTION_TOKEN" \
  -H "Notion-Version: 2022-06-28" \
  -H "Content-Type: application/json" \
  -d '{}')

UPLOAD_ID=$(echo "$UPLOAD" | jq -r '.id')
UPLOAD_URL=$(echo "$UPLOAD" | jq -r '.upload_url')

# 2. Send the file (MUST use upload_url from response!)
curl -s -X POST "$UPLOAD_URL" \
  -H "Authorization: Bearer $NOTION_TOKEN" \
  -H "Notion-Version: 2022-06-28" \
  -F "file=@/path/to/file.png"

# 3. Attach to page property
curl -s -X PATCH "https://api.notion.com/v1/pages/$PAGE_ID" \
  -H "Authorization: Bearer $NOTION_TOKEN" \
  -H "Notion-Version: 2022-06-28" \
  -H "Content-Type: application/json" \
  -d "{
    \"properties\": {
      \"Property Name\": {
        \"files\": [{\"type\": \"file_upload\", \"file_upload\": {\"id\": \"$UPLOAD_ID\"}}]
      }
    }
  }"
```

## Helper Function

```bash
upload_to_notion() {
  local file_path="$1"
  local upload=$(curl -s -X POST "https://api.notion.com/v1/file_uploads" \
    -H "Authorization: Bearer $NOTION_TOKEN" \
    -H "Notion-Version: 2022-06-28" \
    -H "Content-Type: application/json" -d '{}')
  local id=$(echo "$upload" | jq -r '.id')
  local url=$(echo "$upload" | jq -r '.upload_url')
  curl -s -X POST "$url" \
    -H "Authorization: Bearer $NOTION_TOKEN" \
    -H "Notion-Version: 2022-06-28" \
    -F "file=@$file_path" > /dev/null
  echo "$id"
}

# Usage
FILE_ID=$(upload_to_notion "/path/to/image.png")
```

## Key Points

- **Endpoint**: `/v1/file_uploads` (underscore, not hyphen)
- **CRITICAL**: Use `upload_url` from create response - don't construct the URL yourself (may use different subdomain like `api-dev.notion.com`)
- Files must be attached within 1 hour or they're archived
- Max file size: 5 GiB (files >20 MiB need multi-part mode)

## Troubleshooting

**"Invalid request URL"** → Use underscore: `/v1/file_uploads`

**"File data must be sent as multipart/form-data"** → Use `upload_url` from response, not a self-constructed URL

## Sources

- [Notion File Upload API](https://developers.notion.com/reference/file-upload)
- [Uploading small files](https://developers.notion.com/docs/uploading-small-files)
