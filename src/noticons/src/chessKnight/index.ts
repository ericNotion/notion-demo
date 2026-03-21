import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const chessKnightIconGroup: IconGroup<"default"> = createIconGroup(
  "chessKnight",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
