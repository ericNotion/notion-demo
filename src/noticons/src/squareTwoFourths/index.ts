import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const squareTwoFourthsIconGroup: IconGroup<"default"> = createIconGroup(
  "squareTwoFourths",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
