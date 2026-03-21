import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const scarfIconGroup: IconGroup<"default"> = createIconGroup(
  "scarf",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
