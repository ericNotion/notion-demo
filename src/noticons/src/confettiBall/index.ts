import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const confettiBallIconGroup: IconGroup<"default"> = createIconGroup(
  "confettiBall",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
