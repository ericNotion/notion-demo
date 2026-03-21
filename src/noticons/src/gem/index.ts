import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const gemIconGroup: IconGroup<"default"> = createIconGroup(
  "gem",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
