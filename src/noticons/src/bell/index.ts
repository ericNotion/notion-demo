import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const bellIconGroup: IconGroup<"default"> = createIconGroup(
  "bell",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
