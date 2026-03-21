import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const knifeIconGroup: IconGroup<"default"> = createIconGroup(
  "knife",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
