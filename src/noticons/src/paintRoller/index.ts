import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const paintRollerIconGroup: IconGroup<"default"> = createIconGroup(
  "paintRoller",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
