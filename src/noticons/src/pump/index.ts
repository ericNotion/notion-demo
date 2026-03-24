import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const pumpIconGroup: IconGroup<"default"> = createIconGroup(
  "pump",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
