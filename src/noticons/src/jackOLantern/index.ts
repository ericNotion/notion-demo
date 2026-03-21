import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const jackOLanternIconGroup: IconGroup<"default"> = createIconGroup(
  "jackOLantern",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
