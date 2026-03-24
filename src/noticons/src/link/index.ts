import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const linkIconGroup: IconGroup<"default"> = createIconGroup(
  "link",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
