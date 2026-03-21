import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const flagPennantIconGroup: IconGroup<"default"> = createIconGroup(
  "flagPennant",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
