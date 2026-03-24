import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const thoughtIconGroup: IconGroup<"default"> = createIconGroup(
  "thought",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
