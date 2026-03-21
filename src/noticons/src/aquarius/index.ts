import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const aquariusIconGroup: IconGroup<"default"> = createIconGroup(
  "aquarius",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
