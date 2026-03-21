import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const bombIconGroup: IconGroup<"default"> = createIconGroup(
  "bomb",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
