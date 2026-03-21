"use client";

import { Agentation as AgentationComponent } from "agentation";

/**
 * Visual feedback tool for AI agents.
 * Allows developers to click elements and generate structured feedback.
 * Only renders in development mode.
 *
 * @example
 * ```tsx
 * import { Agentation } from "@/components/playground-kit";
 *
 * export default function Page() {
 *   return (
 *     <main>
 *       {/* Your prototype content *\/}
 *       <Agentation />
 *     </main>
 *   );
 * }
 * ```
 */
export function Agentation() {
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return <AgentationComponent />;
}
