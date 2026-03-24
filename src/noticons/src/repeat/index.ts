import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const repeatIconGroup: IconGroup<"default"> = createIconGroup(
  "repeat",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
