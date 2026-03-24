import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const emojiGrinningIconGroup: IconGroup<"default"> = createIconGroup(
  "emojiGrinning",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
