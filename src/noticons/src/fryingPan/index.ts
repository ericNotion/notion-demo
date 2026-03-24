import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const fryingPanIconGroup: IconGroup<"default"> = createIconGroup(
  "fryingPan",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
