import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const pooIconGroup: IconGroup<"default"> = createIconGroup(
  "poo",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
