import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const airplaneIconGroup: IconGroup<"default"> = createIconGroup(
  "airplane",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
