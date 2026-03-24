import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const libraIconGroup: IconGroup<"default"> = createIconGroup(
  "libra",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
