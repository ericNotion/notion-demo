import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const chessKingIconGroup: IconGroup<"default"> = createIconGroup(
  "chessKing",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
