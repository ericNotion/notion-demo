import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const emojiDisappointedIconGroup: IconGroup<"default"> = createIconGroup(
  "emojiDisappointed",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
