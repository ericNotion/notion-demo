import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const thoughtAlertIconGroup: IconGroup<"default"> = createIconGroup(
  "thoughtAlert",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
