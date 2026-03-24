import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const emojiSunglassesIconGroup: IconGroup<"default"> = createIconGroup(
  "emojiSunglasses",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
