import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const deleteIconGroup: IconGroup<"default"> = createIconGroup(
  "delete",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
