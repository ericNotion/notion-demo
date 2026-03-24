import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const contrastIconGroup: IconGroup<"default"> = createIconGroup(
  "contrast",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
