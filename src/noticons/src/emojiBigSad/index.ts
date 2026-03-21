import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const emojiBigSadIconGroup: IconGroup<"default"> = createIconGroup(
  "emojiBigSad",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
