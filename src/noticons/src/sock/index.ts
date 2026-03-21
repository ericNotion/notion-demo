import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const sockIconGroup: IconGroup<"default"> = createIconGroup(
  "sock",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
