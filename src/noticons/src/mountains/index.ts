import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const mountainsIconGroup: IconGroup<"default"> = createIconGroup(
  "mountains",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
