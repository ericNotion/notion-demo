import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const emojiSurprisedIconGroup: IconGroup<"default"> = createIconGroup(
  "emojiSurprised",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
