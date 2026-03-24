import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const newAlertIconGroup: IconGroup<"default"> = createIconGroup(
  "newAlert",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
