import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const pentagonTwoFifthsIconGroup: IconGroup<"default"> = createIconGroup(
  "pentagonTwoFifths",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
