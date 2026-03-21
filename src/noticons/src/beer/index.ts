import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const beerIconGroup: IconGroup<"default"> = createIconGroup(
  "beer",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
