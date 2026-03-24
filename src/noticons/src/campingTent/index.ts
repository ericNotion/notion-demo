import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const campingTentIconGroup: IconGroup<"default"> = createIconGroup(
  "campingTent",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
