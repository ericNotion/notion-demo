import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const puzzleIconGroup: IconGroup<"default"> = createIconGroup(
  "puzzle",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
