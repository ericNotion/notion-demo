import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const officialDocumentIconGroup: IconGroup<"default"> = createIconGroup(
  "officialDocument",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
