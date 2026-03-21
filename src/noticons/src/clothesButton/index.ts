import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const clothesButtonIconGroup: IconGroup<"default"> = createIconGroup(
  "clothesButton",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
