import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const busMetroIconGroup: IconGroup<"default"> = createIconGroup(
  "busMetro",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
