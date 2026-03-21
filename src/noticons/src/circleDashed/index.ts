import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const circleDashedIconGroup: IconGroup<"default"> = createIconGroup(
  "circleDashed",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
