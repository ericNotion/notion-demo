import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const earIconGroup: IconGroup<"default"> = createIconGroup(
  "ear",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
