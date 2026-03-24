import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const crayonIconGroup: IconGroup<"default"> = createIconGroup(
  "crayon",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
