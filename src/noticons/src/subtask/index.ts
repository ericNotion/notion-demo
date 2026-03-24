import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const subtaskIconGroup: IconGroup<"default"> = createIconGroup(
  "subtask",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
