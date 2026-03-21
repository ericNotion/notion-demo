import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const hexagonOneSixthIconGroup: IconGroup<"default"> = createIconGroup(
  "hexagonOneSixth",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
