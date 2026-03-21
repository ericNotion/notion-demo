import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const toriiIconGroup: IconGroup<"default"> = createIconGroup(
  "torii",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
