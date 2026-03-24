import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cardClubIconGroup: IconGroup<"default"> = createIconGroup(
  "cardClub",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
