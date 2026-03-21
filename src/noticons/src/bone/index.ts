import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const boneIconGroup: IconGroup<"default"> = createIconGroup(
  "bone",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
