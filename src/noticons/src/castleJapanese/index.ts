import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const castleJapaneseIconGroup: IconGroup<"default"> = createIconGroup(
  "castleJapanese",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
