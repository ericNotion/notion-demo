import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const featherIconGroup: IconGroup<"default"> = createIconGroup(
  "feather",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
