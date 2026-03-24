import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const brightnessHighIconGroup: IconGroup<"default"> = createIconGroup(
  "brightnessHigh",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
