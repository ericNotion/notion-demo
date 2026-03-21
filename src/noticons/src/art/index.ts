import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const artIconGroup: IconGroup<"default"> = createIconGroup(
  "art",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
