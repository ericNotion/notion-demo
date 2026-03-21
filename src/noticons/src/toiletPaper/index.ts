import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const toiletPaperIconGroup: IconGroup<"default"> = createIconGroup(
  "toiletPaper",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
