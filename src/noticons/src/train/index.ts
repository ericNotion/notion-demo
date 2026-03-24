import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const trainIconGroup: IconGroup<"default"> = createIconGroup(
  "train",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
