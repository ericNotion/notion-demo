import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const emojiHeartEyesIconGroup: IconGroup<"default"> = createIconGroup(
  "emojiHeartEyes",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
