import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const meatIconGroup: IconGroup<"default"> = createIconGroup(
  "meat",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
