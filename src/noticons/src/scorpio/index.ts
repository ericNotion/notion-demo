import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const scorpioIconGroup: IconGroup<"default"> = createIconGroup(
  "scorpio",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
