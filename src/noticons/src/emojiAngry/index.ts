import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const emojiAngryIconGroup: IconGroup<"default"> = createIconGroup(
  "emojiAngry",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
