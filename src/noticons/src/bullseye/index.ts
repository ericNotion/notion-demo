import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const bullseyeIconGroup: IconGroup<"default"> = createIconGroup(
  "bullseye",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
