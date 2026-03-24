import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const concealIconGroup: IconGroup<"default"> = createIconGroup(
  "conceal",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
