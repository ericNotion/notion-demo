## Data & State Constraints

- Never use `useEffect` for data fetching - use SWR hooks
- Use Jotai atoms for shared state across components
- Use `atomWithStorage` for state that should persist to localStorage
- Prefer `useAtomValue`/`useSetAtom` over `useAtom` for clarity
