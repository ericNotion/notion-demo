import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const arrowLeftIconGroup: IconGroup<"default"> = createIconGroup(
  "arrowLeft",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
