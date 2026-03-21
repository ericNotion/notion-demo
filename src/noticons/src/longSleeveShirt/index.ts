import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const longSleeveShirtIconGroup: IconGroup<"default"> = createIconGroup(
  "longSleeveShirt",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
