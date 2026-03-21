import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const chessBishopIconGroup: IconGroup<"default"> = createIconGroup(
  "chessBishop",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
