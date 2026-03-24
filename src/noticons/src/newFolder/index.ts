import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const newFolderIconGroup: IconGroup<"default"> = createIconGroup(
  "newFolder",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
