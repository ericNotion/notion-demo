import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const emojiSmilingEyesIconGroup: IconGroup<"default"> = createIconGroup(
  "emojiSmilingEyes",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
