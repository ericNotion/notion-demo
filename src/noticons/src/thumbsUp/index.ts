import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const thumbsUpIconGroup: IconGroup<"default"> = createIconGroup(
  "thumbsUp",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
