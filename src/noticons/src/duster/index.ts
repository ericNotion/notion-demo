import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const dusterIconGroup: IconGroup<"default"> = createIconGroup(
  "duster",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
