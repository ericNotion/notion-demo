import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const folderIconGroup: IconGroup<"default"> = createIconGroup(
  "folder",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
