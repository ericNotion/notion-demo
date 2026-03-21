import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const wrenchIconGroup: IconGroup<"default"> = createIconGroup(
  "wrench",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
