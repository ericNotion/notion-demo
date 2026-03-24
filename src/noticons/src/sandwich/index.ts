import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const sandwichIconGroup: IconGroup<"default"> = createIconGroup(
  "sandwich",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
