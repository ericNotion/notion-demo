import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const mopIconGroup: IconGroup<"default"> = createIconGroup(
  "mop",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
