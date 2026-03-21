import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const chessPawnIconGroup: IconGroup<"default"> = createIconGroup(
  "chessPawn",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
