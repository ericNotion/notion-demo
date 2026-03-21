import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const plateFoodIconGroup: IconGroup<"default"> = createIconGroup(
  "plateFood",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
