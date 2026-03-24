import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const virgoIconGroup: IconGroup<"default"> = createIconGroup(
  "virgo",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
