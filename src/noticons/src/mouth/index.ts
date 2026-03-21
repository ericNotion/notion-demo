import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const mouthIconGroup: IconGroup<"default"> = createIconGroup(
  "mouth",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
