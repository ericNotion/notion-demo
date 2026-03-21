import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const addIconGroup: IconGroup<"default"> = createIconGroup(
  "add",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
