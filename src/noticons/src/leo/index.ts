import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const leoIconGroup: IconGroup<"default"> = createIconGroup(
  "leo",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
