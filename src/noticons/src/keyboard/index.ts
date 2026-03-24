import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const keyboardIconGroup: IconGroup<"default"> = createIconGroup(
  "keyboard",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
