import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const parkingIconGroup: IconGroup<"default"> = createIconGroup(
  "parking",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
