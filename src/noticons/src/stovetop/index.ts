import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const stovetopIconGroup: IconGroup<"default"> = createIconGroup(
  "stovetop",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
