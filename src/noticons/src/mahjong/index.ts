import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const mahjongIconGroup: IconGroup<"default"> = createIconGroup(
  "mahjong",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
