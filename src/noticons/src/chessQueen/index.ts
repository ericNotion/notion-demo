import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const chessQueenIconGroup: IconGroup<"default"> = createIconGroup(
  "chessQueen",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
