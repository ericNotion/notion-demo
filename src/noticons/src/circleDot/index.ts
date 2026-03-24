import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const circleDotIconGroup: IconGroup<"default"> = createIconGroup(
  "circleDot",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
