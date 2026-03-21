import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const snareDrumIconGroup: IconGroup<"default"> = createIconGroup(
  "snareDrum",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
