## API Route Constraints

- Always wrap route handlers in try/catch
- Validate required environment variables at the start of handlers
- Validate request body before processing
- Log errors server-side with `console.error`
- Return safe error messages to clients (never expose stack traces)
