import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const customsIconGroup: IconGroup<"default"> = createIconGroup(
  "customs",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
