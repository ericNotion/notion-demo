import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const documentIconGroup: IconGroup<"default"> = createIconGroup(
  "document",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
