import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const listIconGroup: IconGroup<"default"> = createIconGroup(
  "list",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
