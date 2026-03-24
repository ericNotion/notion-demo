import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const draftsIconGroup: IconGroup<"default"> = createIconGroup(
  "drafts",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
