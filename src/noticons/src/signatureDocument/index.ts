import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const signatureDocumentIconGroup: IconGroup<"default"> = createIconGroup(
  "signatureDocument",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
