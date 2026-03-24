import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const thinkingIconGroup: IconGroup<"default"> = createIconGroup(
  "thinking",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
