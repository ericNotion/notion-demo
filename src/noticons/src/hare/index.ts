import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const hareIconGroup: IconGroup<"default"> = createIconGroup(
  "hare",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
