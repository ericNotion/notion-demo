import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const paperTowelsIconGroup: IconGroup<"default"> = createIconGroup(
  "paperTowels",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
