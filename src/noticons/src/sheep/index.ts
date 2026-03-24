import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const sheepIconGroup: IconGroup<"default"> = createIconGroup(
  "sheep",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
