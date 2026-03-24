import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const uploadDocumentIconGroup: IconGroup<"default"> = createIconGroup(
  "uploadDocument",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
