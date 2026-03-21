import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const pearIconGroup: IconGroup<"default"> = createIconGroup(
  "pear",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
