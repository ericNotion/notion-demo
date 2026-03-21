import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const trainHighSpeedIconGroup: IconGroup<"default"> = createIconGroup(
  "trainHighSpeed",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
