import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const couchIconGroup: IconGroup<"default"> = createIconGroup(
  "couch",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
