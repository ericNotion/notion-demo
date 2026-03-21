---
name: tdd
description: Test-Driven Development workflow - writes comprehensive tests before implementation code. Use when building features with TDD methodology, writing tests first, or when user requests test coverage for new functionality.
---

# Test-Driven Development (TDD) Skill

## Overview

This skill enforces test-driven development workflow: write tests first, then implementation. The assistant must ALWAYS write comprehensive tests before writing any implementation code.

## Usage

```
/tdd [feature description]
```

Example:

```
/tdd when user clicks the create button, a new todo is created, stored and appears in the ui in the first position
```

## Workflow

### Step 1: Analyze the Feature and Choose Test Type

- Parse the feature description
- **Choose test type:**
  - **Playwright E2E**: If it touches the browser (clicks, DOM, UI updates, persistence, navigation)
  - **Bun unit tests**: If it's pure logic (data transformations, calculations, validators)
  - **Default**: When in doubt, use Playwright E2E tests
- Identify key behaviors to test
- List edge cases and failure scenarios

### Step 2: Write Tests First (MANDATORY)

**CRITICAL**: The assistant must write comprehensive tests BEFORE any implementation code.

Tests should cover:

- Happy path (normal expected behavior)
- Edge cases (boundary conditions, empty states, etc.)
- Error cases (invalid input, null values, etc.)
- Integration points (if applicable)

Test file naming conventions:

- **Playwright E2E**: `src/app/{username}/{prototype-name}/tests/e2e/feature-name.e2e.ts`
- **Unit tests**: `src/app/{username}/{prototype-name}/tests/feature-name.test.ts`

**CRITICAL — File extensions:** Playwright E2E tests MUST use `.e2e.ts` (not `.spec.ts`). Bun's test runner picks up both `.test.ts` and `.spec.ts` files automatically, so using `.spec.ts` for Playwright tests causes CI failures when `bun test` tries to run them. The `.e2e.ts` extension avoids this collision. `playwright.config.ts` is configured with `testMatch: "**/*.e2e.ts"` to match this convention.

**Important:** Each prototype's tests live inside its own directory at `src/app/{username}/{prototype-name}/tests/`. This keeps each prototype self-contained. The root `tests/` directory is reserved for shared project-level tests only.

**Note on prototype paths:** Individual prototypes live in `src/app/{username}/{prototype-name}/` (e.g., `src/app/wdawson/images-in-simple-tables/`), and their tests live in that prototype's `tests/` subdirectory.

**Test Setup (Already Configured):**
The project has Playwright already installed and configured at the root level. The `playwright.config.ts` uses `testDir: "./src/app"` to discover E2E tests inside prototype directories.

**Running Tests:**

- **All unit tests**: `bun test` (runs all `*.test.ts` files in the project)
- **Single prototype's unit tests**: `bun test src/app/{username}/{prototype-name}/tests/`
- **E2E tests for a specific prototype**: `npx playwright test src/app/{username}/{prototype-name}/tests/e2e/`
- **Single E2E test**: `npx playwright test src/app/{username}/{prototype-name}/tests/e2e/feature-name.e2e.ts`
- **E2E headed mode** (for debugging): `npx playwright test src/app/{username}/{prototype-name}/tests/e2e/feature-name.e2e.ts --headed`

**Note**: `bun test` finds tests everywhere. To run just one prototype's unit tests, scope the path as shown above.

**CRITICAL for E2E tests:** The Next.js dev server MUST be running at `localhost:4000` before executing Playwright tests. Run `bun run dev` in a separate terminal first.

### Step 3: Show Test Coverage Plan to User

**CRITICAL**: Show the test coverage plan as a bullet list BEFORE writing any test code.

Present:

- Clear list of scenarios to be tested (happy path, edge cases, errors)
- What behaviors will be validated
- Any assumptions about the implementation
- Ask user: "Does this coverage look right? Should I add, remove, or change anything before I write the tests?"

**Only write test code after user approves the coverage plan.** This prevents writing 100 lines of tests the user doesn't want.

### Step 4: Write and Show Test Code

After user approves the coverage plan, write the actual test file with:

- Clear explanation of what each test validates
- Ask user: "Do these tests look good? Should I adjust anything?"

### Step 5: Implementation (Only After Tests)

**Only proceed after user confirms tests or makes requested changes.**

Write the minimal implementation needed to pass all tests.

### Step 6: Verify

- **Run the tests** and show the output
- For E2E: `npx playwright test src/app/{username}/{prototype-name}/tests/e2e/feature-name.e2e.ts`
- For unit tests: `bun test src/app/{username}/{prototype-name}/tests/`
- Report pass/fail status
- **If tests fail**: Fix the implementation (not the tests) and re-run until all tests pass
- Explain any assumptions made
- Suggest next steps or improvements

## Output Format

The assistant should create separate code blocks or files:

1. **Test File** (shown after coverage plan approval)
2. **Implementation File** (shown only after test approval)

## Example Interaction

**User**: `/tdd when user clicks the create button, a new todo is created, stored and appears in the ui in the first position`

**Assistant**:

```
I'll help you build this feature using TDD. Let me start with a test coverage plan.

This is a todo creation feature with persistence and UI updates. I'll write E2E tests using Playwright.

**Test Coverage Plan:**
- New todo appears in first position after clicking create
- Todo is persisted (survives page reload)
- Create button is disabled when input is empty
- Multiple todos maintain correct order (newest first)
- Todo has correct data structure (text, timestamp, id)

Does this coverage look right? Should I add, remove, or change anything before I write the tests?
```

[After user approves coverage]

```
Great! Here are the tests:

File: src/app/wdawson/todo-app/tests/e2e/todo-creation.e2e.ts

[Shows test file with Playwright test cases]

Do these tests look good? Should I adjust anything before writing the implementation?
```

## Key Principles

1. **Tests First, Always**: Never write implementation before tests
2. **User Confirmation**: Get approval on test coverage plan, then tests, before implementation
3. **Comprehensive Coverage**: Test happy path, edges, and errors
4. **Clear Communication**: Explain what's being tested and why
5. **Minimal Implementation**: Write just enough code to pass tests
6. **Stay Within Prototype Scope**: All test files and implementation must stay within `src/app/{username}/{prototype-name}/`. Never modify shared project files, root configs, or other users' prototypes.

## Common Test Patterns

### Playwright E2E Testing (Default)

```typescript
// src/app/wdawson/todo-app/tests/e2e/feature.e2e.ts
import { test, expect } from "@playwright/test";

test.describe("Feature Name", () => {
  test("should do something when user interacts", async ({ page }) => {
    // Route matches the prototype's directory under src/app/
    await page.goto("/wdawson/todo-app");
    // Test user interactions
    // Verify DOM state and behavior
  });

  test("should handle edge case", async ({ page }) => {
    // Test boundary conditions
  });
});
```

**Important for interactive components:**
When testing features like contentEditable, drag-and-drop, focus/selection, or anything requiring access to DOM state that Playwright's locator API can't reach, use `page.evaluate()`:

```typescript
// Inspect selection state
const selectionText = await page.evaluate(() => {
  return window.getSelection()?.toString();
});

// Check active element
const activeElementId = await page.evaluate(() => {
  return document.activeElement?.id;
});

// Get computed styles
const backgroundColor = await page.evaluate((selector) => {
  const el = document.querySelector(selector);
  return window.getComputedStyle(el).backgroundColor;
}, ".my-element");
```

**Known limitation:** Synthetic events dispatched via `page.evaluate()` (e.g., manually firing `dragstart`/`drop` events) do NOT trigger the browser's native machinery. For example, native drag-and-drop cleanup won't run, which can produce false-passing tests. Prefer real user interactions via Playwright's API (`page.dragAndDrop()`, `page.click()`, etc.) when possible.

### Bun Unit Testing

For pure functions and business logic that don't require a browser. These tests run fast in Bun's runtime.

**When to use:**

- Data transformations (formatting, parsing, filtering)
- Calculations and algorithms
- Validators and sanitizers
- API response processors
- Date/time utilities
- String manipulation helpers

**Example:**

```typescript
// src/app/wdawson/todo-app/tests/todoHelpers.test.ts
import { describe, expect, test } from "bun:test";
// Import path is relative to test file location (one level up from tests/)
import { formatTodoText, isPriorityTodo } from "../lib/todoHelpers";

describe("formatTodoText", () => {
  test("trims whitespace and capitalizes first letter", () => {
    expect(formatTodoText("  buy milk  ")).toBe("Buy milk");
  });

  test("handles empty string", () => {
    expect(formatTodoText("")).toBe("");
  });

  test("removes extra spaces between words", () => {
    expect(formatTodoText("clean    kitchen")).toBe("Clean kitchen");
  });
});

describe("isPriorityTodo", () => {
  test("returns true for todos with ! prefix", () => {
    expect(isPriorityTodo("!urgent task")).toBe(true);
  });

  test("returns false for normal todos", () => {
    expect(isPriorityTodo("regular task")).toBe(false);
  });
});
```

**Note**: Import paths are relative to the test file's location. Since tests are in `tests/` and source is one level up, use `../lib/` or `../components/`. If tests are nested deeper (e.g., `tests/unit/`), adjust the path accordingly.

**Running:** `bun test` runs all `*.test.ts` files in the project.

## Anti-Patterns to Avoid

- Writing implementation code first
- Writing trivial tests that don't validate behavior
- Skipping edge case testing
- Not getting user confirmation on test coverage plan
- Testing implementation details instead of behavior

## Success Criteria

- Test coverage plan shown and approved before writing test code
- Tests are written before implementation
- Tests are comprehensive and meaningful
- User has approved the tests
- Implementation passes all tests
- Code is clean and minimal
