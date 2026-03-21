import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const medicationIconGroup: IconGroup<"default"> = createIconGroup(
  "medication",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
