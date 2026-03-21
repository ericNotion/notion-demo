import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const printIconGroup: IconGroup<"default"> = createIconGroup(
  "print",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
