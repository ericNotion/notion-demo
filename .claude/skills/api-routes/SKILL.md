---
name: api-routes
description: Create Next.js API route handlers. Use when building backend endpoints, handling POST/GET requests, creating API routes, or when the user mentions "API", "endpoint", "route handler", "backend", or server-side logic.
---

# Next.js API Routes

API routes in Next.js App Router use route handlers (`route.ts` files) to create backend endpoints.

## When to Use

- **Backend logic** - Server-side operations
- **External APIs** - Proxy requests to third-party services
- **File processing** - Handle uploads, transformations
- **AI chat endpoints** - Streaming responses

## File Location

```
src/app/
├── (root)/api/           # Shared API routes
│   └── guides/route.ts   # → /api/guides
├── brian/
│   └── my-prototype/
│       └── api/
│           └── chat/route.ts  # → /brian/my-prototype/api/chat
```

## Basic GET Route

```typescript
// api/items/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const items = await fetchItems();

    return NextResponse.json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    return NextResponse.json(
      { error: "Failed to fetch items" },
      { status: 500 },
    );
  }
}
```

## Basic POST Route

```typescript
// api/items/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate input
    if (!body.name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const item = await createItem(body);

    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    console.error("Error creating item:", error);
    return NextResponse.json(
      { error: "Failed to create item" },
      { status: 500 },
    );
  }
}
```

## Request Handling

### Reading JSON Body

```typescript
export async function POST(req: Request) {
  const { name, email } = await req.json();
}
```

### Reading Headers

```typescript
export async function POST(req: Request) {
  const contentType = req.headers.get("content-type");
  const authHeader = req.headers.get("authorization");
}
```

### Reading Query Parameters

```typescript
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || "1";
  const limit = searchParams.get("limit") || "10";
}
```

### Reading Form Data

```typescript
export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const name = formData.get("name") as string;
}
```

## Response Patterns

### JSON Response

```typescript
return NextResponse.json({ data: items });
return NextResponse.json({ error: "Not found" }, { status: 404 });
```

### Plain Response

```typescript
return new Response("OK", { status: 200 });
return new Response("Not Found", { status: 404 });
```

### With Headers

```typescript
return NextResponse.json(data, {
  headers: {
    "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
  },
});
```

### Streaming Response

```typescript
// For AI chat - see vercel-ai-sdk skill
return result.toDataStreamResponse();
```

## Environment Variables

```typescript
import { assertString } from "@jclem/assert";

export async function POST(req: Request) {
  // Validate required env vars
  assertString(process.env.API_KEY, "API_KEY is not set");

  // Or check manually
  if (!process.env.API_KEY) {
    return new Response("API_KEY not configured", { status: 500 });
  }
}
```

## Timeout Configuration

For long-running operations (like AI):

```typescript
// Set max duration (Vercel serverless timeout)
export const maxDuration = 30; // seconds

export async function POST(req: Request) {
  // Long operation...
}
```

## Error Handling Pattern

```typescript
export async function POST(req: Request) {
  try {
    // Validate environment
    if (!process.env.REQUIRED_KEY) {
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    // Validate input
    const body = await req.json();
    if (!body.requiredField) {
      return NextResponse.json(
        { error: "requiredField is required" },
        { status: 400 },
      );
    }

    // Business logic
    const result = await doSomething(body);

    return NextResponse.json(result);
  } catch (error) {
    console.error("API error:", error);

    // Return generic error to client
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
```

## Dynamic Route Segments

```typescript
// api/items/[id]/route.ts
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const item = await getItem(id);

  if (!item) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(item);
}
```

## Multiple HTTP Methods

```typescript
// api/items/route.ts
export async function GET() {
  // List items
}

export async function POST(req: Request) {
  // Create item
}

// api/items/[id]/route.ts
export async function GET(req: Request, { params }) {
  // Get single item
}

export async function PUT(req: Request, { params }) {
  // Update item
}

export async function DELETE(req: Request, { params }) {
  // Delete item
}
```

## CORS Headers

```typescript
export async function OPTIONS() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

export async function POST(req: Request) {
  const response = NextResponse.json({ data: "..." });
  response.headers.set("Access-Control-Allow-Origin", "*");
  return response;
}
```

## Common Patterns

### Proxy to External API

```typescript
export async function POST(req: Request) {
  const body = await req.json();

  const response = await fetch("https://external-api.com/endpoint", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.EXTERNAL_API_KEY}`,
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return NextResponse.json(data);
}
```
