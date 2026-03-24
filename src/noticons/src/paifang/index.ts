import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const paifangIconGroup: IconGroup<"default"> = createIconGroup(
  "paifang",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
