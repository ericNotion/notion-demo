import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const priorityHighIconGroup: IconGroup<"default"> = createIconGroup(
  "priorityHigh",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
