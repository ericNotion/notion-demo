import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const suitcaseIconGroup: IconGroup<"default"> = createIconGroup(
  "suitcase",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
