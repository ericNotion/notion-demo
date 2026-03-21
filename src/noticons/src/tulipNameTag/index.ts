import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const tulipNameTagIconGroup: IconGroup<"default"> = createIconGroup(
  "tulipNameTag",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
