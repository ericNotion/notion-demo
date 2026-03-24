import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const emojiSadIconGroup: IconGroup<"default"> = createIconGroup(
  "emojiSad",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
