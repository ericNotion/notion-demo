import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const renameIconGroup: IconGroup<"default"> = createIconGroup(
  "rename",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
