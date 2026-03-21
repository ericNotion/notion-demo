import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const monorailIconGroup: IconGroup<"default"> = createIconGroup(
  "monorail",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
