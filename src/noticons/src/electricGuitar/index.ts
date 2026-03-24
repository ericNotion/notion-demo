import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const electricGuitarIconGroup: IconGroup<"default"> = createIconGroup(
  "electricGuitar",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
