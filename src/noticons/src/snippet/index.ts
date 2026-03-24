import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const snippetIconGroup: IconGroup<"default"> = createIconGroup(
  "snippet",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
