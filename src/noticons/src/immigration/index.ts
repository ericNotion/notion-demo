import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const immigrationIconGroup: IconGroup<"default"> = createIconGroup(
  "immigration",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
