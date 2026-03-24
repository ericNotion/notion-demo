import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cigaretteIconGroup: IconGroup<"default"> = createIconGroup(
  "cigarette",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
