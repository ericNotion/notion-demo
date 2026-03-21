import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const eggIconGroup: IconGroup<"default"> = createIconGroup(
  "egg",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
