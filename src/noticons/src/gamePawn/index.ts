import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const gamePawnIconGroup: IconGroup<"default"> = createIconGroup(
  "gamePawn",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
