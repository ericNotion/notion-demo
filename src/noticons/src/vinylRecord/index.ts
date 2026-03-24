import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const vinylRecordIconGroup: IconGroup<"default"> = createIconGroup(
  "vinylRecord",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
