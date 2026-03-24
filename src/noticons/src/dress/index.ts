import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const dressIconGroup: IconGroup<"default"> = createIconGroup(
  "dress",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
