import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const flatwareIconGroup: IconGroup<"default"> = createIconGroup(
  "flatware",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
