import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const emojiWinkingIconGroup: IconGroup<"default"> = createIconGroup(
  "emojiWinking",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
