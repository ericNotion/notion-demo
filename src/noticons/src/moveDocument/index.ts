import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const moveDocumentIconGroup: IconGroup<"default"> = createIconGroup(
  "moveDocument",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
