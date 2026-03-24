import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const saveIconGroup: IconGroup<"default"> = createIconGroup(
  "save",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
