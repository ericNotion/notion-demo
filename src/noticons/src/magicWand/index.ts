import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const magicWandIconGroup: IconGroup<"default"> = createIconGroup(
  "magicWand",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
