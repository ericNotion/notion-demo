import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const directionalSignIconGroup: IconGroup<"default"> = createIconGroup(
  "directionalSign",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
