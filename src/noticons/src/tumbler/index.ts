import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const tumblerIconGroup: IconGroup<"default"> = createIconGroup(
  "tumbler",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
