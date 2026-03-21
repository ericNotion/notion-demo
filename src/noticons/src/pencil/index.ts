import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const pencilIconGroup: IconGroup<"default"> = createIconGroup(
  "pencil",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
