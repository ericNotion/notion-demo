import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const newDocumentIconGroup: IconGroup<"default"> = createIconGroup(
  "newDocument",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
