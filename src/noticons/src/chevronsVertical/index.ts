import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const chevronsVerticalIconGroup: IconGroup<"default"> = createIconGroup(
  "chevronsVertical",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
