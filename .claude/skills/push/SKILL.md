---
allowed-tools: Bash(git:*), Bash(gh:*), Bash(bunx prettier:*)
description: Quick commit and push changes
---

# Quick Push

Fast path to commit and push changes. No explanations, just execute.

## Steps

### 1. Check for changes

Run `git status --porcelain`.

If empty, say "No changes to commit" and stop.

### 2. Check branch

Run `git branch --show-current`.

If on `main`:

- Read `.playground` for username
- Look at changed files to derive a short branch name (e.g., `brian/chat-prototype` from changes in `src/app/brian/chat-prototype/`)
- Create branch: `git checkout -b {username}/{derived-name}`

### 3. Format, commit, and push

```bash
git add -A
bunx prettier --write $(git diff --cached --name-only)
git add -A
```

Generate a commit message based on the changes:

- New prototype: "Add [prototype-name] prototype"
- Modified prototype: "Update [prototype-name]"
- New/modified commands: "Add/Update [command-name] command"
- New/modified skills: "Add/Update [skill-name] skill"
- Bug fix: "Fix [brief description]"
- Multiple areas: "Update [main-area] and [other-area]"

```bash
git commit -m "{generated-message}"
git push -u origin $(git branch --show-current)
```

### 4. Create PR if needed

Run `gh pr view` to check if PR exists.

**If no PR exists:**

Generate a PR title based on the changes (same logic as commit message). Do NOT use the branch name as the title.

```bash
gh pr create --title "{generated-title}" --body ""
```

**If PR already exists:** Skip PR creation (changes are already pushed to the existing PR).

### 5. Done

Output: `Pushed to {branch-name}` and include PR URL if one exists.
