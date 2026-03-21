import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const suitClubIconGroup: IconGroup<"default"> = createIconGroup(
  "suitClub",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
