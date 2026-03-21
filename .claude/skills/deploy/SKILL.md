---
allowed-tools: Read, Edit, Task, Bash(git:*), Bash(gh:*), Bash(bun run:*), Bash(bun lint:*), Bash(bun test:*), Bash(which:*), Bash(brew:*), Bash(eslint:*), Bash(prettier:*), Bash(bunx eslint:*), Bash(bunx prettier:*), Bash(sleep:*)
description: Guide through git workflow - branch, commit, PR, and CI checks
---

# Deploy Your Changes

This command will guide you through deploying your changes to GitHub step by step. Don't worry if you're not familiar with git - I'll explain everything along the way!

---

## Phase 1: Prerequisites Check

First, let's make sure you have the tools needed to work with GitHub.

### Step 1.1: Check GitHub CLI

Run `which gh` to check if the GitHub CLI is installed.

**If gh is NOT installed:**

Tell the user:

> "The GitHub CLI (`gh`) helps us create pull requests and work with GitHub from the terminal. Let's install it!"

Guide them through installation:

```bash
brew install gh
```

If brew isn't installed either, guide them to https://brew.sh first.

### Step 1.2: Check GitHub Authentication

Run `gh auth status` to check if authenticated.

**If NOT authenticated:**

Tell the user:

> "Now we need to connect to your GitHub account. This is a one-time setup."

Guide them through:

```bash
gh auth login
```

Walk them through the interactive prompts:

1. Choose "GitHub.com"
2. Choose "HTTPS" (simpler for beginners)
3. Choose "Login with a web browser"
4. Copy the one-time code shown
5. Press Enter to open the browser
6. Paste the code and authorize

After auth succeeds, confirm: "Great! You're now connected to GitHub as @username."

---

## Phase 2: Assess Your Changes

Let's understand what you've been working on.

### Step 2.1: Check Current Branch

Run `git branch --show-current` to see which branch you're on.

### Step 2.2: Check for Changes

Run `git status` to see what files have changed.

### Step 2.3: Explain the State

Translate git status into plain language. For example:

> "Here's what I found:
>
> **Your current branch:** main
>
> **Files you've changed:**
>
> - `src/app/brian/my-prototype/page.tsx` (modified)
> - `src/app/brian/my-prototype/styles.css` (new file)
>
> You have 2 files ready to be saved and shared!"

**If there are NO changes:**

Tell the user:

> "It looks like you don't have any changes to deploy. Make some changes to your code first, then run `/deploy` again!"

Stop here - nothing to deploy.

---

## Phase 3: Run CI Checks Locally (Parallel)

Before we send your code to GitHub, let's make sure it passes all the quality checks. This saves time by catching issues early!

Tell the user:

> "I'm going to run quick checks on the files you changed. Running lint, format, and tests in parallel to save time!"

### Step 3.0: Get Changed Files

First, determine which files have changed to scope our checks:

```bash
git diff --name-only HEAD origin/main -- '*.ts' '*.tsx' '*.js' '*.jsx' '*.json' '*.css' '*.md'
```

If the branch doesn't have an upstream yet, use:

```bash
git diff --name-only main -- '*.ts' '*.tsx' '*.js' '*.jsx' '*.json' '*.css' '*.md'
```

Store this list of changed files for the following steps.

### Step 3.1: Run All Checks in Parallel

**IMPORTANT**: Use the Task tool to spawn THREE parallel subagents in a SINGLE message. This runs all checks simultaneously:

```
Task 1 (Lint):
- subagent_type: "general-purpose"
- model: "haiku"
- prompt: "Run eslint on these files and report results: {changed-ts-tsx-js-jsx-files}. If there are errors, list each error with file, line, and explanation. If all pass, say 'Lint: PASSED'."

Task 2 (Format):
- subagent_type: "general-purpose"
- model: "haiku"
- prompt: "Run 'prettier --check' on these files: {changed-files}. If formatting issues found, list the files. If all pass, say 'Format: PASSED'."

Task 3 (Test):
- subagent_type: "general-purpose"
- model: "haiku"
- prompt: "Run 'bun test' and report results. If tests fail, show which tests failed and why. If all pass, say 'Tests: PASSED'."
```

### Step 3.2: Collect Results

Wait for all three subagents to complete. Summarize results:

> "CI Check Results:
>
> - Lint: [PASSED/FAILED]
> - Format: [PASSED/FAILED]
> - Tests: [PASSED/FAILED]"

### Step 3.3: Handle Failures

**If lint fails:**

- Show the errors in plain language
- Help fix them one by one
- Re-run lint until it passes

**If format fails:**

Tell the user:

> "Some files need formatting adjustments. I can fix this automatically - it just adjusts spacing and code style."

Auto-fix by running:

```bash
prettier --write {changed-files}
```

**If tests fail:**

- Show which tests failed
- Explain what each test was checking
- Help debug and fix the issues
- Re-run tests until they pass

**Once all checks pass:**

Tell the user:

> "All checks passed! Your code is ready to be shared."

---

## Phase 4: Create a Branch (if needed)

### Step 4.1: Check if on Main

If the user is on the `main` branch, we need to create a feature branch.

**If on main:**

Read the `.playground` file to get the username.

Tell the user:

> "You're currently on the 'main' branch. In git, we use separate branches to keep your work isolated until it's reviewed.
>
> Think of it like making a copy of a document to edit, rather than editing the original directly. Once your changes are approved, they get merged back into the main version."

Generate a branch name based on:

- Username from `.playground` file
- A short description of the changes (derived from modified files/folders)

Example: `brian/prototype-updates` or `brian/new-chat-feature`

Ask the user to confirm the branch name or suggest their own.

### Step 4.2: Create the Branch

Run `git checkout -b {branch-name}`

Tell the user:

> "Created branch '{branch-name}' and switched to it."

**If already on a feature branch:**

Tell the user:

> "You're already on a feature branch called '{branch-name}'. Perfect - we'll use this one!"

---

## Phase 5: Commit Your Changes

Now let's save your changes with a commit.

### Step 5.1: Stage All Changes

Run `git add -A`

Tell the user:

> "I've staged all your changes. 'Staging' means marking files to be included in your next save point (commit)."

### Step 5.2: Generate and Create Commit

Generate a commit message automatically based on the changes. Use these patterns:

- If they modified a prototype: "Update [prototype-name] with new features"
- If they added new files: "Add [prototype-name] prototype"
- If they fixed something: "Fix [brief description]"
- If they added/modified commands or agents: "Add/Update [command/agent name]"

Run `git commit -m "{generated-message}"` immediately - do NOT ask the user for input.

Tell the user:

> "Changes saved! Your work is now recorded in git's history."

---

## Phase 6: Push and Create Pull Request

Time to share your changes with the team!

### Step 6.1: Push to GitHub

Run `git push -u origin {branch-name}`

**If push is rejected** because the remote has new changes:

Tell the user:

> "Someone else (or you from another device) pushed changes to this branch. Let me pull those changes and merge them with yours."

Run `git pull --rebase origin {branch-name}` to pull and rebase.

**If rebase succeeds:** Run `git push` again.

**If rebase has conflicts:** Handle them like merge conflicts in Phase 8.3, then run `git push`.

**If this is a new branch**, git will create it on GitHub.

Tell the user:

> "Your changes have been uploaded to GitHub!"

### Step 6.2: Check for Existing PR

Run `gh pr view` to see if a PR already exists for this branch.

**If PR already exists:**

Run `gh pr view --web` to open it in the browser.

Tell the user:

> "A pull request already exists for this branch. I've pushed your new changes to it and opened it in your browser!"

Skip to Phase 7.

### Step 6.3: Create a New Pull Request

Tell the user:

> "A Pull Request (PR) is a request to merge your changes into the main codebase. It lets others review your work before it's added."

Help them write a PR title and description:

- **Title**: Short summary (e.g., "Add new chat prototype")
- **Description**: What changed and why

Create the PR:

```bash
gh pr create --title "{title}" --body "{description}"
```

### Step 6.4: Open in Browser

Run `gh pr view --web` to open the PR in the browser.

Tell the user:

> "Your pull request is now live on GitHub! I've opened it in your browser."

---

## Phase 7: Monitor CI on GitHub

GitHub will now run the same checks we ran locally, plus any additional ones.

### Step 7.1: Delegate to CI Monitor Subagent

Tell the user:

> "GitHub is now running automated checks on your code. I'm delegating this to a background monitor. This usually takes 1-3 minutes..."

**IMPORTANT**: Use the Task tool to spawn the CI monitor subagent:

```
Task (CI Monitor):
- subagent_type: "ci-monitor"
- model: "haiku"
- prompt: "Monitor the CI checks for the current PR. Poll `gh pr checks` every 20 seconds until all critical checks (lint, format, test, build) are complete or 5 minutes have passed. Return a summary of the results."
```

### Step 7.2: Handle CI Results

When the subagent returns, parse its summary.

**Important notes about CI checks:**

- The **lint**, **format**, **test**, and **build** checks are the important ones - these must pass
- The **Vercel** check may fail or be skipped - this is okay! Not everyone has Vercel access. Deployments happen automatically after merge via a separate workflow.
- Other checks (Wiz scanners, semgrep) are security scans and usually pass quickly

**If lint, format, test, and build all pass:**

The PR is ready! Skip to the Success section.

**If any of lint/format/test/build fails:**

Tell the user:

> "One of the GitHub checks failed. Don't worry - let me help you fix it!"

For each failure:

1. Explain what went wrong in plain language
2. Help them fix the issue
3. Stage and commit the fix: `git add -A && git commit -m "Fix [issue]"`
4. Push the fix: `git push`
5. Spawn the CI monitor subagent again to wait for the new checks
6. Repeat until all checks pass

**If you get stuck:**

> "If you're having trouble with this, reach out in **#prototype-playground** on Slack and someone will help you!"

---

## Phase 8: Handle Merge Conflicts (if any)

Sometimes the main branch changes while you're working, causing conflicts.

### Step 8.1: Check if Behind Main

Run:

```bash
git fetch origin main
git log HEAD..origin/main --oneline
```

**If there are no commits** (output is empty), you're up to date! Skip to the end.

**If there are commits**, the main branch has changed since you started.

### Step 8.2: Merge Main into Your Branch

Tell the user:

> "The main branch has been updated since you started. I'll merge those changes into your branch now."

Run `git merge origin/main`

**If merge succeeds with no conflicts:**

Tell the user:

> "Merged successfully! Pushing the update..."

Run `git push` and return to Phase 7 to verify CI.

### Step 8.3: Handle Merge Conflicts

**If there are conflicts:**

Tell the user:

> "There are some conflicts - this happens when the same part of a file was changed in both branches. I'll help you resolve each one."

Run `git diff --name-only --diff-filter=U` to list conflicting files.

For each conflicting file:

1. **Show the conflict:**
   Read the file and find the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).

2. **Explain both versions:**

   > "In `{filename}`, there's a conflict:
   >
   > **Your version (what you wrote):**
   >
   > ```
   > [their changes]
   > ```
   >
   > **Main branch version (what someone else changed):**
   >
   > ```
   > [main's changes]
   > ```
   >
   > What would you like to do?"

3. **Offer options:**
   - Keep your version
   - Keep main's version
   - Keep both (if they don't actually conflict)
   - Write something different (let them specify)

4. **Apply the resolution:**
   Edit the file to remove conflict markers and apply the chosen resolution.

5. **Stage the resolved file:**
   Run `git add {filename}`

After all conflicts are resolved:

Run `git commit -m "Merge main and resolve conflicts"`
Run `git push`

Tell the user:

> "Conflicts resolved and pushed! Let's verify CI passes..."

Return to Phase 7 to verify CI.

---

## Success!

Once CI passes (lint, format, test) and there are no conflicts:

Tell the user:

> "🚀 You did it! Your changes are on GitHub and ready to merge.
>
> **Summary:**
>
> - Branch: `{branch-name}`
> - Pull Request: [PR URL]
> - Status: Ready to merge ✓
>
> Your PR is ready to merge! Feel free to merge it when you're ready and it will be deployed within a few minutes.
>
> If you have any questions, reach out in **#prototype-playground** on Slack."
