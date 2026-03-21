import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const geminiIconGroup: IconGroup<"default"> = createIconGroup(
  "gemini",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
