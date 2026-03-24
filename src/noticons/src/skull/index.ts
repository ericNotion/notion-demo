import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const skullIconGroup: IconGroup<"default"> = createIconGroup(
  "skull",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
