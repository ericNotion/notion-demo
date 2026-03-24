import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const emojiIconGroup: IconGroup<"default"> = createIconGroup(
  "emoji",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
