import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const emojiNeutralIconGroup: IconGroup<"default"> = createIconGroup(
  "emojiNeutral",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
