---
name: swr-data-fetching
description: Fetch data with SWR hooks. Use when fetching API data, loading remote resources, or when the user mentions "data fetching", "API calls", "useSWR", or needs to load data from endpoints.
---

# SWR Data Fetching

SWR is the data fetching library for this project.

## When to Use

- **API data** - Fetching from REST endpoints
- **User data** - Loading current user, profiles
- **Lists and collections** - Loading items, search results
- **Real-time updates** - Data that needs periodic refresh

## Basic Usage

```tsx
import useSWR from "swr";

// Define a fetcher function
const fetcher = (url: string) => fetch(url).then((res) => res.json());

function UserProfile() {
  const { data, error, isLoading } = useSWR("/api/user", fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return <div>Hello, {data.name}!</div>;
}
```

## The useSWR Hook

Returns three essential states:

| Return Value   | Type       | Description                  |
| -------------- | ---------- | ---------------------------- |
| `data`         | `T`        | The fetched data             |
| `error`        | `Error`    | Error thrown by fetcher      |
| `isLoading`    | `boolean`  | True during initial load     |
| `isValidating` | `boolean`  | True during any revalidation |
| `mutate`       | `function` | Trigger revalidation         |

## Fetcher Functions

### Basic JSON Fetcher

```tsx
const fetcher = (url: string) => fetch(url).then((r) => r.json());
```

### Fetcher with Error Handling

```tsx
const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    throw error;
  }
  return res.json();
};
```

### POST Fetcher

```tsx
const postFetcher = ([url, body]: [string, object]) =>
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then((r) => r.json());

// Usage
const { data } = useSWR(["/api/search", { query: "hello" }], postFetcher);
```

## Conditional Fetching

Pass `null` to skip the request:

```tsx
// Only fetch when userId exists
const { data } = useSWR(userId ? `/api/users/${userId}` : null, fetcher);

// Only fetch when authenticated
const { data } = useSWR(isLoggedIn ? "/api/profile" : null, fetcher);
```

## Mutation & Revalidation

Update cache and trigger refresh:

```tsx
import useSWR, { mutate } from "swr";

function Profile() {
  const { data } = useSWR("/api/user", fetcher);

  async function updateName(newName: string) {
    // Optimistic update
    mutate("/api/user", { ...data, name: newName }, false);

    // Send request
    await fetch("/api/user", {
      method: "PATCH",
      body: JSON.stringify({ name: newName }),
    });

    // Revalidate
    mutate("/api/user");
  }

  return <button onClick={() => updateName("New Name")}>Update</button>;
}
```

## Configuration Options

```tsx
const { data } = useSWR("/api/data", fetcher, {
  revalidateOnFocus: false, // Don't refetch on window focus
  revalidateOnReconnect: true, // Refetch on network recovery
  refreshInterval: 30000, // Poll every 30 seconds
  dedupingInterval: 2000, // Dedupe requests within 2s
  errorRetryCount: 3, // Retry failed requests 3 times
});
```

## Global Configuration

The app has SWR configured globally in the root layout with error retry disabled:

```tsx
// Already configured - you don't need to add this
<SWRConfig value={{ shouldRetryOnError: false }}>{children}</SWRConfig>
```

## Creating Custom Hooks

Wrap SWR in custom hooks for reusability:

```tsx
// hooks/useCurrentUser.ts
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function useCurrentUser() {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/current-user",
    fetcher,
  );

  return {
    user: data,
    isLoading,
    isError: error,
    mutate,
  };
}

// Usage
function Header() {
  const { user, isLoading } = useCurrentUser();
  if (isLoading) return <Skeleton />;
  return <span>{user.name}</span>;
}
```

## TypeScript Support

```tsx
interface User {
  id: string;
  name: string;
  email: string;
}

const fetcher = (url: string): Promise<User> =>
  fetch(url).then((r) => r.json());

function Profile() {
  const { data } = useSWR<User>("/api/user", fetcher);
  // data is typed as User | undefined
  return <div>{data?.name}</div>;
}
```

## Common Patterns

### Loading States

```tsx
function DataList() {
  const { data, error, isLoading } = useSWR("/api/items", fetcher);

  if (error) return <ErrorMessage error={error} />;
  if (isLoading) return <Skeleton />;
  if (!data?.length) return <Empty />;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

### Dependent Fetching

```tsx
function UserPosts() {
  // First fetch user
  const { data: user } = useSWR("/api/user", fetcher);

  // Then fetch posts (only when user exists)
  const { data: posts } = useSWR(
    user ? `/api/users/${user.id}/posts` : null,
    fetcher,
  );

  return <PostList posts={posts} />;
}
```

### Pagination

```tsx
function PaginatedList() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useSWR(`/api/items?page=${page}`, fetcher);

  return (
    <>
      <ItemList items={data?.items} />
      <button onClick={() => setPage(page + 1)} disabled={isLoading}>
        Next Page
      </button>
    </>
  );
}
```

## References

- [SWR Documentation](https://swr.vercel.app/)
- [SWR API Reference](https://swr.vercel.app/docs/api)
