import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const keypadIconGroup: IconGroup<"default"> = createIconGroup(
  "keypad",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
