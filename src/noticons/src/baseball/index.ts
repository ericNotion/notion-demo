import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const baseballIconGroup: IconGroup<"default"> = createIconGroup(
  "baseball",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
