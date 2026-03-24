import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const keyboardAlternateIconGroup: IconGroup<"default"> = createIconGroup(
  "keyboardAlternate",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
