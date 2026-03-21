import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cursorClickIconGroup: IconGroup<"default"> = createIconGroup(
  "cursorClick",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
