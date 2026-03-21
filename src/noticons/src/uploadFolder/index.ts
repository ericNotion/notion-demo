import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const uploadFolderIconGroup: IconGroup<"default"> = createIconGroup(
  "uploadFolder",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
