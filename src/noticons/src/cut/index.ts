import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cutIconGroup: IconGroup<"default"> = createIconGroup(
  "cut",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
