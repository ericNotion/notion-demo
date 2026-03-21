import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const wrappingPaperIconGroup: IconGroup<"default"> = createIconGroup(
  "wrappingPaper",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
